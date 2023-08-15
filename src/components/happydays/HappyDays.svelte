<script>
	import { onMount } from 'svelte';
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Grid from "$components/happydays/HappyDays.grid.svelte";
	import Text from "$components/happydays/HappyDays.text.svelte";
	import people from "$components/happydays/people-all-nogroup.json";
	
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
			final[options[i]] = peopleUniverse.sort(() => 0.5 - Math.random()).slice(0, max);
			final[options[i]] = final[options[i]].sort((a,b) => (a.WECANTRIL > b.WECANTRIL) ? 1 : ((b.WECANTRIL > a.WECANTRIL) ? -1 : 0))
			// Adding the timing for when each box is shown
			final[options[i]].map(function(element)  {
				element["start"] = 295;
				element["details"] = -1;
				element["current_activity_code"] = "10101"
			});
			if (options[i] == "3") {
				final[options[i]][4]["start"] = 239;
				for (let p = 0; p < final[options[i]].length; p++) {
					if (p != 4) {
						final[options[i]][p]["start"] = 275 + Math.round(Math.random()*15);
					}
				} 
			}
		}
		console.log(final)
		return final;
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
			<Grid currentPeople={currentPeople} options={options} time="{value + beginTime}" beginTime="{beginTime}" timeline={copy.timeline}/>
		</div>
		<div class="timeline">
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
	}
	#scrolly {
		font-family: "National 2 Web";
	}
	.visualContainer {
		position: sticky;
		top: 0em;
		width: 100%;
	}

	.spacer {
		height: 75vh;
	}
	.timeline {
		pointer-events: none;
		position: relative;
		z-index: 100;
		margin-top: -80vh;
	}
	.step {
		height: 4vh;
		min-height: 25px;
		text-align: right;
		color: #aaa;
		padding-right: 5px;
		font-size: 14px;
	}
	.step.active {
		color: #FE2F8D;
		font-weight: bold;
		padding-right: 10px;
		font-size: 15px;
		text-shadow: 0px 0px 6px #000;
	}
	.step.longcopy {
		height: auto;
		min-height: 100vh;
		/*background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.9) 38%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.9) 61%, rgba(0,0,0,0.7) 77%, rgba(0,0,0,0) 100%);
		background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 20%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.9) 61%,rgba(0,0,0,0.7) 77%,rgba(0,0,0,0) 100%);
		background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 20%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.9) 61%,rgba(0,0,0,0.7) 77%,rgba(0,0,0,0) 100%);*/
		background: black;
		padding: 20vh 2em;
		margin: 0 auto;
		position: relative;
	}
	.step p {
		padding: 1rem;
	}
</style>


