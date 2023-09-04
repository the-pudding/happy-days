<script>
	import Sprites from "$components/happydays/HappyDays.sprites.svelte";
	import lookup from "$components/happydays/lookup.json";
	import { fade, slide } from 'svelte/transition';
	
	export let person, time, beginTime, customClicked, happyBar, happyGroup, personKey, peopleColor, view, columns, rows, position, selectedSort, hideInfo, hed;
	let peopleTextColor = ["#fff","#fff","#fff","#fff","#fff","#fff","#36374c","#36374c","#36374c","#36374c","#36374c"];
	let details = -1;
	let shownVariable = "num";
	// let socialMax = 180;
	let socialMax = 360;
	let selfShown = false;

	function checkOpacity() {
		return view == 0 && person.TUCASEID != "0" ? 'hidePerson' : '';
	}

	function colorBackground(n, bg) {
		let colorAdj = Math.floor(n / 6);
		if (bg) {
			return colorAdj > peopleColor.length-1 ? peopleColor[peopleColor.length-1] : peopleColor[colorAdj];	
		} else {
			return colorAdj > peopleTextColor.length-1 ? peopleTextColor[peopleTextColor.length-1] : peopleTextColor[colorAdj];	
		}
	}

	// This finds who the person was with for each activity
	function convertWHO(a, returnClass) {
		let val = a[a.length - 2]; // this is minus 2 because the last array item is whether it is shown or not
		if (val == -1) { return "alone"; }
		try {
			return returnClass ? lookup.WHO[val].class : lookup.WHO[val].person;
		} catch {
			return "alone";
		}
	}
	function cleanLabel(n) {
		if (n == "0,1") {return "<1"}
		if (n == "4,5,6") {return "4-6"}
		if (n == "7,8") {return "7-8"}
		if (n == "9,10") {return "9+"}
		return n;
	}
	// If Hispanic, overrides race
	function raceConvert(r1, r2) { return r2 == "Hispanic" ? "Hispanic" : r1; }
	// If money exists, format. If not, return --
	function formatMoney(n) { return n > 0 ? "$" + comma(Math.round(n/100)) : "--"; }
	// Thousandth comma
	function comma(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
	function toTitleCase(word) { return (word.charAt(0).toUpperCase() + word.slice(1)); }
	function convertCurrentCompany(arr) {
		arr = arr.map((el) => lookup.WHO[el].cleanSingle);
		// if alone
		if (arr.length == 1 && arr[0] == "alone") {
			return "";
		}
		// if with others
		const counts = {};
		arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
		let final = [];
		for (let i in counts) {
			let name = counts[i] == 1 ? i : lookup.WHOPLURAL[i];
			let num =  counts[i] == 1 ? "" : counts[i] + " ";
			if (name != "alone" && i in lookup.WHOPLURAL) {
				final.push(num + "" + name);	
			}
		}
		const firsts = final.slice(0, final.length - 1);
		const last = final[final.length - 1];
		if (final.length == 1) {
			return "w/ " + last;	
		}
		return "w/ " + firsts.join(', ') + ' and ' + last;
	}
	$: {
		if (view != happyGroup) {
			details = -1;
		}
		shownVariable = selectedSort == "num" ? "num" : selectedSort.replace("_num","");
	}
</script>

<div class="person { person.start <= time || time < beginTime ? 'shown' : ''} { checkOpacity() }" 
	 style="width:{ position[2] }px; height:{ position[3] }px; left: {position[0]}%; top: {position[1]}%"
	 in:fade 
	 on:click={() => details = details * -1}
	 >

	<div class="personViz">

		<div class="socialBar">
			<div class="socialBarScore" style="height:{time < 545 || time > 1460 ? 0 : (person.social_score) / socialMax * 100}%; background: { person.social_score / socialMax * (peopleColor.length-1) > peopleColor.length-1 ? peopleColor[peopleColor.length-1] : peopleColor[Math.floor( person.social_score/socialMax * (peopleColor.length-1) )] }"></div>
		</div>
		

		{#if time > 242 && time < 1540}
		<div transition:fade class="personLabel">
			{#if !hideInfo}
				{toTitleCase(raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON]), lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]}, {person.TEAGE} }
			{:else}
				{toTitleCase(lookup.TESEX[person.TESEX])}, {person.TEAGE}
			{/if}
		</div>
		{/if}
		{#if time > 247 && time < 1500}
		<div transition:fade class="currentActivity">{person.current_activity} {convertCurrentCompany(person.current_company)}</div>
		{/if}		


		{#each person.activity as act, index}
			{#if person.social_score != 0 && convertWHO(act, true) != "alone"}
			<Sprites person="{convertWHO(act, true)}" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE[convertWHO(act, true)]} hideInfo={hideInfo} w={position[2]}/>
			{/if}
			<Sprites person="alone" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE["alone"]} hideInfo={hideInfo} w={position[2]}/>
		{/each}


		{#if person.start < 240 && time <= 242}
		<div class="headline" transition:fade>
			<h1>{hed}</h1>
			<div class="byline">by Alvin Chang</div>
			<div class="instruction">Scroll down</div>
		</div>
		{/if}
		{#if shownVariable != "num" && time < 1460 } 
		<div class="bigtext" transition:fade>{cleanLabel(person.happy_group)}</div>
		{/if}
	</div>
	<div class="details {details == 1 && time > 300 ? 'shown' : ''}">
		{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]} in {lookup.WEGENHTH[person.WEGENHTH].toLowerCase()} health.
		Has {person.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[person.TRSPPRES].toLowerCase()} and {person.TRCHILDNUM_x == 1 ? person.TRCHILDNUM_x + " child" : person.TRCHILDNUM_x + " children"} in the household. 
		{person.TESCHENR == 1 ? "Enrolled in school." : ""} Has a {lookup.PEEDUCA[person.PEEDUCA].toLowerCase()} education. 
		{person.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[person.TRDTIND1].toLowerCase() +  " earning " + formatMoney(person.TRERNWA_x) + " a week." : ''}
		<div class="detailsClose">Click to close</div>
	</div>
</div>



<style>
	.bigtext {
		position: absolute;
		left: 5px;
		bottom: 0px;
		font-size: 1rem;
		color: white;
		width: 100%;
		text-align: left;
/*		opacity: 0.1;*/
		font-weight: bold;
		text-shadow: 0px 0px 7px rgba(0,0,0,0.7);
	}
	.headline {
		position: absolute;
		color: white;
		z-index: 9999;
		width: 100%;
		left: 0px;
		top: 30%;
		transform: translateY(-50%);
		text-align: center;
		text-transform: lowercase;
	}
	.headline h1 {
		font-size: 0.5rem;
		line-height: 0.6rem;
		margin-bottom: 3px;
		letter-spacing: 0.4px;
		color: #FE2F8D;
	}
	.byline {
		font-size: 0.35rem;
		opacity: 0.5;
	}
	.instruction {
		margin-top: 3px;
		font-size: 0.3rem;
		opacity: 0.5;
	}
	.person {
		position: absolute;
		left: 0px;
		top: 0px;
		height: 20vh;
		display: inline-block;
/*		margin: 0.5%;*/
		width: 16%;
		box-sizing: border-box;
		opacity: 0;
		overflow: hidden;
		transition: all 2500ms cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		pointer-events: none;
		border: 2px solid #28212F;
	}
	.person.shown {
		opacity: 1;
		cursor: pointer;
		pointer-events: all;
	}
	.hidePerson {
		opacity: 0 !important;
	}

	.personViz {
		position: relative;
		width: 100%;
		left: 0%;
		height: 100%;
		overflow: hidden;
		transition: all 600ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
/*		border-bottom: 10px solid #2A0045;*/
		background: #492e5a;
	}
	.personViz:after {
		content:"";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 80%;
		background: rgb(0,0,0);
		background: -moz-linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30802258403361347) 90%);
		background: -webkit-linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30802258403361347) 90%);
		background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30802258403361347) 90%);
	}

	.socialBar {
		overflow: hidden;
		position: absolute;
		right: 0px;
		top: 0px;
		height: 100%;
		width: 100%;

		z-index: 0;
	}
	.socialBarScore {
		width: 100%;
		height: 0px;
		max-height: 100%;
		position: absolute;
		bottom: 0px;
		transition: all 2000ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		opacity: 1;
	}
	.happyBar {
		position: absolute;
		left: 10px;
		top: 10px;
		height: 50%;
		width: 15px;
		border-left: 2px solid #E7BCE0;
		border-right: 2px solid #E7BCE0;
		/* box-sizing: border-box; */
		/*		background: #989898;*/
		transition: all 200ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
	}
	.ladderItem {
		height: 10%;
		width: 100%;
		position: absolute;
		border-top: 2px solid #E7BCE0;
	}
	.happyBarScore {
		width: 100%;
		height: 0px;
		background: #FF389B;
		position: absolute;
		bottom: 0px;
		transition: all 2000ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
	}

	.ladderItem:last-child {
		border: none;
	}


	.personLabel {
		position: relative;
		width: 100%;
		padding-top: 5px;
		font-size: 12px;
		color: white;
/*		font-weight: bold;*/
		z-index: 100;
		text-shadow: 4px -1px 16px rgba(0,0,0,0.4);
	}
	.dayOfWeek {
		font-size: 12px;
		color: white;
	}
	.dayOfWeek span {
		color: #FE2F8D !important;
	}
	.currentActivity {
		position: relative;
		width: 100%;
		padding: 0 3px;
		font-size: 12px;
		line-height: 13px;
		color: #fff;
		opacity: 0.5;
		z-index: 100;
		text-shadow: 4px -1px 16px rgba(0,0,0,0.4);
	}
	@media screen and (max-width: 800px) {
		.personLabel {
			font-size: 8px;
			line-height: 9px;
		}
		.currentActivity {
			font-size: 7px;
			line-height: 8px;
		}
	}
	.details {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.88);
		color: white;
		display: none;
		padding: 8px;
		text-align: left;
		font-size: 12px;
		z-index: 999;
	}
	.details.shown {
		display: block;
	}
	.detailsClose {
		margin-top: 3px;
/*		font-weight: bold;*/
		font-size: 13px;
		color: #888;
		position: absolute;
		bottom: 5px;
		left: 6px;
	}
</style>

