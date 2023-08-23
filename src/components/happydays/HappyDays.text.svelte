<script>
	import { onMount } from 'svelte';
	export let copy, image, imageLoc;

	function convertToHTML(text) {
		let finalText = [];
		let textArray = text.split("\n");
		textArray.forEach(function(line) {
			if (line.indexOf("Component|") != -1) {
				let compName = line.split("|")[1];
				line = `<svelte:component this=${compName}></svelte:component>`
			}
			finalText.push(line);
		})
		let imageString = "";
		if (image != "") {
			imageString = '<div class="imageContainer"><img src="/assets/happydays/' + image + '"/></div>';
		}
		return "<p>" + finalText.join("</p><p>").replace(">>IMAGE",imageString) + "</p>";
	}
</script>

<div class="textContainer">
	{@html convertToHTML(copy)}
</div>

<style>


</style>


