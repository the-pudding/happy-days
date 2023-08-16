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
.textContainer {
	max-width: 500px;
	margin: 0 auto;
	color: #ccc !important;
	text-align: left;
	font-size: 17px;
	line-height: 1.6em;
	font-weight: normal;
/*	font-family: "Tiempos Text Web", Iowan Old Style, Times New Roman, Times, serif;*/
	position: absolute;
	top: 45%;
	left: 50%;
	-ms-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
/*	background: black;*/
/*	padding: 20px;*/
}
.textContainer strong {
	color: white !important;
}
.textContainer a {
	color: white !important;
}
</style>


