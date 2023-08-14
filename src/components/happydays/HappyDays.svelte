<script>
	import { onMount } from 'svelte';
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Grid from "$components/happydays/HappyDays.grid.svelte";
	import Text from "$components/happydays/HappyDays.text.svelte";
	
	let value;
	let beginTime = 240;
	let changeView;
	let timeRange = [];
	for (let i = beginTime; i < 1440 + beginTime; i++) {
		timeRange.push(i);
	}
	
	export let copy;
	
	
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
</script>

<section id="scrolly">
	<div class="visualContainer">
		<Grid time="{value + beginTime}" beginTime="{beginTime}"/>
	</div>
	<div class="timeline">
		<Scrolly bind:value increments={1} top={100}>
			{#each timeRange as text, i}
			{@const active = value === i}
			{#if text in copy}
			<div class="step longcopy" class:active>
				<Text copy={copy[text]}/>
			</div>
			{:else}
			<div class="step" class:active>{convertTime(text)}</div>
			{/if}
			{/each}
		</Scrolly>
	</div>
	<div class="spacer" />
</section>

<style>
	#scrolly {
		font-family: "National 2 Web";
	}
	.visualContainer {
		position: sticky;
		top: 4em;
		width: 100%;
	}

	.spacer {
		height: 75vh;
	}
	.timeline {
		pointer-events: none;
		position: relative;
		z-index: 100;
		margin-top: -90vh;
	}
	.step {
		height: 2.5vh;
		text-align: right;
		color: #ccc;
		padding-right: 5px;
		font-size: 14px;
	}
	.step.active {
		color: #000;
		font-weight: bold;
		padding-right: 10px;
		font-size: 15px;
	}
	.step.longcopy {
		height: 150vh;
		background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.9) 38%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.9) 61%, rgba(0,0,0,0.7) 77%, rgba(0,0,0,0) 100%);
		background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 20%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.9) 61%,rgba(0,0,0,0.7) 77%,rgba(0,0,0,0) 100%);
		background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 20%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.9) 61%,rgba(0,0,0,0.7) 77%,rgba(0,0,0,0) 100%);
		padding: 20vh 2em;
		margin: 0 auto;
		position: relative;
	}
	.step p {
		padding: 1rem;
	}
</style>


