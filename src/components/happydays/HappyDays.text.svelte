<script>
	import { onMount } from 'svelte';
	export let copy;
	
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
	{@html convertToHTML(copy)}
</div>

<style>
.textContainer {
	max-width: 500px;
	margin: 0 auto;
	color: white !important;
	text-align: left;
	font-size: 20px;
	line-height: 1.6em;
	font-weight: normal;
	font-family: "Tiempos Text Web", Iowan Old Style, Times New Roman, Times, serif;
	position: absolute;
	top: 45%;
	left: 50%;
	-ms-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
}
.textContainer p {
	color: white;
	margin-bottom: 20px !important;
	text-shadow:
	2px 0 black,
	0 -2px black,
	-2px 0 black,
	0 2px black;
}
.textContainer a {
	color: white !important;
}
</style>


