<script>
	import Person from "$components/happydays/HappyDays.person.svelte";
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let screenWidth = null;
	let screenHeight = null;
	let peopleColor = ["#f6b177"]; //["#492e5a","#653962","#7f4569","#97546e","#ad6473","#c17677","#d3897c","#e19e83","#eeb48c","#f8cb97","#ffe3a6"];
	let views = ["all","1","2","3"];
	let customClicked = false;
	export let time, beginTime, timeline, currentPeople, options, hed, selectedPerson;
	time = time > 239 ? time : 241;
	let happyBar = 0;
	let selectedViewIndex = 0; // displayed group
	let selectedSort = "num";
	let viewTranslate = [
		[0,0,0,3],
		[0,0,0,1]
		];

	// limits
	let maxPeople = 9;
	let columns = 5;
	let rows = options.length;
	let personWidth = 150;
	let personHeight = 0;
	let hideInfo = false;
	let resizeDetector = true;
	let loaded = false;
	let firstHeight = 0;

	/****************
	 FUNCTIONS
	*****************/
	function changeView(v) {
		selectedViewIndex = views.indexOf(v);
	}
	let firstResize = true;

	function checkWindow(w, h) {
		const defaultWidth = 130;
		if ( (h > 0 && firstResize) || Math.abs(firstHeight - h) > 120 ) {
			firstHeight = h;
			firstResize = false;
		}
		personWidth = (w-10) / 4 < defaultWidth ? (w-10) / 4 : defaultWidth;
		personHeight = (firstHeight - 60) / rows; //  > personWidth*1.8 ? personWidth*1.5 : personHeight;

		columns = Math.floor( w  / personWidth)
		columns = columns > 20 ? 20 : columns;
		viewTranslate[0][0] = 50 - (personWidth/2*3/(w + 80)*94);
		if (personWidth < 100) {
			hideInfo = true;
		} else {
			hideInfo = false;
		}

		maxPeople = columns * rows;
		getPosition(w, h);
	}

	let first = true;
	function checkTiming() {
		if (first) {
			selectedViewIndex = 0;
			first = false;
			resize();
		} else {
			timeline.forEach(function(line) {
				if (time  > line.time) {
					selectedViewIndex = line.view;
					selectedSort = line.sortby;
				}
			})
		}
		if (isNaN(time)) { time = 1697; }

		// if (time > 1440) { time = time - 1440; }
		customClicked = time > 605 ? true : false;
		happyBar = time >= 365 || time < beginTime ? 1 : 0;
	}
	


	function checkPeople() {
		// selectedPerson = null; // this can close the modal on scroll
		for (let j = 0; j < currentPeople.length; j++) { // each person
			// resetting stats 
			currentPeople[j]["current_company"] = [];
			currentPeople[j]["social_score"] = 0;
			let companionNumber = 1;
			let socialScoreTracker = {}; // the key will be start time, and each key will have a time and max person score
			for (let k = 0; k < currentPeople[j]["activity"].length; k++) { // each activity
				let start = currentPeople[j]["activity"][k][0];
				let end = currentPeople[j]["activity"][k][1];
				let theCompany = currentPeople[j]["activity"][k][5];
				let peopleScore = lookup.PEOPLESCORE[theCompany].score;

				// if the time has passed
				if ((start <= time) || (start <= time - 1440 && time > 1440) ) {
					let timeAmount = time - currentPeople[j]["activity"][k][0] > currentPeople[j]["activity"][k][3] ? currentPeople[j]["activity"][k][3] : time - currentPeople[j]["activity"][k][0]; 
					

					if (start in socialScoreTracker) {
						socialScoreTracker[start]["maxTime"] = timeAmount > socialScoreTracker[start]["maxTime"] ? timeAmount : socialScoreTracker[start]["maxTime"];
						socialScoreTracker[start]["maxScore"] = peopleScore > socialScoreTracker[start]["maxScore"] ? peopleScore : socialScoreTracker[start]["maxScore"];
					} else {
						socialScoreTracker[start] = {}
						socialScoreTracker[start]["maxTime"] = timeAmount;
						socialScoreTracker[start]["maxScore"] = peopleScore;
					}
					// currentPeople[j]["social_score"] += lookup.PEOPLESCORE[theCompany].score * timeAmount; //Math.min(Math.max(timeAmount/4, 1), 30);
				}

				// if time is between start/end
				if ((start <= time && end > time) || (start <= (time - 1440) && end > (time - 1440) )) {
					currentPeople[j]["activity"][k][6] = companionNumber;
					currentPeople[j]["current_activity"] = lookup.ACTIVITY[currentPeople[j]["activity"][k][2]].cleanTask;
					currentPeople[j]["current_company"].push(theCompany);
					companionNumber++;
					// keeping track of how many people in the group are being social
				} else { // if not
					currentPeople[j]["activity"][k][6] = 0;
				}
			}
			// iterating through the socialScoreTracker to get the maxTime and maxScore
			for (const key in socialScoreTracker) {
				currentPeople[j]["social_score"] += socialScoreTracker[key]["maxTime"]*socialScoreTracker[key]["maxScore"];
			}
		}
	}

	// Setting the position that we can look up for each person, based on selectedSort
	let positionLookup = {};
	function getPosition(w, h) {
		positionLookup = {};
		let currentPeopleTemp = sortObj(currentPeople.slice(0, maxPeople), selectedSort);
		for (let n = 0; n < currentPeopleTemp.length; n++) {
			let colNum = n % columns;
			let rowNum = Math.floor(n / columns);
			let left = colNum * (100/ columns);
			let top = rowNum * (100 / (rows) );
			positionLookup[currentPeopleTemp[n]["TUCASEID"]] = [left, top, personWidth-1, personHeight - 1]
		}
	}

	function sortObj(obj, byVar) {
		if (byVar == "num") { 
			return obj.sort(fieldSorter(["TUCASEID"], true));
		}
		return obj.sort(fieldSorter(["happy_num", "social_score","TUCASEID"], false));
	}

	function fieldSorter(fields, desc) {
		return function (a, b) {
			return fields
			.map(function (o) {
				var dir = 1;
				if (o[0] === '-') {
					dir = -1;
					o=o.substring(1);
				}
				if (desc) {
					if (a[o] > b[o]) return dir;
					if (a[o] < b[o]) return -(dir);
				} else {
					if (a[o] < b[o]) return dir;
					if (a[o] > b[o]) return -(dir);
				}
				return 0;
			})
			.reduce(function firstNonZeroValue (p,n) {
				return p ? p : n;
			}, 0);
		};
	}


	function resize() {
		resizeDetector = true;
		setTimeout(function() {
			resizeDetector = false;
		}, 300)
	}

	setInterval(function() {
		if (screenWidth != null) {
			loaded = true;
		}
	}, 200)

	onMount(() => {		
		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
		}
	});

	$: time, checkPeople(), checkTiming(), checkWindow(screenWidth, screenHeight)
