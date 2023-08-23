<script>
	import Person from "$components/happydays/HappyDays.person.svelte";
	
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';

	let screenWidth;
	let peopleColor = ["#492e5a","#653962","#7f4569","#97546e","#ad6473","#c17677","#d3897c","#e19e83","#eeb48c","#f8cb97","#ffe3a6"];
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
		"zoomIn",
		"zoomIn2"
		];

	/****************
	 FUNCTIONS
	*****************/
	function changeView(v) {
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

	let first = true;
	function checkTiming() {
		time = time > 239 ? time : 241; 
		if (first) {
			selectedViewIndex = 0;
			first = false;
		} else {
			timeline.forEach(function(line) {
				if (time - 2 > line.time) {
					selectedViewIndex = line.view;
				}
			})
		}

		if (isNaN(time)) { time = 240; }
		if (time > 1440) { time = time - 1440; }
		customClicked = time > 605 ? true : false;
		happyBar = time >= 365 || time < beginTime ? 1 : 0;
	}
	

	// Checking if activity start and end are within the time for the currentPeople variable	
	let socialStats = {"1":0,"2":0,"3":0}; 
	function checkPeople() {
		socialStats = {"1":0,"2":0,"3":0}; 
		for (let i = 0; i < options.length; i++) { // each happy_group
			
			const opt = options[i];
			// each person
			for (let j = 0; j < currentPeople[opt].length; j++) { // each person
				let peopleScore = 0;
				currentPeople[opt][j]["current_company"] = [];
				currentPeople[opt][j]["social_score"] = 0;
				for (let k = 0; k < currentPeople[opt][j]["activity"].length; k++) { // each activity
					let start = currentPeople[opt][j]["activity"][k][0];
					let end = currentPeople[opt][j]["activity"][k][1];
					let theCompany = currentPeople[opt][j]["activity"][k][5];

					if ((start <= time) || (start <= time - 1440 && time > 1440) ) {
						let timeAmount = time - currentPeople[opt][j]["activity"][k][0] > currentPeople[opt][j]["activity"][k][3] ? currentPeople[opt][j]["activity"][k][3] : time - currentPeople[opt][j]["activity"][k][0]; 
						currentPeople[opt][j]["social_score"] += lookup.PEOPLESCORE[theCompany].score * Math.min(Math.max(timeAmount/4, 1), 30);
					}
					
					// if time is between start/end
					if ((start <= time && end > time) || (start <= (time - 1440) && end > (time - 1440) ) ) {
						currentPeople[opt][j]["activity"][k][6] = 1;
						currentPeople[opt][j]["current_activity"] = lookup.ACTIVITY[currentPeople[opt][j]["activity"][k][2]].cleanTask;
						currentPeople[opt][j]["current_company"].push(theCompany);
						peopleScore += lookup.PEOPLESCORE[theCompany];
						// keeping track of how many people in the group are being social
					} else { // if not
						currentPeople[opt][j]["activity"][k][6] = 0;
					}
				}
				currentPeople[opt][j]["peopleScore"] = peopleScore > peopleColor.length - 1 ? peopleColor.length - 1 : Math.round(peopleScore);
				if (currentPeople[opt][j]["social_score"] <= 30 && maxPeople > j) {
					socialStats[opt] += 1;
				}
			}
		}
	}
	const groupLookup = ["","Lowest","Middle","Highest"];
	$: time, checkPeople(), checkTiming(), checkWindow(screenWidth)
</script>

<svelte:window bind:innerWidth={screenWidth} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if selectedViewIndex != 0 && selectedViewIndex != 4 && time > 540}
<button class="wideViewButton" on:click={() => changeView("all")}>Zoom out</button>
{/if}
<div class="interactive">
	<div class="interactiveBackground" on:click={() => changeView("all")}></div>
	<div class="displayContainter">
			<div class="groupContainer {viewTranslate[selectedViewIndex]}">
			{#each Object.entries(currentPeople) as [key, happy_group]}
			<div class="group">
				{#if selectedViewIndex == 0}
					<button out:fade in:fade={{ delay: 1200 }} class="wideViewButton" on:click={() => changeView(key)}>{groupLookup[key]}</button>
				{/if}
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
				{#if selectedViewIndex != 1 && selectedViewIndex != 3 && selectedViewIndex != 2 && time > 602}
				<div class="socialStats" transition:fade>
					{socialStats[key]} of {maxPeople} have been mostly isolated today.
				</div>
				{/if}
			</div>
			{/each}	
		</div>
	</div>
</div>

<style>
	.wideViewButton {
		margin-left: 10px;
		position: absolute;
		left: calc(2% + 210px);
		top: 22px;
		z-index: 100;
		background: white;
	}
	.group .wideViewButton {
		margin-left: 0px;
		padding: 18px;
		border-radius: 8px;
		left: 50%;
		top: -90px;
		transform: translateX(-50%);
		font-size: 45px;
	}
	.wideViewButton:hover {
		text-decoration: underline;
	}
	.socialStats {
		font-size: 45px;
		color: white;
		padding: 20px 0;
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
		padding-top: 50px;
		box-sizing: border-box;
		/* max-width: 1500px; */
		/* overflow: hidden;*/
		overflow: hidden;
		margin: 0 auto;
		padding-right: 60px;
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
		transform: perspective(0) translate3d(-62.4%, 27%, 0.2px)
	}
	.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(30.5%, 33%, 0.3px)
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
		.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(31.5%, 33%, 0.3px)
		}
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-63.5%, 26%, 0.2px);
		}
	}
	@media only screen  and (max-width: 1500px) {
		.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(31.5%, 33%, 0.3px)
		}
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-41.5%, 10%, 0.2px);
		}
	}
	@media only screen  and (max-width: 1200px) {
		.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(30%, 33%, 0.3px)
		}
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-52.1%, 7%, 0.2px);
		}
	}
	@media only screen  and (max-width: 800px) {
		.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(21.5%, 33%, 0.2px)
		}
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-45%, 0, 0.2px);
		}
	}
	
	@media only screen  and (max-width: 500px) {
		.groupContainer.zoomIn2 {
			transform: perspective(0) translate3d(22%, 33%, 0.2px)
		}
		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(-45%, 0, 0.2px);
		}
	}
	
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

