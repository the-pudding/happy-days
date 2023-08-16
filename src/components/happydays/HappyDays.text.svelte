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
		return "<p>" + finalText.join("</p><p>") + "</p>";
	}
</script>

<div class="textContainer">
	{#if imageLoc == "top"}
	<div class="imageContainer">
		<img src="/assets/happydays/{image}"/>
	</div>
	{/if}
	{@html convertToHTML(copy)}
	{#if imageLoc == "bottom"}
	<div class="imageContainer">
		<img src="/assets/happydays/{image}"/>
	</div>
	{/if}
</div>

<style>
.imageContainer {
	width: 100%;
	min-height: 300px;
	background: gray;
}
.imageContainer img {
	width: 100%;
	image-rendering: optimizeSpeed;             /* No smoothing  */
		image-rendering: -moz-crisp-edges;          /* Firefox                        */
		image-rendering: -o-crisp-edges;            /* Opera                          */
		image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
		image-rendering: pixelated;                 /* Universal support since 2021   */
		image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
		-ms-interpolation-mode: nearest-neighbor;   /* IE8+ */
}

</style>


