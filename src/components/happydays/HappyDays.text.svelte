<script>
	import { onMount } from 'svelte';
	export let copy, add, time;

	function convertToHTML(text) {
		let finalText = [];
		let textArray = text.split("\n");
		textArray.forEach(function(line) {
			if (line.indexOf("Component|") != -1) {
				let compName = line.split("|")[1];
				line = `<svelte:component this=${compName}></svelte:component>`
			}
			
			if (line.indexOf("IMAGE|") != -1) {
				line = '<div class="imageContainer"><img class="desktopImage" src="/assets/happydays/' + line.replace("IMAGE|","").replace(/(\r\n|\n|\r)/gm, "") + '.svg"/><img class="mobileImage" src="/assets/happydays/' + line.replace("IMAGE|","").replace(/(\r\n|\n|\r)/gm, "") + '_mobile.svg"/></div>';
			}
			finalText.push(line);
		})

		return "<p>" + finalText.join("</p><p>") + "</p>";
	}
</script>

<div class="textContainer {add}">
	<div class="time">{time}</div>
	{@html convertToHTML(copy)}
</div>

<style>


</style>


