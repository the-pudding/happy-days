<script>
	import { getContext } from "svelte";
	import HappyDays from "$components/happydays/HappyDays.svelte";
	// import Demo from "$components/demo/Demo.svelte";
	// import WIP from "$components/helpers/WIP.svelte";
	import Footer from "$components/Footer.svelte";

	const copy = getContext("copy");
</script>

<!-- <WIP /> -->
<HappyDays copy={copy}/>
<Footer />