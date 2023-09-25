<script>
	import { DollarSign } from "lucide-svelte";
	export let text = "Send a tip to Alvin Chang";
	export let href;
</script>

<div class="tip_text">Thank you for reading to the end! Consider directly supporting the author.</div>
<a class="tip-button" {href} target="_blank" rel="noreferrer" role="button"
	>{text} <span><DollarSign color="currentColor" /></span>
</a>

<style>
	.tip_text {
		color: #DFD2DE !important;
		text-align: center;
		font-size: 1.3rem;
		line-height: 1.8rem;
		width: 100%;
		padding: 0 10px;
	}
	a.tip-button {
		background: var(--color-pinkpurple);
		color: var(--color-black);
/*		font-weight: bold;*/
		display: inline-flex;
		position: relative;
		align-items: center;
		justify-content: center;
		border-radius: 2px;
		box-shadow: 5px 5px 0px 0px #000;
		letter-spacing: 0.05em;
		padding: 12px 16px;
		margin: 30px 10px;
		margin-left: -140px;
		width: 280px;
		left: 50%;
	}
	a.tip-button:hover {
		text-decoration: underline;
	}

	span {
		display: inline-block;
		border: 1px solid currentColor;
		width: 1.5em;
		height: 1.5em;
		border-radius: 50%;
		text-align: center;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-left: 8px;
		padding: 2px;
	}
</style>
