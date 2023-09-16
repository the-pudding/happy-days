<script>
	import lookup from "$components/happydays/lookup.json";
	import { onMount } from 'svelte';
	export let selectedPerson, time;
	let details = 1;
	let cleanedActivites = [];

	function getFullCompany() {
		if (selectedPerson != null) {
			let p = selectedPerson;
			cleanedActivites = [];
			let currentTime = -1;
			let currentActivity = {};
			for (let i = 0; i < p.activity.length; i++) {
				if (currentTime != p.activity[i][0]) {
					if (i != 0) {
						cleanedActivites.push(currentActivity)
					}
					currentActivity = {};
					currentTime = p.activity[i][0];
					currentActivity = [p.activity[i][0], p.activity[i][2], [], checkTime(p.activity[i][0],p.activity[i][1],time)]; // start, activity, company (empty array)
				}
				currentActivity[2].push(p.activity[i][5])
			}
			cleanedActivites.push(currentActivity)
		}
		selectedPerson = selectedPerson;
	}

	function checkTime(start, end, time) {
		start = start < 240 ? start + 1440 : start;
		end = end <= 240 ? end + 1440 : end;
		if (start <= time && end > time) {
			return 'hl';
		}
		if (end < time) {
			return 'cross ' + start + "," + end
		}
		return '';
	}

	// If Hispanic, overrides race
	function raceConvert(r1, r2) { return r2 == "Hispanic" ? "Hispanic" : r1; }
	// If money exists, format. If not, return --
	function formatMoney(n) { return n > 0 ? "$" + comma(Math.round(n/100)) : "--"; }
	// Thousandth comma
	function comma(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

	function closeModal() {
		selectedPerson = null;
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
		time = time;
		getFullCompany();
		cleanedActivites = cleanedActivites;
		selectedPerson = selectedPerson;
	}
</script>

<div class="textContainer">
	{#if selectedPerson != null}
	<div class="details {details == 1 ? 'shown' : ''}">
		<div class="detailsClose" on:click={closeModal}>Click to close</div>
		<h3>{selectedPerson.TEAGE}-year-old {raceConvert(lookup.PTDTRACE[selectedPerson.PTDTRACE], lookup.PEHSPNON[selectedPerson.PEHSPNON])} {lookup.TESEX[selectedPerson.TESEX]} in {lookup.WEGENHTH[selectedPerson.WEGENHTH].toLowerCase()} health</h3>

		<p>Has {selectedPerson.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[selectedPerson.TRSPPRES].toLowerCase()} and {selectedPerson.TRCHILDNUM_x == 1 ? selectedPerson.TRCHILDNUM_x + " child" : selectedPerson.TRCHILDNUM_x + " children"} in the household. {selectedPerson.TESCHENR == 1 ? "Enrolled in school." : ""} Has a {lookup.PEEDUCA[selectedPerson.PEEDUCA]}. {selectedPerson.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[selectedPerson.TRDTIND1].toLowerCase() +  " earning " + formatMoney(selectedPerson.TRERNWA_x) + " a week." : ''} They reported being a {selectedPerson.WECANTRIL} out of 10 when asked how close were to living their best possible life, with 10 being the best.</p>
		<div class="activities">
			{#each cleanedActivites as act, key}
			<div class="act {act[3]}"><span class="time">{convertTime(act[0])}</span> {lookup.ACTIVITY[act[1]].task} {convertCurrentCompany(act[2])}</div>
			{/each}
		</div>
		<div class="fixed_spacer" />
		<div class="spacer" />
	</div>
	{/if}
</div>

<style>
	/* with {convertCurrentCompany(lookup.WHO[act[2]])} */
	h3 {
		font-weight: bold;
		color: #fff;
		font-size: 1.1rem;
		line-height: 1.5rem;
	}
	.details {
		width: 100%;
		height: 100%;
		color: #aaa;
		padding: 0 8px 8px 8px;
		text-align: left;
		font-size: 0.8rem;
		line-height: 1.2rem;
		z-index: 999;
		display: flex;
		position: relative;
	}
	.details.shown {
		display: block;
	}
	.detailsClose {
		font-size: 15px;
		display: inline-block;
		cursor: pointer;
		color: black;
		font-weight: bold;
		background: var(--color-pinkpurple);
		padding: 10px 5px;
		border: 5px solid #000;
		border-top: 10px solid #000;
		text-align: center;
		position: sticky;
		top: 0px;
		width: 100%;
		opacity: 0.9;
	}
	.detailClose.bottom {
		align-self: flex-end;
	}
	.detailsClose:hover {
		text-decoration: underline;
		opacity: 1;
	}
	.activities {font-size: 0.8rem; line-height: 0.9rem;}
	.activities .act {
		margin-bottom: 0.3rem;
	}
	.act .time {
		color: #fff;
		display: block;
	}
/*	.act.cross, */
	.act.cross .time{
		text-decoration: line-through;
		color: #777 !important;
	}
	.act.cross {
		color: #666;
	}
	.act.hl, .act.hl .time{
		color: var(--color-pinkpurple) !important;
	}
	.fixed_spacer {
		position: sticky;
		bottom: 0px;
		left: 0px;
		height: 120px;
		background: rgb(40,33,47);
		background: -moz-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(0,0,0,1) 79%);
		background: -webkit-linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(0,0,0,1) 79%);
		background: linear-gradient(180deg, rgba(40,33,47,0) 0%, rgba(0,0,0,1) 79%);
		width: 100%;
	}
	.spacer {
		height: 100px;
		display: block;
	}
</style>


