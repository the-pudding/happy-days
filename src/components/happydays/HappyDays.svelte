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
	
	const options = ["1","2","3"]; // happiness groups
	let maxPeople = 36;
	const days = [1,7]; // days of the week to display
	const ageRange = [0,80]; // age range to display
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
			final[options[i]] = peopleUniverse; //peopleUniverse.sort(() => 0.5 - Math.random()).slice(0, max);
			final[options[i]] = final[options[i]].sort((a,b) => (a.WECANTRIL > b.WECANTRIL) ? 1 : ((b.WECANTRIL > a.WECANTRIL) ? -1 : 0))
			// Adding the timing for when each box is shown
			final[options[i]].map(function(element)  {
				element["start"] = 330;
				element["details"] = -1;
				element["current_activity_code"] = "10101";
				element["current_company"] = []; 
				element["social_score"] = 0;
			});
			if (options[i] == "3") {
				final[options[i]][4]["start"] = 239;
				for (let p = 0; p < final[options[i]].length; p++) {
					if (p != 4) {
						final[options[i]][p]["start"] = 305 + Math.round(Math.random()*15);
					}
				} 
			}
		}
		return final;
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
			<Grid currentPeople={currentPeople} options={options} time="{value + beginTime}" beginTime="{beginTime}" timeline={copy.timeline}/>
		</div>
		<div class="timeline" style="opacity: {value + beginTime > 260 ? 1 : 0};" transition:fade>
			<Scrolly bind:value increments={1} top={100}>
				{#each timeRange as time, i}
				{@const active = value === i}
				{#if checkCopy(time) == false}
				<div class="step" class:active>{convertTime(time)}</div>
				{:else}
				<div class="step longcopy" class:active>
					<Text copy={checkCopy(time)["text"]} image={checkCopy(time)["image"]} imageLoc={checkCopy(time)["imageLoc"]} />
				</div>
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
		transition: opacity 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
		transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
		pointer-events: none;
	}
	.step {
		pointer-events: none;
		height: 4vh;
		min-height: 25px;
		text-align: right;
		color: #aaa;
		padding-right: 5px;
		font-size: 12px;
	}
	.step.active {
		color: #FE2F8D;
		font-weight: bold;
		padding-right: 10px;
		font-size: 15px;
		text-shadow: 0px 0px 6px #000;
	}
	.step.longcopy {
		pointer-events: auto !important;
		height: auto;
		min-height: 200vh;
		background: rgb(40,33,47);
		background: -moz-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(16,2,34,1) 16%, rgba(0,0,0,1) 80%, rgba(40,33,47,0) 100%);
		background: -webkit-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(16,2,34,1) 16%, rgba(0,0,0,1) 80%, rgba(40,33,47,0) 100%);
		background: linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(16,2,34,1) 16%, rgba(0,0,0,1) 80%, rgba(40,33,47,0) 100%);
/*		background: black;*/
/*		padding: 50vh 2em;*/
		margin: 10vh auto;
		position: relative;
	}
</style>


