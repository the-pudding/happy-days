<script>
	import Person from "$components/happydays/HappyDays.person.svelte";
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';

	let screenWidth = 1000;
	let screenHeight = 1000;
	let peopleColor = ["#492e5a","#653962","#7f4569","#97546e","#ad6473","#c17677","#d3897c","#e19e83","#eeb48c","#f8cb97","#ffe3a6"];
	let views = ["all","1","2","3"];
	let customClicked = false;
	export let time, beginTime, timeline, currentPeople;
	time = time > 239 ? time : 241;
	let happyBar = 0;
	let selectedViewIndex = 4; // displayed group
	let selectedSort = "num";
	let viewTranslate = [
		"zoomIn",
		"zoomOut"
		];

	// limits
	let maxPeople = 9;
	let columns = 5;
	let rows = 4;
	let personWidth = 170;
	let personHeight = 180;
	

	/****************
	 FUNCTIONS
	*****************/
	function changeView(v) {
		selectedViewIndex = views.indexOf(v);
	}

	function checkWindow(w, h) {
		rows = Math.floor( (h - 60) / personHeight);
		columns = Math.floor( (w - 40) / personWidth)
		maxPeople = columns * rows;
		getPosition(w, h);
	}

	let first = true;
	function checkTiming() {
		time = time > 239 ? time : 241; 
		if (first) {
			selectedViewIndex = 0;
			first = false;
		} else {
			timeline.forEach(function(line) {
				if (time  > line.time) {
					selectedViewIndex = line.view;
					selectedSort = line.sortby;
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
		// resetting stats 
		socialStats = {"1":0,"2":0,"3":0}; 
		for (let j = 0; j < currentPeople.length; j++) { // each person
			let peopleScore = 0;
			currentPeople[j]["current_company"] = [];
			currentPeople[j]["social_score"] = 0;
			for (let k = 0; k < currentPeople[j]["activity"].length; k++) { // each activity
				let start = currentPeople[j]["activity"][k][0];
				let end = currentPeople[j]["activity"][k][1];
				let theCompany = currentPeople[j]["activity"][k][5];

				if ((start <= time) || (start <= time - 1440 && time > 1440) ) {
					let timeAmount = time - currentPeople[j]["activity"][k][0] > currentPeople[j]["activity"][k][3] ? currentPeople[j]["activity"][k][3] : time - currentPeople[j]["activity"][k][0]; 
					currentPeople[j]["social_score"] += lookup.PEOPLESCORE[theCompany].score * timeAmount; //Math.min(Math.max(timeAmount/4, 1), 30);
				}

				// if time is between start/end
				if ((start <= time && end > time) || (start <= (time - 1440) && end > (time - 1440) ) ) {
					currentPeople[j]["activity"][k][6] = 1;
					currentPeople[j]["current_activity"] = lookup.ACTIVITY[currentPeople[j]["activity"][k][2]].cleanTask;
					currentPeople[j]["current_company"].push(theCompany);
					peopleScore += lookup.PEOPLESCORE[theCompany];
					// keeping track of how many people in the group are being social
				} else { // if not
					currentPeople[j]["activity"][k][6] = 0;
				}
			}
			currentPeople[j]["peopleScore"] = peopleScore > peopleColor.length - 1 ? peopleColor.length - 1 : Math.round(peopleScore);
			if (currentPeople[j]["social_score"] <= 30 && maxPeople > j) {
				socialStats[String(currentPeople[j]["happy_group"])] += 1;
			}
		}
	}

	// Setting the position that we can look up for each person, based on selectedSort
	let positionLookup = {};
	function getPosition(w, h) {
		positionLookup = {};
		let currentPeopleTemp = currentPeople.slice(0, maxPeople);
		currentPeopleTemp = sortObj(currentPeopleTemp, selectedSort);
		for (let n = 0; n < currentPeopleTemp.length; n++) {
			let colNum = Math.floor(n / rows);
			let rowNum = n % rows;
			let left = colNum * (100/ columns);
			let top = rowNum * (100 / rows);

			if (screenWidth < 800) {
				colNum = n % columns;
				rowNum = Math.floor(n / columns);
				left = colNum * (100/ columns);
				top = rowNum * (100 / (rows) );
			}
			positionLookup[currentPeopleTemp[n]["TUCASEID"]] = [left, top, personWidth - 5, personHeight - 5]
		}
	}

	function sortObj(obj, byVar) {
		return obj.sort((a,b) => (a[byVar] > b[byVar]) ? 1 : ((b[byVar] > a[byVar]) ? -1 : 0));
	}

	$: time, checkPeople(), checkTiming(), checkWindow(screenWidth, screenHeight)
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div class="interactive">
	<div class="displayContainter">
		<div class="groupContainer {viewTranslate[selectedViewIndex]}">
			{#each currentPeople as person, personKey}
			{#if personKey < maxPeople}
				<Person 
				person={person} 
				time={time} 
				beginTime={beginTime} 
				customClicked={customClicked} 
				happyBar={happyBar} 
				happyGroup={person.happyGroup}
				personKey={personKey} 
				peopleColor={peopleColor}
				view={selectedViewIndex}
				columns={columns}
				rows={rows}
				position={positionLookup[person.TUCASEID]}
				selectedSort={selectedSort}
				/>
			{/if}
			{/each}
				<!-- {#if selectedViewIndex != 1 && selectedViewIndex != 3 && selectedViewIndex != 2 && time > 602}
				<div class="socialStats" transition:fade>
					{socialStats[key]} of {maxPeople} have been mostly isolated today.
				</div>
				{/if} -->
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
			position: relative;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			padding-top: 50px;
			box-sizing: border-box;
			/* max-width: 1500px; */
			/* overflow: hidden;*/
			overflow: hidden;
			margin: 0 auto;
			padding-right: 80px;
		}
		.groupContainer {
			position: absolute;
			width: calc(100% - 80px);
			height: 90vh;
			transition: all 2000ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
			transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
			pointer-events: none;
			top: 5vh;
			left: 0%;
			transform-origin: top left;
		}


		.groupContainer.zoomIn {
			transform: perspective(0) translate3d(0%, 0%, 0.3px);
			left: 50%;
			margin-left: -220px;
			margin-top: 10vh;
		}
		.groupContainer.zoomOut {
			transform: perspective(0) translate3d(0, 0, 0);
		}
	

		@media only screen  and (max-width: 500px) {
			.groupContainer.zoomIn {
				transform: perspective(0) translate3d(0%, 0%, 0.2px);
				left: 50%;
				margin-left: -150px;
				margin-top: 10vh;
			}
		}

		

	</style>

