<script>
	import { onMount } from 'svelte';
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Grid from "$components/happydays/HappyDays.grid.svelte";
	import Text from "$components/happydays/HappyDays.text.svelte";
	import Modal from "$components/happydays/HappyDays.modal.svelte";
	import people from "$components/happydays/people-all-nogroup.json";
	import martin from "$components/happydays/martin.json"; // martin OG is 20210706212196
	import { fade } from 'svelte/transition';
	
	let value;
	let beginTime = 240;
	let changeView;
	let timeRange = [];
	for (let i = beginTime; i < 1440 + beginTime; i++) {
		timeRange.push(i);
	}
	let screenHeight = 1000;
	let selectedPerson = null;
	
	export let copy;
	
	// const options = ["0","1","2","3","4","5","6","7","8","9","10"]; // happiness groups
	let options = [[0,1],[2],[3],[4,5,6],[7,8],[9,10]];
	const days = [1,7]; // days of the week to display
	const ageRange = [0,105]; // age range to display
	people[0] = martin;
	let currentPeople = selectPeople(30); // initialize with X number of people per WECANTRIL
	let positionLookup = {};
	// Select ## random people in a given group
	function selectPeople(max) {
		let final = [];
		for (let i = 0; i < options.length; i++) {
			let peopleUniverse = people.filter(function(p) {
				if (days.indexOf(p.TUDIARYDAY_x) != -1 && options[i].indexOf(p.WECANTRIL) != -1 && p.TEAGE >= ageRange[0] && p.activity[p.activity.length-1] != 1) { // && p.TRDPFTPT_x == 1 ||  fulltime job (&& p.TRDPFTPT_x == 1)
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
				element["happy_num"] = i;
				element["happy_group"] = options[i];
			});
			let counter = 0;
			for (let j = 0; j < peopleUniverse.length; j++) {
				peopleUniverse[j]["happy_counter"] = counter;
				counter += 1;
			}

			final.push.apply(final, peopleUniverse.slice(0, max));
		}
		// shuffle(final);
		// no sort, but numbering and counting up
		let counter = 0;
		final = sortObj(final, "happy_counter");
		// final = final.sort(function(x,y){ return x.TUCASEID == 20210706212196 ? -1 : 0; });
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

	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;
		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}
		return array;
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
<svelte:window bind:innerHeight={screenHeight} />
<div class="outsideContainer">
	<section id="scrolly">
		<div class="visualContainer">
			<Grid currentPeople={currentPeople} options={options} time="{value + beginTime}" beginTime="{beginTime}" timeline={copy.timeline} hed={copy.Hed} bind:selectedPerson={selectedPerson}/>
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
	<div class="modal {selectedPerson == null ? '' : 'shown'}">
		<Modal bind:selectedPerson={selectedPerson} time="{value + beginTime}"/>
	</div>
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
		background: rgb(40,33,47);
		background: -moz-linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,0.97) 11%, rgba(40,33,47,0.97) 89%, rgba(40,33,47,0) 100%);
		background: -webkit-linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,0.97) 11%, rgba(40,33,47,0.97) 89%, rgba(40,33,47,0) 100%);
		background: linear-gradient(0deg, rgba(40,33,47,0) 0%, rgba(40,33,47,0.97) 11%, rgba(40,33,47,0.97) 89%, rgba(40,33,47,0) 100%);
		backdrop-filter: blur(3px);
		padding: 20vh 2em;
		box-sizing: content-box !important;
		margin: 0vh auto;
		position: relative;
		pointer-events: none;
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
		height: 50px;
		backdrop-filter: blur(1px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 90%
		);
	}
	.postLongcopy {
		display: block;
		height: 50px;
		backdrop-filter: blur(1px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 0%
			rgba(0, 0, 0, 0) 60%
		);
		margin-top: -3px;
	}
	.modal {
		width: 300px;
		position: fixed;
		left: -300px;
		top: 0px;
		height: 100%;
		background: black;
		transition: all 200ms cubic-bezier(0.250, 0.100, 0.250, 1.000); /* ease (default) */
		transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); /* ease (default) */
		overflow-y: scroll;
	}
	.modal.shown {
		left: 0px;
	}
</style>


