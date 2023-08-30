<script>
	import { onMount } from 'svelte';
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Grid from "$components/happydays/HappyDays.grid.svelte";
	import Text from "$components/happydays/HappyDays.text.svelte";
	import people from "$components/happydays/people-all-nogroup.json";
	import { fade } from 'svelte/transition';
	
	let value;
	let beginTime = 240;
	let changeView;
	let timeRange = [];
	for (let i = beginTime; i < 1440 + beginTime; i++) {
		timeRange.push(i);
	}
	
	export let copy;
	
	const options = ["0","1","2","3","4","5","6","7","8","9","10"]; // happiness groups
	const days = [1,7]; // days of the week to display
	const ageRange = [0,65]; // age range to display
	let currentPeople = selectPeople(25); // initialize with X number of people per WECANTRIL
	let positionLookup = {};
	// Select ## random people in a given group
	function selectPeople(max) {
		let final = [];
		for (let i = 0; i < options.length; i++) {
			let peopleUniverse = people.filter(function(p) {
				if (days.indexOf(p.TUDIARYDAY_x) != -1 && p.WECANTRIL == options[i] && p.TEAGE >= ageRange[0] && p.TEAGE <= ageRange[1] && p.activity[p.activity.length-1] != 1) { // && p.TRDPFTPT_x == 1 ||  fulltime job (&& p.TRDPFTPT_x == 1)
					return p;
				}
			});
			
			// Adding the timing for when each box is shown
			peopleUniverse.map(function(element)  {
				element["start"] = 280;
				element["details"] = -1;
				element["current_activity_code"] = "10101";
				element["current_company"] = []; 
				element["social_score"] = 0;
				element["position"] = [0,0];
			});

			final.push.apply(final, peopleUniverse.slice(0, max));
		}

		// no sort, but numbering and counting up
		let counter = 0;
		final = sortObj(final, "TUCASEID");
		final = final.sort(function(x,y){ return x.TUCASEID == 20210706212196 ? -1 : 0; });
		final.map(function(element)  {
			element["num"] = counter;
			counter++; 
		});

		// sorting by WECANTRIL and counting up
		final = sortObj(final, "WECANTRIL");
		counter = 0;
		final.map(function(element)  {
			element["WECANTRIL_num"] = counter;
			counter++; 
		});

		// sorting by WEGENHTH and counting up
		final = sortObj(final, "WEGENHTH");
		counter = 0;
		final.map(function(element)  {
			element["WEGENHTH_num"] = counter;
			counter++; 
		});

		// sorting by WEPAINMD and counting up
		final = sortObj(final, "WEPAINMD");
		counter = 0;
		final.map(function(element)  {
			element["WEPAINMD_num"] = counter;
			counter++; 
		});

		// sorting by WEREST and counting up
		final = sortObj(final, "WEREST");
		counter = 0;
		final.map(function(element)  {
			element["WEREST_num"] = counter;
			counter++; 
		});

		// sort back to default
		final = sortObj(final, "num");
		final[0].start = 239;
		return final;
	}
	

	function sortObj(obj, byVar) {
		return obj.sort((a,b) => (a[byVar] > b[byVar]) ? 1 : ((b[byVar] > a[byVar]) ? -1 : 0));
	}

	function convertTime(m) {

		let mins = m % 60;
		let hours = Math.floor(m / 60);
		let ampm;
		if (hours == 0 || hours == 24) { hours = 12; ampm = "am"; }
		else if (hours == 12) { hours = 12; ampm = "pm"; }
		else if (hours < 12) { ampm = "am"; }
		else if (hours > 24) { hours = hours - 24; ampm = "am"; }
		else { hours = hours - 12; ampm = "pm"; }
		
		return hours + ":" + mins.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		}) + " " + ampm;
	}

	// Check if the timeline step has a text element
	function checkCopy(time) {
		let final = false;
		for (let k = 0; k < copy.timeline.length; k++) {
			if (copy.timeline[k].time == time && "text" in copy.timeline[k]) {
				final = copy.timeline[k];
			}
		}
		return final;
	}
