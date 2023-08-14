<script>
	import people from "$components/happydays/people-all-nogroup.json";
	import lookup from "$components/happydays/lookup.json";
	
	let currentGroup = 1; // displayed group
	const options = ["1","2","3"]; // happiness groups
	const maxTime = 1440; // in minutes (so 24 hours)
	let currentPeople; // track current selected group of 16
	let maxPeople = 6;
	let sortVar = "WEGENHTH";
	
	const days = [1,7]; // days of the week to display
	const ageRange = [0,100]; // age range to display
	
	selectPeople(maxPeople); // initialize
	// Select ## random people in a given group
	function selectPeople(max) {
		let peopleUniverse = people.filter(function(p) {
			if (days.indexOf(p.TUDIARYDAY_x) != -1 && p.happy_group == currentGroup && p.TEAGE >= ageRange[0] && p.TEAGE <= ageRange[1]) { // && p.TRDPFTPT_x == 1 weekdays ..  fulltime job (&& p.TRDPFTPT_x == 1)
				return p;
			}
		});
		const shuffled = peopleUniverse.sort(() => 0.5 - Math.random());
		// shuffled.sort((a, b) => {
		// 	const nameA = a[sortVar]; 
		// 	const nameB = b[sortVar];
		// 	if (nameA < nameB) { return -1; }
		// 	if (nameA > nameB) { return 1; }
		// 	return 0;
		// });
		currentPeople = shuffled.slice(0, max);
	}
	
	// Change the group displayed
	function changeGroup(n) {
		currentGroup = n;
		selectPeople(maxPeople);
	}
	
	// Convert hour to time
	function convertTime(t) {
		if (t == 0) { return "12a"; }
		if (t == 12) { return "12p"; }
		if (t < 12) { return t + "a"; }
		if (t > 24) { return t - 24 + "a"; }
		return (t - 12) + "p";
	}
	
	// Convert minutes to time, adjusting for a 4am start
	function convert24hrTime(t) {
		if (t > maxTime) {
			t = t - maxTime;
		}
		if (t < 240) {
			t = t + 1440;
		}
		return t - 240;
	}
	
	// If Hispanic, overrides race
	function raceConvert(r1, r2) {
		return r2 == "Hispanic" ? "Hispanic" : r1;
	}
	
	
	/*****
	This sets the height of the bar based on the average sentiment toward a given activity
	If heightVar is empty, it defaults to the height in the CSS  
	*****/
	let heightVar = ""; // happy, meaning, interact
	// Convert activity happiness
	function convertWU(n) {
		if (heightVar == "") {return "";}
		if (n in lookup.WU) {
			if (heightVar == "interact") {
				return "height:" + (2 - lookup.WU[n][heightVar]) * 100 + "%;"; // 1 = yes, 2 = no
			} else {
				return "height:" + lookup.WU[n][heightVar] / 6 * 100 + "%;";
			}
		}
		return "height:10%;";
	}
	
	/*****
	This finds who the person was with for each activity
	*****/
	function convertWHO(a, returnClass) {
		let val = a[a.length - 1];
		if (val == -1) { return "other"; }
		try {
			return returnClass ? lookup.WHO[val].class : lookup.WHO[val].person;
		} catch {
			return "other"
		}
	}
	
	// If money exists, format. If not, return --
	function formatMoney(n) {
		return n > 0 ? "$" + comma(Math.round(n/100)) : "--";
	}
	
	// Thousanth comma
	function comma(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	
	$: {
		currentGroup = currentGroup;
	}	
</script>

<div class="interactive">
	<div class="buttonContainer">
		{#each options as opt}
			{#if currentGroup == opt}
				<button on:click={() => changeGroup(opt)} class="selected">{opt}</button>
			{:else}
				<button on:click={() => changeGroup(opt)}>{opt}</button>
			{/if}
		{/each}
		
	</div>
	<div>Days: 
		{#each days as d}
		<span>{lookup.DAYS[d]}, </span>
		{/each}
	</div>

	{#each currentPeople as person}
		<div class="person">
			<div class="timeline">
				{#each person.activity as a}
					<div class="timelineItem activity-{lookup.ACTIVITY[a[2]].class} who-{convertWHO(a, true)}" style="left: {convert24hrTime(a[0])/maxTime*100}%; width: {a[3]/maxTime*100}%; {convertWU(a[2])};">
						<span class="hoverItem">{lookup.ACTIVITY[a[2]].task} ({convertWHO(a, false)})</span>
					</div>
				{/each}
				{#each [4,6,8,10,12,14,16,18,20,22,24,26,28] as t}
					<div class="timeItem" style="left:{(t-4)/24*100}%; width: 40px;">{convertTime(t)}</div>
				{/each}
			</div>

				<table class="details">
					<tr class="item hl"><td colspan="2">{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]}</td></tr>
					<tr class="item"><td class="itemLabel">Partner</td> <td class="itemVal">{lookup.TRSPPRES[person.TRSPPRES]}</td></tr>
					<tr class="item"><td class="itemLabel">Children in HH</td><td class="itemVal">{person.TRCHILDNUM_x}</td></tr>
					
					<!-- <tr class="item"><td class="itemLabel">Diary day</td><td class="itemVal">{lookup.TUDIARYDAY_x[person.TUDIARYDAY_x]}</td></tr> -->
					<tr class="item"><td class="itemLabel">Education</td><td class="itemVal">{lookup.PEEDUCA[person.PEEDUCA]}</td></tr>
					<tr class="item tall"><td class="itemLabel">Job industry</td><td class="itemVal">{lookup.TRDTIND1[person.TRDTIND1]}</td></tr>
					<tr class="item"><td class="itemLabel">Income (weekly)</td> <td class="itemVal">{formatMoney(person.TRERNWA_x)} </td></tr>
					<tr class="item"><td class="itemLabel">Enrolled in school</td> <td class="itemVal">{lookup.TESCHENR[person.TESCHENR]}</td></tr>
					
					<tr class="item"><td class="itemLabel">Health</td> <td class="itemVal">{lookup.WEGENHTH[person.WEGENHTH]}</td></tr>
				
					<tr class="item"><td class="itemLabel">Hi blood pressure?</td> <td class="itemVal">{lookup.WEYesNo[person.WEHBP]}</td></tr>
					<tr class="item"><td class="itemLabel">Pain meds?</td> <td class="itemVal">{lookup.WEYesNo[person.WEPAINMD]}</td></tr>
					<tr class="item"><td class="itemLabel">Sleep restful?</td> <td class="itemVal">{lookup.WEREST[person.WEREST]}</td></tr>
					<!-- <tr class="item"><td class="itemLabel">Today compared to typical day:</td> <td class="itemVal">{lookup.WETYPICAL[person.WETYPICAL]}</td></tr>
					<tr class="item"><td class="itemLabel">Time spend alone</td> <td class="itemVal">{(person.TRTALONE/60).toFixed(1)} hours</td></tr>
					<tr class="item"><td class="itemLabel">Time spend w/ family</td> <td class="itemVal">{(person.TRTFAMILY/60).toFixed(1)} hours</td></tr>
					<tr class="item"><td class="itemLabel">Time spend w/ friends</td> <td class="itemVal">{(person.TRTFRIEND/60).toFixed(1)} hours</td></tr> -->
					<tr class="item hl"><td class="itemLabel">Happiness</td><td class="itemVal">{person.WECANTRIL} / 10</td></tr>
				</table>
			<div class="details">
			</div>
		</div>
	{/each}
</div>

<style>
	.interactive {
		/* max-width: 1200px; */
		margin: 0 auto;
		font-family: "National 2 Web";
		text-align: center;
	}
	button.selected {
		background: #aaa;
	}
	.person {
		display: inline-block;
		background: #eee;
		padding: 5px;
		margin: 2px;
		font-size: 15px;
		border: 1px solid #ccc;
		/* overflow: hidden; */
		width: 300px;
	}
	.person table tr td {
			padding: 2px 0;
			vertical-align: top;
	}
	.person .item {
		font-size: 13px;
		border-bottom: 1px dotted #aaa;
	}
	.person .item.hl { font-weight: bold; }
	.person .item.tall { height: 43px; }
	.person .item .itemLabel {
		width: 200px;
		display: inline-block;
		text-align: left;
		margin-right: 20px;
	}
	.person .item .itemValue {
		text-align: left;
		width: 200px;
	}
	.timeline {
		position: relative;
		width: 95%;
		left: 2.5%;
		background: #fff;
		height: 100px;
		margin: 5px 0 20px;
		border: 0.5px solid #454545;
	}
	.timelineItem {
		position: absolute;
		bottom: 0px;
		height: 100%;
		background: #aaa;
		border-right: 0.5px solid #fff;
		box-sizing: border-box;
		cursor: pointer;
		opacity: 1;
		height: 25%; 
	}
	.timelineItem:hover {
		border: 2px solid #000;
	}
	.hoverItem {
		display: none;
		position: absolute;
		width: 200px;
		background: white;
		padding: 10px;
		border: 1px solid #000;
		font-size: 12px;
		z-index: 10;
		bottom: calc(100% + 10px);
		opacity: 1;
	}
	.timelineItem:hover .hoverItem {
		display: block;
		z-index: 10;
	}
	
	
	.activity-work, .activity-education {
		/* background: #ff6180; */
		/* height: 50%; */
	}
	.activity-household, .activity-householdservices, .activity-consumer, .activity-traveling , .activity-professional {
		/* background: #9867b6; */
		/* height: 50%; */
	}
	.activity-eating, .activity-leisure, .activity-personal {
		/* background: #006490; */
		/* height: 25%; */
	}
	.activity-social, .activity-sports, .activity-telephone, .activity-volunteer, .activity-religious, .activity-caringhh, .activity-caringnhh {
		/* background:  #ffa600; */
		/* height: 100%; */
	}
	.activity-data {
		/* height: 25%; */
	}
	
	.activity-sleep {
		background: #ccc !important;
		height: 10%;
	}
	.who-alone, .who-other { background: #101428; bottom: 0%; height: 10%; }
	
	.who-workrelated { background: #2994D1; bottom: 0%; }
	.who-partner { background: #ffa600; bottom: 25%; }
	.who-adult_family { background: #a73861; bottom: 50%; }
	.who-child_nonfamily, .who-child_family  { background: #8545B1; bottom: 0%; }
	.who-friend, .who-adult_nonfamily  { background: #e95f49; bottom: 75%; }
	
	
	
	
	
	/* Ticks */
	.timeItem {
		position: absolute;
		top: calc(100% + 5px);
		text-align: center;
		width: 40px;
		margin-left: -20px;
		font-size: 10px;
		color: #aaa;
	}
	.timeItem::after {
		content: "";
		height: 4px;
		border-left: 1px solid #aaa;
		position: absolute;
		left: 50%;
		bottom: 100%;
		width: 1px;
	}
	.details {
		/* display: none; */
	}
</style>

