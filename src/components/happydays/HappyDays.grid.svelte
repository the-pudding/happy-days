<script>
	import Sprites from "$components/happydays/HappyDays.sprites.svelte";
	import people from "$components/happydays/people-all-nogroup.json";
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';

	let peopleColor = ["#eee7d7","#f3e5c5","#f6e3b3","#f9e2a0","#fce08e","#fdde7a","#fedd66","#ffdb50","#ffd936","#ffd800"];
	let views = ["all","1","2","3"];
	let customClicked = false;
	export let time;
	export let beginTime;
	let selectedViewIndex = 4; // displayed group
	let viewTranslate = [
		["-100%",0,"-1px","0px"],
		[0,0,0,0],
		["-33%",0,0,0],
		["-66%",0,0,0],
		["-52.5%",0,"0.2px",0]
	];
	const options = ["1","2","3"]; // happiness groups
	let maxPeople = 9;
	const days = [1,7]; // days of the week to display
	const ageRange = [25,55]; // age range to display
	let currentPeople = selectPeople(maxPeople); // initialize
	
	// Select ## random people in a given group
	function selectPeople(max) {
		let final = {};
		for (let i = 0; i < options.length; i++) {
			let peopleUniverse = people.filter(function(p) {
				if (days.indexOf(p.TUDIARYDAY_x) != -1 && p.happy_group == options[i] && p.TEAGE >= ageRange[0] && p.TEAGE <= ageRange[1] && p.activity[p.activity.length-1] != 1) { // && p.TRDPFTPT_x == 1 ||  fulltime job (&& p.TRDPFTPT_x == 1)
					return p;
				}
			});
			final[options[i]] = peopleUniverse.sort(() => 0.5 - Math.random()).slice(0, max);
			// Adding the timing for when each box is shown
			final[options[i]].map(element => element["start"] = 400);
			final[options[i]].map(element => element["details"] = -1);
			if (options[i] == "3") {
				final[options[i]][4]["start"] = 239;
				final[options[i]][3]["start"] = 300;
				final[options[i]][5]["start"] = 305;
			}
		}
		return final;
	}
	
	
	/****************
	 TRIGGERED ON CLICK
	*****************/
	
	function changeView(v) {
		if (v == selectedViewIndex) {
			v = "all";
			resetDetails();
		}
		if (v == "all") {
			resetDetails();
		}
		customClicked = true;
		selectedViewIndex = views.indexOf(v);
	}
	
	function resetDetails() {
		for (let i = 0; i < options.length; i++) {
			currentPeople[options[i]].map(element => element["details"] = -1);
		}
		console.log(currentPeople);
	}
	
	function toggleDetails(group, key) {
		if (customClicked && selectedViewIndex != 0) {
			currentPeople[group][key].details *= -1;
		}
	}

	/****************
	 TRIGGERED ON TIME MOVING
	*****************/
	let happyBar = 0;
	function checkTiming() {
		if (isNaN(time)) {
			time = 240;
		}
		if (time > 1440) {
			time = time - 1440;
		}
		if (!customClicked) {
			if (time > 630) {
				selectedViewIndex = 0;
			} else if (time > 572) {
				selectedViewIndex = 1;
			} else if (time > 502) {
				selectedViewIndex = 0;
			} else if (time > 320) {
				selectedViewIndex = 3;
			} else if (time > 300) {
				selectedViewIndex = 3;
			} else if (time >= 240) {
				selectedViewIndex = 4;
			} else {
				selectedViewIndex = 0;
			}
			
			if (time >= 780) {
				customClicked = true;
			}
		}
		
		// Happy bar
		if (time >= 343 || time < beginTime) {
			happyBar = 1;
		} else {
			happyBar = 0;
		}
	}
	

	// Checking if activity start and end are within the time for the currentPeople variable	
	function checkPeople() {
		for (let i = 0; i < options.length; i++) { // each happy_group
			const opt = options[i];
			for (let j = 0; j < currentPeople[opt].length; j++) { // each person
				let peopleScore = 0;
				for (let k = 0; k < currentPeople[opt][j]["activity"].length; k++) { // each activity
					if (currentPeople[opt][j]["activity"][k][0] <= time && currentPeople[opt][j]["activity"][k][1] > time) { // if time is between start/end
						currentPeople[opt][j]["activity"][k][6] = 1;
						peopleScore += lookup.PEOPLESCORE[currentPeople[opt][j]["activity"][k][5]];
						currentPeople[opt][j]["current_activity"] = lookup.ACTIVITY[currentPeople[opt][j]["activity"][k][2]].task;
					} else { // if not
						currentPeople[opt][j]["activity"][k][6] = 0;
					}
					currentPeople[opt][j]["peopleScore"] = peopleScore > peopleColor.length - 1 ? peopleColor.length - 1 : peopleScore;
				}
				
			}
		}
	}

	
	/************
	UTILTIY FUNCTIONS
	************/
	
	// If Hispanic, overrides race
	function raceConvert(r1, r2) {
		return r2 == "Hispanic" ? "Hispanic" : r1;
	}
	
	// This finds who the person was with for each activity
	function convertWHO(a, returnClass) {
		let val = a[a.length - 2]; // this is minus 2 because the last array item is whether it is shown or not
		if (val == -1) { return "other"; }
		try {
			return returnClass ? lookup.WHO[val].class : lookup.WHO[val].person;
		} catch {
			return "other";
		}
	}
	
	// If money exists, format. If not, return --
	function formatMoney(n) { return n > 0 ? "$" + comma(Math.round(n/100)) : "--"; }
	// Thousandth comma
	function comma(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
	

	$: time, checkPeople(), checkTiming()
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="interactive">
	<div class="displayContainter">
		<div class="groupContainer" style="transform: perspective({viewTranslate[selectedViewIndex][3]}) translate3d({viewTranslate[selectedViewIndex][0]}, {viewTranslate[selectedViewIndex][1]}, {viewTranslate[selectedViewIndex][2]});">
			{#each Object.entries(currentPeople) as [key, happy_group]}
			<div class="group">
				{#if customClicked}
					{#if key != selectedViewIndex}
						<div class="groupButton" on:click={() => changeView(key)} on:keydown={() => changeView(key)}>Group {key}</div>
					{:else}
						<div class="groupButton" on:click={() => changeView(key)} on:keydown={() => changeView(key)}>Zoom out</div>
					{/if}
				{/if}
				{#each happy_group as person, personKey}
					<div class="person {person.start <= time || time < beginTime || customClicked ? 'shown' : ''}" in:fade on:click={() => toggleDetails(key,personKey)} on:keydown={() => toggleDetails(key,personKey)}>
						<div class="personViz" style="background: {peopleColor[person.peopleScore]};">
							<div class="peopleScore">{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]}</div>
							<div class="currentActivity">{person.current_activity}</div>
							<div class="happyBar" style="opacity:{happyBar};">
								<div class="happyBarScore" style="height:{person.WECANTRIL*10}%;"></div>
								{#each [0,1,2,3,4,5,6,7,8,9] as ladder}
									<div class="ladderItem" style="bottom:{ladder*10}%;"></div>
								{/each}
							</div>
							<div class="ff ff-alone shown1"></div>
							<Sprites person="alone" act={person.current_activity} shown="1"/>
							{#each person.activity as act}
								<!-- <div class="ff ff-{convertWHO(act, true)} shown{act[act.length-1]}"> -->
									<Sprites person={convertWHO(act, true)} act={person.current_activity} shown={act[act.length-1]}/>
									<!-- {convertWHO(act, true)} -->
								<!-- </div> -->
							{/each}
						</div>
						
						<div class="details {person.details == 1 ? 'shown' : ''}">
							{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]} in {lookup.WEGENHTH[person.WEGENHTH].toLowerCase()} health.
							Has {person.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[person.TRSPPRES].toLowerCase()} and {person.TRCHILDNUM_x == 1 ? person.TRCHILDNUM_x + " child" : person.TRCHILDNUM_x + " children"} in the household. 
							{person.TESCHENR == 1 ? "Enrolled in school." : ""} Has a {lookup.PEEDUCA[person.PEEDUCA].toLowerCase()} education. 
							{person.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[person.TRDTIND1].toLowerCase() +  " earning " + formatMoney(person.TRERNWA_x) + " a week." : ''} 
							<div class="detailsClose">Click to close</div>
						</div>
					</div>
				{/each}
			</div>
			{/each}	
		</div>
	</div>
</div>

<style>
	.interactive {
		/* max-width: 1200px; */
		/* margin: 0 auto; */
		transform-origin: center;
		text-align: center;
		width: 100%;
		height: 100vh;
	}
	button.selected {
		background: #aaa;
	}
	.displayContainter {
		width: 100%;
		/* max-width: 1500px; */
		overflow: hidden;
		margin: 0 auto;
		padding-right: 50px;
	}
	.groupContainer {
		position: relative;
		width: 300%;
		height: 80vh;
		transition: transform 2500ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
	}

	.group {
		position: absolute;
		left: 0px;
		top: 0px;
		display: block;
		width: calc(100% / 3);
		padding: 0 2%;
		box-sizing: border-box;
		padding-top: 20px;
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
	.person {
		position: relative;
		height: 21vh;
		display: inline-block;
		margin: 1%;
		font-size: 15px;
		border: 4px solid #454545;
		width: calc(31.33333%);
		box-sizing: border-box;
		opacity: 0;
		overflow: hidden;
		transition: opacity 1300ms cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
	}
	.person.shown {
		opacity: 1;
		cursor: pointer;
	}
	.person.shown:hover {
		border: 4px solid #000;
	}
	@media only screen  and (max-width: 800px) {
	   .person {
	   		width: calc(48%);
		   height: 15vh;
	   }
	   .person:nth-child(9) {
		   display: none;
	   }
	}
	@media only screen  and (max-width: 500px) {
	   .person {
		   height: 15vh;
	   }
	   .person:nth-child(9) {
		   display: none;
	   }
	}
	
	.personViz {
		position: relative;
		width: 100%;
		left: 0%;
		height: 100%;
		overflow: hidden;
		transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
	}
	.happyBar {
		position: absolute;
		left: 0px;
		bottom: 0px;
		height: 100%;
		width: 13px;
		border-right: 2px solid #454545;
		/* box-sizing: border-box; */
		background: #989898;
		transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
	}
	.happyBarScore {
		position: absolute;
		width: 100%;
		bottom: 0px;
		background: yellow;
	}
	.ladderItem {
		height: 10%;
		width: 100%;
		position: absolute;
		border-top: 2px solid #000;
	}
	.ladderItem:last-child {
		border: none;
	}
	
	
	
	.currentActivity {
		width: 100%;
		padding: 0 10px;
		font-size: 13px;
	}
	/* alone */
	.details {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background: black;
		color: white;
		display: none;
		padding: 20px;
		text-align: left;
		font-size: 13px;
	}
	.details.shown {
		display: block;
	}
	.detailsClose {
		margin-top: 10px;
		font-weight: bold;
		font-size: 13px;
		color: #888;
	}
</style>

