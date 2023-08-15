<script>
	import Sprites from "$components/happydays/HappyDays.sprites.svelte";
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';
	
	export let person, time, beginTime, customClicked, happyBar, happyGroup, personKey, peopleColor, view;
	let peopleTextColor = ["#fff","#fff","#fff","#fff","#fff","#fff","#36374c","#36374c","#36374c","#36374c"];
	let details = -1;
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
	// If Hispanic, overrides race
	function raceConvert(r1, r2) { return r2 == "Hispanic" ? "Hispanic" : r1; }
	// If money exists, format. If not, return --
	function formatMoney(n) { return n > 0 ? "$" + comma(Math.round(n/100)) : "--"; }
	// Thousandth comma
	function comma(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

	$: {
		if (view != happyGroup) {
			details = -1;
		}
	}
</script>



<div class="person {person.start <= time || time < beginTime || customClicked ? 'shown' : ''}" in:fade on:click={() => details = details * -1}>

	<div class="personViz" style="background: {peopleColor[person.peopleScore]};">
		<div class="personLabel" style="color: {peopleTextColor[person.peopleScore]};">Age {person.TEAGE}, {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]}</div>
		<div class="currentActivity" style="color: {peopleTextColor[person.peopleScore]};">{person.current_activity}</div>
		<div class="happyBar" style="opacity:{happyBar};">
			<div class="happyBarScore" style="height:{time < 344 ? 0 : person.WECANTRIL*10}%;"></div>
			{#each [0,1,2,3,4,5,6,7,8,9,10] as ladder}
			<div class="ladderItem" style="bottom:{ladder*10}%;"></div>
			{/each}
		</div>

		{#each person.activity as act}
		<Sprites person="alone" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE["alone"]}/>
		{#if person.peopleScore != 0 && convertWHO(act, true) != "alone"}
		<Sprites person="{convertWHO(act, true)}" sex="{person.TESEX}" act="{act[2]}" shown={act[act.length-1]} begin={act[0]} end={act[1]} frameRate={lookup.FRAMERATE[convertWHO(act, true)]}/>
		{/if}
		{/each}
	</div>

	<div class="details {details == 1 && view == happyGroup ? 'shown' : ''}">
		{person.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON])} {lookup.TESEX[person.TESEX]} in {lookup.WEGENHTH[person.WEGENHTH].toLowerCase()} health.
		Has {person.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[person.TRSPPRES].toLowerCase()} and {person.TRCHILDNUM_x == 1 ? person.TRCHILDNUM_x + " child" : person.TRCHILDNUM_x + " children"} in the household. 
		{person.TESCHENR == 1 ? "Enrolled in school." : ""} Has a {lookup.PEEDUCA[person.PEEDUCA].toLowerCase()} education. 
		{person.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[person.TRDTIND1].toLowerCase() +  " earning " + formatMoney(person.TRERNWA_x) + " a week." : ''} 
		<div class="detailsClose">Click to close</div>
	</div>

</div>



<style>

	.person {
		position: relative;
		height: 20vh;
/*		min-height: 180px;*/
		display: inline-block;
		margin: 1%;
		font-size: 15px;
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
	.person.shown:hover {

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
transition: all 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
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
/*		height: 8px;*/
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
	width: 100%;
	padding: 0 30px;
	color: white;
	font-weight: bold;
/*		text-shadow: 1px 1px 2px rgba(0,0,0,0.5), -1px -1px 2px rgba(0,0,0,0.5), -1px 1px 2px rgba(0,0,0,0.5), 1px -1px 2px rgba(0,0,0,0.5);  */
}
.currentActivity {
	width: 100%;
	padding: 0 30px;
	font-size: 13px;
	color: white;
/*		text-shadow: 1px 1px 1px rgba(0,0,0,0.2), -1px -1px 1px rgba(0,0,0,0.2), -1px 1px 1px rgba(0,0,0,0.2), 1px -1px 1px rgba(0,0,0,0.2);  */
}
/* alone */
.details {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.88);
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

