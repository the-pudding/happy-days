<script>
	import Person from "$components/happydays/HappyDays.person.svelte";
	
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';

	let screenWidth;
	let peopleColor = ["#36374c","#4a475e","#5e5870","#736a82","#897c95","#a08fa8","#b7a2bb","#cfb6ce","#e7cae2","#ffdef5"];
	let views = ["all","1","2","3"];
	let customClicked = false;
	export let time, beginTime, timeline, currentPeople, options;
	time = time > 239 ? time : 241;
	let happyBar = 0;
	let selectedViewIndex = 4; // displayed group
	let maxPeople = 9;
	let viewTranslate = [
		"zoomOut",
		"group1",
		"group2",
		"group3",
		"zoomIn"
		];

	/****************
	 FUNCTIONS
	*****************/
	function changeView(v) {
		customClicked = true;
		selectedViewIndex = views.indexOf(v);
	}

	function checkWindow(w) {
		const breakpoints = {0: 2, 800: 3,1200: 4,1500: 5}
		let breakpoint = 0;
		for (const [key, bp] of Object.entries(breakpoints)) {
			if (w > Number(key)) {
				breakpoint = bp;
			}
		}
		maxPeople = breakpoint * 4;
	}


	function checkTiming() {
		time = time > 239 ? time : 241; 
		// if (!customClicked) {
		timeline.forEach(function(line) {
			if (time - 2 > line.time) {
				selectedViewIndex = line.view;
			}
		})
		// }

		if (isNaN(time)) { time = 240; }
		if (time > 1440) { time = time - 1440; }
		customClicked = time >= 780 ? true : false;
		happyBar = time >= 343 || time < beginTime ? 1 : 0;
	}
	

	// Checking if activity start and end are within the time for the currentPeople variable	
	function checkPeople() {
		for (let i = 0; i < options.length; i++) { // each happy_group
			
			const opt = options[i];

			// each person
			for (let j = 0; j < currentPeople[opt].length; j++) { // each person
				let peopleScore = 0;

				for (let k = 0; k < currentPeople[opt][j]["activity"].length; k++) { // each activity
					let start = currentPeople[opt][j]["activity"][k][0];
					let end = currentPeople[opt][j]["activity"][k][1];

					// if time is between start/end
					if ((start <= time && end > time) || (start <= (time - 1440) && end > (time - 1440) ) ) {
						currentPeople[opt][j]["activity"][k][6] = 1;
						currentPeople[opt][j]["current_activity"] = lookup.ACTIVITY[currentPeople[opt][j]["activity"][k][2]].task;
						peopleScore += lookup.PEOPLESCORE[currentPeople[opt][j]["activity"][k][5]];
					} else { // if not
						currentPeople[opt][j]["activity"][k][6] = 0;
					}

					currentPeople[opt][j]["peopleScore"] = peopleScore > peopleColor.length - 1 ? peopleColor.length - 1 : Math.round(peopleScore);
				}
				
			}
		}
	}

	$: time, checkPeople(), checkTiming(), checkWindow(screenWidth)
</script>

<svelte:window bind:innerWidth={screenWidth} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if selectedViewIndex != 0 && selectedViewIndex != 4 && customClicked}
<button class="wideViewButton" on:click={() => changeView("all")}>Zoom out</button>
{/if}
<div class="interactive">
	<div class="interactiveBackground" on:click={() => changeView("all")}></div>
	<div class="displayContainter">
		<div class="groupContainer {viewTranslate[selectedViewIndex]}">
			{#each Object.entries(currentPeople) as [key, happy_group]}
			<div class="group" on:click={() => changeView(key)}>

				{#each happy_group as person, personKey}
					{#if personKey < maxPeople}
						<Person 
						person={person} 
						time={time} 
						beginTime={beginTime} 
						customClicked={customClicked} 
						happyBar={happyBar} 
						happyGroup={key}
						personKey={personKey} 
						peopleColor={peopleColor}
						view={selectedViewIndex}
						/>
					{/if}
				{/each}

			</div>
			{/each}	
		</div>
	</div>
</div>

<style>
	.wideViewButton {
		margin-left: 10px;
		position: absolute;
		left: 10px;
		bottom: 10%;
		z-index: 100;
	}
	.interactive {
		/* max-width: 1200px; */
		/* margin: 0 auto; */
		transform-origin: center;
		text-align: center;
		width: 100%;
		height: 100vh;
	}
	.interactiveBackground {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		cursor: pointer;
		transition: background 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
	}
	button.selected {
		background: #aaa;
	}
	.displayContainter {
		width: 100%;
		/* max-width: 1500px; */
		/* overflow: hidden;*/
		overflow: hidden;
		margin: 0 auto;
		padding-right: 50px;
	}
	.groupContainer {
		position: relative;
		width: 300%;
		height: 100vh;
		transition: all 2000ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
		pointer-events: none;
	}


	.groupContainer.zoomIn {
		transform: perspective(0) translate3d(-63.05%, 33%, 0.2px)
	}
	.groupContainer.zoomOut {
		transform: perspective(0) translate3d(-100%, -50%, -1px);
	}
	.groupContainer.group1 {
		transform: perspective(0) translate3d(0, 0, 0);
	}
	.groupContainer.group2 {
		transform: perspective(0) translate3d(-33%, 0, 0);
	}
	.groupContainer.group3 {
		transform: perspective(0) translate3d(-66%, 0, 0);
	}

	@media only screen  and (max-width: 1800px) {
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-64%, 33%, 0.2px);
		}
	}
	@media only screen  and (max-width: 1500px) {
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-41.5%, 16%, 0.2px);
		}
	}
	@media only screen  and (max-width: 1200px) {
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-52.5%, 7%, 0.2px);
		}
	}
	@media only screen  and (max-width: 800px) {
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-45%, 0, 0.2px);
		}
	}
	
	@media only screen  and (max-width: 500px) {
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-45%, 0, 0.2px);
		}
	}
	
	
	
	
	
/*	
	// 1800: [63.05%, 33%, 0, 0]
	// 1500: [-64%, 33%, 0, 0]
	// 1200: [-41.5%, 16%, 0, 0]
	// 800:  [-52.5%, 13%, 0, 0]
	// 500:  [-45%, 0, 0, 0]*/


	.group {
		display: flex;
		position: absolute;
		left: 0px;
		top: 0px;
		display: block;
		width: calc(100% / 3);
		padding: 0 2%;
		box-sizing: border-box;
		padding-top: 20px;
		pointer-events: all;
		flex-flow: column wrap;
	}
	.groupButton {
		font-size: 40px;
		cursor: pointer;
		width: 200px;
		background: #eee;
	}
	.groupButton:hover {
		background: #ddd;
	}
	.group:nth-child(2) {
		left: 33%;
	}
	.group:nth-child(3) {
		left: 66%;
	}

</style>