</script>

<div class="interactive {resizeDetector ? 'resize-animation-stopper' : ''}" style='{loaded ? "opacity: 1" : "opacity: 0"};'>
	<div class="displayContainter">
		<div class="groupContainer" style="transform: perspective(0) translate3d({viewTranslate[selectedViewIndex][0]}%, {viewTranslate[selectedViewIndex][1]}%, {viewTranslate[selectedViewIndex][2]}px) scale({viewTranslate[selectedViewIndex][3]});" bind:clientWidth={screenWidth} bind:clientHeight={screenHeight}>
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
			hideInfo={hideInfo}
			hed={hed}
			bind:selectedPerson={selectedPerson}
			/>
			{/if}
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
		transform-origin: center;
		text-align: center;
		width: 100%;
		height: 100vh;
		transition: opacity 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
		font-family: var(--sans);
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
		padding-right: 60px;
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
		transform: perspective(0) translate3d(0, 0, 0) scale(1);
		transform-origin: top left;
	}
	@media screen and (max-width: 600px) {
		.groupContainer {
			width: calc(100% - 50px);
		}
	}
	.groupContainer.zoomIn {
		transform: perspective(0) translate3d(50%, 0, 0) scale(3);
	}
	.groupContainer.zoomOut {
		transform: perspective(0) translate3d(0, 0, 0) scale(1);
	}



</style>

