<script>
	import Sprites from "$components/happydays/HappyDays.sprites.svelte";
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';
	
	export let person, time, beginTime, customClicked, happyBar, happyGroup, personKey, peopleColor, view;
	let peopleTextColor = ["#fff","#fff","#fff","#fff","#fff","#fff","#36374c","#36374c","#36374c","#36374c","#36374c"];
	let details = -1;

	function checkOpacity() {
		if (view == 5) {
			if (person.TUCASEID != "20210706212196") {
				return "hidePerson"
			}
		}
		return "";
		// else { return ""; }
		// view == 5 && person.TUCASEID != "20210706212196"  ? 'hidePerson' : ''
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
	function convertTime(m) {

		let mins = m % 60;
		let hours = Math.floor(m / 60);
		let ampm;
		if (hours == 0 || hours == 24) { hours = 12; ampm = "a"; }
		else if (hours == 12) { hours = 12; ampm = "p"; }
		else if (hours < 12) { ampm = "a"; }
		else if (hours > 24) { hours = hours - 24; ampm = "a"; }
		else { hours = hours - 12; ampm = "p"; }
		
		return hours + ":" + mins.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		}) + ampm;
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
			return "with " + last;	
		}
		return "with " + firsts.join(', ') + ' and ' + last;
	}
	$: {
		if (view != happyGroup) {
			details = -1;
		}
	}
</script>



<div class="person { person.start <= time || time < beginTime ? 'shown' : ''} { checkOpacity() }" in:fade on:click={() => details = details * -1}>

	<!-- <div class="personViz" style="background: {colorBackground(person.social_score, true)};"> -->
		<div class="personViz">

			<div class="socialBar">
				<div class="socialBarScore" style="height:{time < 365 ? 0 : (person.social_score - 30) / 9 * peopleColor.length}%; background: { (person.social_score - 30) / 9 > peopleColor.length-1 ? peopleColor[peopleColor.length-1] : peopleColor[Math.floor( (person.social_score - 30) / 9)] }"></div>
			</div>

			{#if time > 242}
			<div transition:fade class="personLabel">{toTitleCase(raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON]), lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]}, {person.TEAGE}</div>
			{/if}
			{#if time > 247}
			<div transition:fade class="currentActivity">{person.current_activity} {convertCurrentCompany(person.current_company)}</div>
			{/if}
<!-- 		{#if (time > 253 && time < 278)}
		<div transition:fade class="dayOfWeek">at <span>{convertTime(time)}</span> on {lookup.TUDIARYDAY_x[person.TUDIARYDAY_x]} </div>
		{/if} -->

		
		<!-- <div class="happyBar" style="opacity:{happyBar};">
			<div class="happyBarScore" style="height:{time < 365 ? 0 : person.WECANTRIL*10}%;"></div>
			{#each [0,1,2,3,4,5,6,7,8,9,10] as ladder}
			<div class="ladderItem" style="bottom:{ladder*10}%;"></div>
			{/each}
		</div> -->


		

		{#each person.activity as act}
		<Sprites person="alone" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE["alone"]}/>
		{#if person.peopleScore != 0 && convertWHO(act, true) != "alone"}
		<Sprites person="{convertWHO(act, true)}" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE[convertWHO(act, true)]}/>
		{/if}
		{/each}


		{#if person.start < 240 && time <= 242}
		<div class="headline" transition:fade>
			<h1>Happy Days</h1>
			<div class="byline">by Alvin Chang</div>
			<div class="instruction">Scroll down</div>
		</div>
		{/if}

	</div>

	<div class="details {details == 1 && (view == happyGroup || view == 5) ? 'shown' : ''}">
		{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]} in {lookup.WEGENHTH[person.WEGENHTH].toLowerCase()} health.
		Has {person.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[person.TRSPPRES].toLowerCase()} and {person.TRCHILDNUM_x == 1 ? person.TRCHILDNUM_x + " child" : person.TRCHILDNUM_x + " children"} in the household. 
		{person.TESCHENR == 1 ? "Enrolled in school." : ""} Has a {lookup.PEEDUCA[person.PEEDUCA].toLowerCase()} education. 
		{person.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[person.TRDTIND1].toLowerCase() +  " earning " + formatMoney(person.TRERNWA_x) + " a week." : ''}
		<div class="detailsClose">Click to close</div>
	</div>

</div>



<style>
	.headline {
		position: absolute;
		color: white;
		z-index: 9999;
		width: 100%;
		left: 0px;
		top: 20%;
		text-align: center;
	}
	.headline h1 {
		font-size: 11px;
		line-height: 18px;
		margin-bottom: 0px;
		text-transform: lowercase;
		letter-spacing: 3px;
		color: #FE2F8D;
	}
	.byline {
		opacity: 0.5;
		font-size: 8px;
	}
	.instruction {
		margin-top: 20px;
		font-size: 8px;
		opacity: 0.5;
	}
	.person {
		position: relative;
		height: 20vh;
		display: inline-block;
		margin: 0.5%;
		width: 16%;
		box-sizing: border-box;
		opacity: 0;
		overflow: hidden;
		transition: opacity 600ms cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		pointer-events: none;
	}
	.person.shown {
		opacity: 1;
		cursor: pointer;
		pointer-events: all;
	}
	.hidePerson {
		opacity: 0 !important;
	}
	@media only screen  and (max-width: 1800px) {
		.person {
			width: 18%;
			height: 20vh;
		}
	}
	@media only screen  and (max-width: 1500px) {
		.person {
			width: 23%;
			height: 20vh;
		}
	}
	@media only screen  and (max-width: 1200px) {
		.person {
			width: 31.33333%;
			height: 20vh;
		}
	}
	@media only screen  and (max-width: 800px) {
		.person {
			width: 48%;
			height: 20vh;
		}
	}
	@media only screen  and (max-width: 500px) {
		.person {
			height: 20vh;
		}
	}

	.personViz {
		position: relative;
		width: 100%;
		left: 0%;
		height: 100%;
		overflow: hidden;
		transition: all 600ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		border-bottom: 10px solid #000;
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
		transition: all 200ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
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
		background: black;
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
		/*		width: 100%;*/
		/*		bottom: 0px;*/
		/*		background: yellow;*/
		transition: all 2000ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
	}

	.ladderItem:last-child {
		border: none;
	}


	.personLabel {
		position: relative;
		width: 100%;
		padding: 5px 30px 0px;
		font-size: 14px;
		color: white;
		font-weight: bold;
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
		padding: 0 10px;
		font-size: 12px;
		color: white;
		z-index: 100;
		text-shadow: 4px -1px 16px rgba(0,0,0,0.4);
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
		padding: 65px 20px 20px;
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