</script>
<div class="outsideContainer">
	<section id="scrolly">
		<div class="visualContainer">
			<!-- <div class="legend" style="opacity: {value + beginTime > 480 ? 1 : 0};" transition:fade>
				<span class="legendLabel">◂ More isolated</span>
				<span class="legendLabel">More social ▸</span>
			</div> -->
			<Grid currentPeople={currentPeople} time="{value + beginTime}" beginTime="{beginTime}" timeline={copy.timeline}/>
		</div>
		<div class="timeline">
			<Scrolly increments={1} top={100} bind:value>
				{#each timeRange as time, i}
				{@const active = value === i}
				{#if checkCopy(time) == false}
				<div class="step" style="opacity: {value + beginTime > 240 ? 1 : 0};" transition:fade class:active>{convertTime(time)}</div>
				{:else}
				{#if checkCopy(time)["addclass"] != "shorttext"}
				<div class="preLongcopy"></div>
				<div class="step longcopy" class:active>
					<Text copy={checkCopy(time)["text"]} add={"longcopy"} time={convertTime(time)} />
				</div>
				<div class="postLongcopy"></div>
				{:else}
				<div class="step shortcopy" class:active>
					<Text copy={checkCopy(time)["text"]} add={"shortcopy"} time={convertTime(time)} />
				</div>
				{/if}
				{/if}
				{/each}
			</Scrolly>
		</div>
		<div class="spacer" />
	</section>
</div>
<style>
	.outsideContainer {
		background: #28212F;
		font-family: "National 2 Web";
	}
	
	#scrolly {
		font-family: "National 2 Web";
	}
	.visualContainer {
		position: sticky;
		top: 0em;
		width: 100%;
		padding-left: 20px;
	}
	.legend {
		position: absolute;
		left: 2%;
		top: 40px;
		width: 200px;
		height: 20px;
		background: rgb(54,55,76);
		background: linear-gradient(90deg, rgba(54,55,76,1) 0%, rgba(137,124,149,1) 60%, rgba(255,222,245,1) 100%);
		z-index: 100;
		border: 2px solid #000;
	}
	.legendLabel {color: #b7a2bb; font-size: 13px; text-align: left; position: absolute; left: 0px; bottom: calc(100% + 4px);}
	.legendLabel:nth-child(2) { text-align: right; left: auto; right: 0px; }
	.spacer {
		height: 75vh;
	}
	.timeline {
		position: relative;
		z-index: 100;
		margin-top: -80vh;
		pointer-events: none;
	}
	.step {
		pointer-events: none;
		height: 14px;
		min-height: 25px;
		text-align: right;
		color: #aaa;
		padding-right: 5px;
		font-size: 12px;
		transition: opacity 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
	}
	.step.active {
		color: #FE2F8D;
		font-weight: bold;
		text-shadow: 0px 0px 6px #000;
	}
	.step.longcopy {
		pointer-events: auto !important;
		height: auto;
		background: rgba(40,33,47,0.85);
		backdrop-filter: blur(4px);
		min-height: 100vh;
		padding: 0% 2em 0%;
		box-sizing: content-box !important;
		margin: 0vh auto;
		position: relative;
	}
	.step.shortcopy {
		pointer-events: auto !important;
		height: auto;
		padding: 0% 2em 0%;
		box-sizing: content-box !important;
		margin: 0vh auto;
		position: relative;
	}
	.preLongcopy {
		display: block;
		height: 300px;
		background: -moz-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
		background: -webkit-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
		background: linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
/*		margin-bottom: -30px;*/
	}
	.postLongcopy {
		display: block;
		height: 200px;
		background: -moz-linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
		background: -webkit-linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
		background: linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,.85) 76%);
/*		margin-top: -30px;*/
	}
</style>


