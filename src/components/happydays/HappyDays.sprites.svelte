<script>
	import { onMount } from 'svelte';
	import lookup from "$components/happydays/lookup.json";
	import { fade } from 'svelte/transition';

	export let person;
	export let sex;
	export let act;
	export let shown;
	export let begin, end, frameRate;

	let animClass;
	
	if (person == "alone") {
		animClass = lookup.ACTIVITY[act].animClass;
		sex = sex == 1 ? "male" : "female";
	} else if (person != "alone") {
		sex = Math.random() > 0.5 ? "male" : "female";
		animClass = lookup.ACTIVITY[act]["otherClass"];
	}

	if (person.indexOf("child") != -1) {
		sex = "child";
		animClass = lookup.ACTIVITY[act]["childclass"];
	} 

	
	// export let 
	let pos = { x: 0, y: 0 };

	// Array of sprites
	let names = [];
	function buildList(who, what, when) {
		for (let i = 1; i < when + 1; i++) {
			names.push(who + "-" + what + "-" + i);
		}
	}
	buildList(sex,animClass,11);


	let current = 0;
	$: name = names[current];

	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % names.length;	
		}, frameRate);

		return () => clearInterval(interval);
	});
</script>



<div class="ff ff-{person} shown{shown}" transition:fade>
	{#if person == "alone"}
	<div class="sprite" anim="{name}.png" style="transform: translate({pos.x}px,{pos.y}px)"></div>
	{:else}
	<div class="sprite" anim2="{name}.png" style="transform: translate({pos.x}px,{pos.y}px)"></div>
	{/if}
</div>



<style>
	.ff {
		position: absolute;
		bottom: 0px;
		width: 20%;
		margin-left: -5%;
		height: 40%;
		transition: opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		font-size: 10px;
		color: white;
		opacity: 0;
		pointer-events: none;
	}
	.ff.shown1 {
		opacity: 1;
		pointer-events: all;
	}
	
	.ff-other {display: none !important;}
	
	.ff-adult_family {left: 4.5%;}
	
	.ff-partner {left: calc(4.5% + 13%);}
	.ff-child_nonfamily, .ff-child_family {left: calc(4.5% + 26%);}
	.ff-alone {left: calc(4.5% + 39%); bottom: 0%;}

	.ff-friend { left: calc(4.5% + 52%)}
	.ff-adult_nonfamily {left: calc(4.5% + 65%); }
	.ff-workrelated {left: calc(4.5% + 78%);}
	.ff-friend, .ff-adult_nonfamily, .ff-workrelated {
	/*	-webkit-transform: scaleX(-1);
		transform: scaleX(-1);*/
	}


	

	.sprite {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%) !important;
		background-repeat: no-repeat;
		zoom: 2;
		image-rendering: optimizeSpeed;             /* No smoothing  */
		image-rendering: -moz-crisp-edges;          /* Firefox                        */
		image-rendering: -o-crisp-edges;            /* Opera                          */
		image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
		image-rendering: pixelated;                 /* Universal support since 2021   */
		image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
		-ms-interpolation-mode: nearest-neighbor;   /* IE8+ */
		transition: opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
		transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */
	}
	
	[anim] { background-image: url(/assets/happydays/sprite-master.png); background-size: 440px 1880px }

	[anim="child-eating-1.png"] { width: 40px; height: 40px; background-position:0px 0px }
	[anim="child-eating-2.png"] { width: 40px; height: 40px; background-position:-40px 0px }
	[anim="child-eating-3.png"] { width: 40px; height: 40px; background-position:-80px 0px }
	[anim="child-eating-4.png"] { width: 40px; height: 40px; background-position:-120px 0px }
	[anim="child-eating-5.png"] { width: 40px; height: 40px; background-position:-160px 0px }
	[anim="child-eating-6.png"] { width: 40px; height: 40px; background-position:-200px 0px }
	[anim="child-eating-7.png"] { width: 40px; height: 40px; background-position:-240px 0px }
	[anim="child-eating-8.png"] { width: 40px; height: 40px; background-position:-280px 0px }
	[anim="child-eating-9.png"] { width: 40px; height: 40px; background-position:-320px 0px }
	[anim="child-eating-10.png"] { width: 40px; height: 40px; background-position:-360px 0px }
	[anim="child-eating-11.png"] { width: 40px; height: 40px; background-position:-400px 0px }


	[anim="child-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -40px }
	[anim="child-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -40px }
	[anim="child-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -40px }
	[anim="child-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -40px }
	[anim="child-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -40px }
	[anim="child-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -40px }
	[anim="child-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -40px }
	[anim="child-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -40px }
	[anim="child-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -40px }
	[anim="child-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -40px }
	[anim="child-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -40px }


	[anim="child-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -80px }
	[anim="child-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -80px }
	[anim="child-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -80px }
	[anim="child-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -80px }
	[anim="child-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -80px }
	[anim="child-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -80px }
	[anim="child-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -80px }
	[anim="child-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -80px }
	[anim="child-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -80px }
	[anim="child-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -80px }
	[anim="child-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -80px }


	[anim="child-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -120px }
	[anim="child-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -120px }
	[anim="child-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -120px }
	[anim="child-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -120px }
	[anim="child-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -120px }
	[anim="child-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -120px }
	[anim="child-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -120px }
	[anim="child-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -120px }
	[anim="child-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -120px }
	[anim="child-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -120px }
	[anim="child-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -120px }


	[anim="child-social-1.png"] { width: 40px; height: 40px; background-position:0px -160px }
	[anim="child-social-2.png"] { width: 40px; height: 40px; background-position:-40px -160px }
	[anim="child-social-3.png"] { width: 40px; height: 40px; background-position:-80px -160px }
	[anim="child-social-4.png"] { width: 40px; height: 40px; background-position:-120px -160px }
	[anim="child-social-5.png"] { width: 40px; height: 40px; background-position:-160px -160px }
	[anim="child-social-6.png"] { width: 40px; height: 40px; background-position:-200px -160px }
	[anim="child-social-7.png"] { width: 40px; height: 40px; background-position:-240px -160px }
	[anim="child-social-8.png"] { width: 40px; height: 40px; background-position:-280px -160px }
	[anim="child-social-9.png"] { width: 40px; height: 40px; background-position:-320px -160px }
	[anim="child-social-10.png"] { width: 40px; height: 40px; background-position:-360px -160px }
	[anim="child-social-11.png"] { width: 40px; height: 40px; background-position:-400px -160px }


	[anim="child-sports-1.png"] { width: 40px; height: 40px; background-position:0px -200px }
	[anim="child-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -200px }
	[anim="child-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -200px }
	[anim="child-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -200px }
	[anim="child-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -200px }
	[anim="child-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -200px }
	[anim="child-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -200px }
	[anim="child-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -200px }
	[anim="child-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -200px }
	[anim="child-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -200px }
	[anim="child-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -200px }


	[anim="child-standing-1.png"] { width: 40px; height: 40px; background-position:0px -240px }
	[anim="child-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -240px }
	[anim="child-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -240px }
	[anim="child-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -240px }
	[anim="child-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -240px }
	[anim="child-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -240px }
	[anim="child-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -240px }
	[anim="child-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -240px }
	[anim="child-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -240px }
	[anim="child-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -240px }
	[anim="child-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -240px }


	[anim="child-talking-1.png"] { width: 40px; height: 40px; background-position:0px -280px }
	[anim="child-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -280px }
	[anim="child-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -280px }
	[anim="child-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -280px }
	[anim="child-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -280px }
	[anim="child-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -280px }
	[anim="child-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -280px }
	[anim="child-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -280px }
	[anim="child-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -280px }
	[anim="child-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -280px }
	[anim="child-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -280px }


	[anim="child-walking-1.png"] { width: 40px; height: 40px; background-position:0px -320px }
	[anim="child-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -320px }
	[anim="child-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -320px }
	[anim="child-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -320px }
	[anim="child-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -320px }
	[anim="child-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -320px }
	[anim="child-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -320px }
	[anim="child-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -320px }
	[anim="child-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -320px }
	[anim="child-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -320px }
	[anim="child-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -320px }


	[anim="female-careadult-1.png"] { width: 40px; height: 40px; background-position:0px -360px }
	[anim="female-careadult-2.png"] { width: 40px; height: 40px; background-position:-40px -360px }
	[anim="female-careadult-3.png"] { width: 40px; height: 40px; background-position:-80px -360px }
	[anim="female-careadult-4.png"] { width: 40px; height: 40px; background-position:-120px -360px }
	[anim="female-careadult-5.png"] { width: 40px; height: 40px; background-position:-160px -360px }
	[anim="female-careadult-6.png"] { width: 40px; height: 40px; background-position:-200px -360px }
	[anim="female-careadult-7.png"] { width: 40px; height: 40px; background-position:-240px -360px }
	[anim="female-careadult-8.png"] { width: 40px; height: 40px; background-position:-280px -360px }
	[anim="female-careadult-9.png"] { width: 40px; height: 40px; background-position:-320px -360px }
	[anim="female-careadult-10.png"] { width: 40px; height: 40px; background-position:-360px -360px }
	[anim="female-careadult-11.png"] { width: 40px; height: 40px; background-position:-400px -360px }


	[anim="female-carekids-1.png"] { width: 40px; height: 40px; background-position:0px -400px }
	[anim="female-carekids-2.png"] { width: 40px; height: 40px; background-position:-40px -400px }
	[anim="female-carekids-3.png"] { width: 40px; height: 40px; background-position:-80px -400px }
	[anim="female-carekids-4.png"] { width: 40px; height: 40px; background-position:-120px -400px }
	[anim="female-carekids-5.png"] { width: 40px; height: 40px; background-position:-160px -400px }
	[anim="female-carekids-6.png"] { width: 40px; height: 40px; background-position:-200px -400px }
	[anim="female-carekids-7.png"] { width: 40px; height: 40px; background-position:-240px -400px }
	[anim="female-carekids-8.png"] { width: 40px; height: 40px; background-position:-280px -400px }
	[anim="female-carekids-9.png"] { width: 40px; height: 40px; background-position:-320px -400px }
	[anim="female-carekids-10.png"] { width: 40px; height: 40px; background-position:-360px -400px }
	[anim="female-carekids-11.png"] { width: 40px; height: 40px; background-position:-400px -400px }


	[anim="female-eating-1.png"] { width: 40px; height: 40px; background-position:0px -440px }
	[anim="female-eating-2.png"] { width: 40px; height: 40px; background-position:-40px -440px }
	[anim="female-eating-3.png"] { width: 40px; height: 40px; background-position:-80px -440px }
	[anim="female-eating-4.png"] { width: 40px; height: 40px; background-position:-120px -440px }
	[anim="female-eating-5.png"] { width: 40px; height: 40px; background-position:-160px -440px }
	[anim="female-eating-6.png"] { width: 40px; height: 40px; background-position:-200px -440px }
	[anim="female-eating-7.png"] { width: 40px; height: 40px; background-position:-240px -440px }
	[anim="female-eating-8.png"] { width: 40px; height: 40px; background-position:-280px -440px }
	[anim="female-eating-9.png"] { width: 40px; height: 40px; background-position:-320px -440px }
	[anim="female-eating-10.png"] { width: 40px; height: 40px; background-position:-360px -440px }
	[anim="female-eating-11.png"] { width: 40px; height: 40px; background-position:-400px -440px }


	[anim="female-foodprep-1.png"] { width: 40px; height: 40px; background-position:0px -480px }
	[anim="female-foodprep-2.png"] { width: 40px; height: 40px; background-position:-40px -480px }
	[anim="female-foodprep-3.png"] { width: 40px; height: 40px; background-position:-80px -480px }
	[anim="female-foodprep-4.png"] { width: 40px; height: 40px; background-position:-120px -480px }
	[anim="female-foodprep-5.png"] { width: 40px; height: 40px; background-position:-160px -480px }
	[anim="female-foodprep-6.png"] { width: 40px; height: 40px; background-position:-200px -480px }
	[anim="female-foodprep-7.png"] { width: 40px; height: 40px; background-position:-240px -480px }
	[anim="female-foodprep-8.png"] { width: 40px; height: 40px; background-position:-280px -480px }
	[anim="female-foodprep-9.png"] { width: 40px; height: 40px; background-position:-320px -480px }
	[anim="female-foodprep-10.png"] { width: 40px; height: 40px; background-position:-360px -480px }
	[anim="female-foodprep-11.png"] { width: 40px; height: 40px; background-position:-400px -480px }


	[anim="female-household-1.png"] { width: 40px; height: 40px; background-position:0px -520px }
	[anim="female-household-2.png"] { width: 40px; height: 40px; background-position:-40px -520px }
	[anim="female-household-3.png"] { width: 40px; height: 40px; background-position:-80px -520px }
	[anim="female-household-4.png"] { width: 40px; height: 40px; background-position:-120px -520px }
	[anim="female-household-5.png"] { width: 40px; height: 40px; background-position:-160px -520px }
	[anim="female-household-6.png"] { width: 40px; height: 40px; background-position:-200px -520px }
	[anim="female-household-7.png"] { width: 40px; height: 40px; background-position:-240px -520px }
	[anim="female-household-8.png"] { width: 40px; height: 40px; background-position:-280px -520px }
	[anim="female-household-9.png"] { width: 40px; height: 40px; background-position:-320px -520px }
	[anim="female-household-10.png"] { width: 40px; height: 40px; background-position:-360px -520px }
	[anim="female-household-11.png"] { width: 40px; height: 40px; background-position:-400px -520px }


	[anim="female-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -560px }
	[anim="female-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -560px }
	[anim="female-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -560px }
	[anim="female-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -560px }
	[anim="female-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -560px }
	[anim="female-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -560px }
	[anim="female-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -560px }
	[anim="female-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -560px }
	[anim="female-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -560px }
	[anim="female-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -560px }
	[anim="female-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -560px }


	[anim="female-pets-1.png"] { width: 40px; height: 40px; background-position:0px -600px }
	[anim="female-pets-2.png"] { width: 40px; height: 40px; background-position:-40px -600px }
	[anim="female-pets-3.png"] { width: 40px; height: 40px; background-position:-80px -600px }
	[anim="female-pets-4.png"] { width: 40px; height: 40px; background-position:-120px -600px }
	[anim="female-pets-5.png"] { width: 40px; height: 40px; background-position:-160px -600px }
	[anim="female-pets-6.png"] { width: 40px; height: 40px; background-position:-200px -600px }
	[anim="female-pets-7.png"] { width: 40px; height: 40px; background-position:-240px -600px }
	[anim="female-pets-8.png"] { width: 40px; height: 40px; background-position:-280px -600px }
	[anim="female-pets-9.png"] { width: 40px; height: 40px; background-position:-320px -600px }
	[anim="female-pets-10.png"] { width: 40px; height: 40px; background-position:-360px -600px }
	[anim="female-pets-11.png"] { width: 40px; height: 40px; background-position:-400px -600px }


	[anim="female-phone-1.png"] { width: 40px; height: 40px; background-position:0px -640px }
	[anim="female-phone-2.png"] { width: 40px; height: 40px; background-position:-40px -640px }
	[anim="female-phone-3.png"] { width: 40px; height: 40px; background-position:-80px -640px }
	[anim="female-phone-4.png"] { width: 40px; height: 40px; background-position:-120px -640px }
	[anim="female-phone-5.png"] { width: 40px; height: 40px; background-position:-160px -640px }
	[anim="female-phone-6.png"] { width: 40px; height: 40px; background-position:-200px -640px }
	[anim="female-phone-7.png"] { width: 40px; height: 40px; background-position:-240px -640px }
	[anim="female-phone-8.png"] { width: 40px; height: 40px; background-position:-280px -640px }
	[anim="female-phone-9.png"] { width: 40px; height: 40px; background-position:-320px -640px }
	[anim="female-phone-10.png"] { width: 40px; height: 40px; background-position:-360px -640px }
	[anim="female-phone-11.png"] { width: 40px; height: 40px; background-position:-400px -640px }


	[anim="female-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -680px }
	[anim="female-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -680px }
	[anim="female-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -680px }
	[anim="female-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -680px }
	[anim="female-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -680px }
	[anim="female-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -680px }
	[anim="female-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -680px }
	[anim="female-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -680px }
	[anim="female-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -680px }
	[anim="female-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -680px }
	[anim="female-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -680px }


	[anim="female-shopping-1.png"] { width: 40px; height: 40px; background-position:0px -720px }
	[anim="female-shopping-2.png"] { width: 40px; height: 40px; background-position:-40px -720px }
	[anim="female-shopping-3.png"] { width: 40px; height: 40px; background-position:-80px -720px }
	[anim="female-shopping-4.png"] { width: 40px; height: 40px; background-position:-120px -720px }
	[anim="female-shopping-5.png"] { width: 40px; height: 40px; background-position:-160px -720px }
	[anim="female-shopping-6.png"] { width: 40px; height: 40px; background-position:-200px -720px }
	[anim="female-shopping-7.png"] { width: 40px; height: 40px; background-position:-240px -720px }
	[anim="female-shopping-8.png"] { width: 40px; height: 40px; background-position:-280px -720px }
	[anim="female-shopping-9.png"] { width: 40px; height: 40px; background-position:-320px -720px }
	[anim="female-shopping-10.png"] { width: 40px; height: 40px; background-position:-360px -720px }
	[anim="female-shopping-11.png"] { width: 40px; height: 40px; background-position:-400px -720px }


	[anim="female-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -760px }
	[anim="female-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -760px }
	[anim="female-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -760px }
	[anim="female-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -760px }
	[anim="female-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -760px }
	[anim="female-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -760px }
	[anim="female-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -760px }
	[anim="female-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -760px }
	[anim="female-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -760px }
	[anim="female-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -760px }
	[anim="female-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -760px }


	[anim="female-sleeping-1.png"] { width: 40px; height: 40px; background-position:0px -800px }
	[anim="female-sleeping-2.png"] { width: 40px; height: 40px; background-position:-40px -800px }
	[anim="female-sleeping-3.png"] { width: 40px; height: 40px; background-position:-80px -800px }
	[anim="female-sleeping-4.png"] { width: 40px; height: 40px; background-position:-120px -800px }
	[anim="female-sleeping-5.png"] { width: 40px; height: 40px; background-position:-160px -800px }
	[anim="female-sleeping-6.png"] { width: 40px; height: 40px; background-position:-200px -800px }
	[anim="female-sleeping-7.png"] { width: 40px; height: 40px; background-position:-240px -800px }
	[anim="female-sleeping-8.png"] { width: 40px; height: 40px; background-position:-280px -800px }
	[anim="female-sleeping-9.png"] { width: 40px; height: 40px; background-position:-320px -800px }
	[anim="female-sleeping-10.png"] { width: 40px; height: 40px; background-position:-360px -800px }
	[anim="female-sleeping-11.png"] { width: 40px; height: 40px; background-position:-400px -800px }


	[anim="female-social-1.png"] { width: 40px; height: 40px; background-position:0px -840px }
	[anim="female-social-2.png"] { width: 40px; height: 40px; background-position:-40px -840px }
	[anim="female-social-3.png"] { width: 40px; height: 40px; background-position:-80px -840px }
	[anim="female-social-4.png"] { width: 40px; height: 40px; background-position:-120px -840px }
	[anim="female-social-5.png"] { width: 40px; height: 40px; background-position:-160px -840px }
	[anim="female-social-6.png"] { width: 40px; height: 40px; background-position:-200px -840px }
	[anim="female-social-7.png"] { width: 40px; height: 40px; background-position:-240px -840px }
	[anim="female-social-8.png"] { width: 40px; height: 40px; background-position:-280px -840px }
	[anim="female-social-9.png"] { width: 40px; height: 40px; background-position:-320px -840px }
	[anim="female-social-10.png"] { width: 40px; height: 40px; background-position:-360px -840px }
	[anim="female-social-11.png"] { width: 40px; height: 40px; background-position:-400px -840px }


	[anim="female-sports-1.png"] { width: 40px; height: 40px; background-position:0px -880px }
	[anim="female-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -880px }
	[anim="female-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -880px }
	[anim="female-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -880px }
	[anim="female-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -880px }
	[anim="female-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -880px }
	[anim="female-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -880px }
	[anim="female-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -880px }
	[anim="female-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -880px }
	[anim="female-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -880px }
	[anim="female-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -880px }


	[anim="female-standing-1.png"] { width: 40px; height: 40px; background-position:0px -920px }
	[anim="female-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -920px }
	[anim="female-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -920px }
	[anim="female-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -920px }
	[anim="female-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -920px }
	[anim="female-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -920px }
	[anim="female-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -920px }
	[anim="female-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -920px }
	[anim="female-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -920px }
	[anim="female-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -920px }
	[anim="female-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -920px }


	[anim="female-talking-1.png"] { width: 40px; height: 40px; background-position:0px -960px }
	[anim="female-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -960px }
	[anim="female-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -960px }
	[anim="female-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -960px }
	[anim="female-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -960px }
	[anim="female-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -960px }
	[anim="female-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -960px }
	[anim="female-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -960px }
	[anim="female-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -960px }
	[anim="female-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -960px }
	[anim="female-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -960px }


	[anim="female-walking-1.png"] { width: 40px; height: 40px; background-position:0px -1000px }
	[anim="female-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -1000px }
	[anim="female-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -1000px }
	[anim="female-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -1000px }
	[anim="female-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -1000px }
	[anim="female-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -1000px }
	[anim="female-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -1000px }
	[anim="female-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -1000px }
	[anim="female-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -1000px }
	[anim="female-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -1000px }
	[anim="female-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -1000px }


	[anim="female-workingdesk-1.png"] { width: 40px; height: 40px; background-position:0px -1040px }
	[anim="female-workingdesk-2.png"] { width: 40px; height: 40px; background-position:-40px -1040px }
	[anim="female-workingdesk-3.png"] { width: 40px; height: 40px; background-position:-80px -1040px }
	[anim="female-workingdesk-4.png"] { width: 40px; height: 40px; background-position:-120px -1040px }
	[anim="female-workingdesk-5.png"] { width: 40px; height: 40px; background-position:-160px -1040px }
	[anim="female-workingdesk-6.png"] { width: 40px; height: 40px; background-position:-200px -1040px }
	[anim="female-workingdesk-7.png"] { width: 40px; height: 40px; background-position:-240px -1040px }
	[anim="female-workingdesk-8.png"] { width: 40px; height: 40px; background-position:-280px -1040px }
	[anim="female-workingdesk-9.png"] { width: 40px; height: 40px; background-position:-320px -1040px }
	[anim="female-workingdesk-10.png"] { width: 40px; height: 40px; background-position:-360px -1040px }
	[anim="female-workingdesk-11.png"] { width: 40px; height: 40px; background-position:-400px -1040px }


	[anim="female-workinglabor-1.png"] { width: 40px; height: 40px; background-position:0px -1080px }
	[anim="female-workinglabor-2.png"] { width: 40px; height: 40px; background-position:-40px -1080px }
	[anim="female-workinglabor-3.png"] { width: 40px; height: 40px; background-position:-80px -1080px }
	[anim="female-workinglabor-4.png"] { width: 40px; height: 40px; background-position:-120px -1080px }
	[anim="female-workinglabor-5.png"] { width: 40px; height: 40px; background-position:-160px -1080px }
	[anim="female-workinglabor-6.png"] { width: 40px; height: 40px; background-position:-200px -1080px }
	[anim="female-workinglabor-7.png"] { width: 40px; height: 40px; background-position:-240px -1080px }
	[anim="female-workinglabor-8.png"] { width: 40px; height: 40px; background-position:-280px -1080px }
	[anim="female-workinglabor-9.png"] { width: 40px; height: 40px; background-position:-320px -1080px }
	[anim="female-workinglabor-10.png"] { width: 40px; height: 40px; background-position:-360px -1080px }
	[anim="female-workinglabor-11.png"] { width: 40px; height: 40px; background-position:-400px -1080px }


	[anim="male-careadult-1.png"] { width: 40px; height: 40px; background-position:0px -1120px }
	[anim="male-careadult-2.png"] { width: 40px; height: 40px; background-position:-40px -1120px }
	[anim="male-careadult-3.png"] { width: 40px; height: 40px; background-position:-80px -1120px }
	[anim="male-careadult-4.png"] { width: 40px; height: 40px; background-position:-120px -1120px }
	[anim="male-careadult-5.png"] { width: 40px; height: 40px; background-position:-160px -1120px }
	[anim="male-careadult-6.png"] { width: 40px; height: 40px; background-position:-200px -1120px }
	[anim="male-careadult-7.png"] { width: 40px; height: 40px; background-position:-240px -1120px }
	[anim="male-careadult-8.png"] { width: 40px; height: 40px; background-position:-280px -1120px }
	[anim="male-careadult-9.png"] { width: 40px; height: 40px; background-position:-320px -1120px }
	[anim="male-careadult-10.png"] { width: 40px; height: 40px; background-position:-360px -1120px }
	[anim="male-careadult-11.png"] { width: 40px; height: 40px; background-position:-400px -1120px }


	[anim="male-carekids-1.png"] { width: 40px; height: 40px; background-position:0px -1160px }
	[anim="male-carekids-2.png"] { width: 40px; height: 40px; background-position:-40px -1160px }
	[anim="male-carekids-3.png"] { width: 40px; height: 40px; background-position:-80px -1160px }
	[anim="male-carekids-4.png"] { width: 40px; height: 40px; background-position:-120px -1160px }
	[anim="male-carekids-5.png"] { width: 40px; height: 40px; background-position:-160px -1160px }
	[anim="male-carekids-6.png"] { width: 40px; height: 40px; background-position:-200px -1160px }
	[anim="male-carekids-7.png"] { width: 40px; height: 40px; background-position:-240px -1160px }
	[anim="male-carekids-8.png"] { width: 40px; height: 40px; background-position:-280px -1160px }
	[anim="male-carekids-9.png"] { width: 40px; height: 40px; background-position:-320px -1160px }
	[anim="male-carekids-10.png"] { width: 40px; height: 40px; background-position:-360px -1160px }
	[anim="male-carekids-11.png"] { width: 40px; height: 40px; background-position:-400px -1160px }


	[anim="male-eating-1.png"] { width: 40px; height: 40px; background-position:0px -1200px }
	[anim="male-eating-2.png"] { width: 40px; height: 40px; background-position:-40px -1200px }
	[anim="male-eating-3.png"] { width: 40px; height: 40px; background-position:-80px -1200px }
	[anim="male-eating-4.png"] { width: 40px; height: 40px; background-position:-120px -1200px }
	[anim="male-eating-5.png"] { width: 40px; height: 40px; background-position:-160px -1200px }
	[anim="male-eating-6.png"] { width: 40px; height: 40px; background-position:-200px -1200px }
	[anim="male-eating-7.png"] { width: 40px; height: 40px; background-position:-240px -1200px }
	[anim="male-eating-8.png"] { width: 40px; height: 40px; background-position:-280px -1200px }
	[anim="male-eating-9.png"] { width: 40px; height: 40px; background-position:-320px -1200px }
	[anim="male-eating-10.png"] { width: 40px; height: 40px; background-position:-360px -1200px }
	[anim="male-eating-11.png"] { width: 40px; height: 40px; background-position:-400px -1200px }


	[anim="male-foodprep-1.png"] { width: 40px; height: 40px; background-position:0px -1240px }
	[anim="male-foodprep-2.png"] { width: 40px; height: 40px; background-position:-40px -1240px }
	[anim="male-foodprep-3.png"] { width: 40px; height: 40px; background-position:-80px -1240px }
	[anim="male-foodprep-4.png"] { width: 40px; height: 40px; background-position:-120px -1240px }
	[anim="male-foodprep-5.png"] { width: 40px; height: 40px; background-position:-160px -1240px }
	[anim="male-foodprep-6.png"] { width: 40px; height: 40px; background-position:-200px -1240px }
	[anim="male-foodprep-7.png"] { width: 40px; height: 40px; background-position:-240px -1240px }
	[anim="male-foodprep-8.png"] { width: 40px; height: 40px; background-position:-280px -1240px }
	[anim="male-foodprep-9.png"] { width: 40px; height: 40px; background-position:-320px -1240px }
	[anim="male-foodprep-10.png"] { width: 40px; height: 40px; background-position:-360px -1240px }
	[anim="male-foodprep-11.png"] { width: 40px; height: 40px; background-position:-400px -1240px }


	[anim="male-household-1.png"] { width: 40px; height: 40px; background-position:0px -1280px }
	[anim="male-household-2.png"] { width: 40px; height: 40px; background-position:-40px -1280px }
	[anim="male-household-3.png"] { width: 40px; height: 40px; background-position:-80px -1280px }
	[anim="male-household-4.png"] { width: 40px; height: 40px; background-position:-120px -1280px }
	[anim="male-household-5.png"] { width: 40px; height: 40px; background-position:-160px -1280px }
	[anim="male-household-6.png"] { width: 40px; height: 40px; background-position:-200px -1280px }
	[anim="male-household-7.png"] { width: 40px; height: 40px; background-position:-240px -1280px }
	[anim="male-household-8.png"] { width: 40px; height: 40px; background-position:-280px -1280px }
	[anim="male-household-9.png"] { width: 40px; height: 40px; background-position:-320px -1280px }
	[anim="male-household-10.png"] { width: 40px; height: 40px; background-position:-360px -1280px }
	[anim="male-household-11.png"] { width: 40px; height: 40px; background-position:-400px -1280px }


	[anim="male-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -1320px }
	[anim="male-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -1320px }
	[anim="male-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -1320px }
	[anim="male-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -1320px }
	[anim="male-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -1320px }
	[anim="male-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -1320px }
	[anim="male-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -1320px }
	[anim="male-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -1320px }
	[anim="male-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -1320px }
	[anim="male-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -1320px }
	[anim="male-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -1320px }


	[anim="male-pets-1.png"] { width: 40px; height: 40px; background-position:0px -1360px }
	[anim="male-pets-2.png"] { width: 40px; height: 40px; background-position:-40px -1360px }
	[anim="male-pets-3.png"] { width: 40px; height: 40px; background-position:-80px -1360px }
	[anim="male-pets-4.png"] { width: 40px; height: 40px; background-position:-120px -1360px }
	[anim="male-pets-5.png"] { width: 40px; height: 40px; background-position:-160px -1360px }
	[anim="male-pets-6.png"] { width: 40px; height: 40px; background-position:-200px -1360px }
	[anim="male-pets-7.png"] { width: 40px; height: 40px; background-position:-240px -1360px }
	[anim="male-pets-8.png"] { width: 40px; height: 40px; background-position:-280px -1360px }
	[anim="male-pets-9.png"] { width: 40px; height: 40px; background-position:-320px -1360px }
	[anim="male-pets-10.png"] { width: 40px; height: 40px; background-position:-360px -1360px }
	[anim="male-pets-11.png"] { width: 40px; height: 40px; background-position:-400px -1360px }


	[anim="male-phone-1.png"] { width: 40px; height: 40px; background-position:0px -1400px }
	[anim="male-phone-2.png"] { width: 40px; height: 40px; background-position:-40px -1400px }
	[anim="male-phone-3.png"] { width: 40px; height: 40px; background-position:-80px -1400px }
	[anim="male-phone-4.png"] { width: 40px; height: 40px; background-position:-120px -1400px }
	[anim="male-phone-5.png"] { width: 40px; height: 40px; background-position:-160px -1400px }
	[anim="male-phone-6.png"] { width: 40px; height: 40px; background-position:-200px -1400px }
	[anim="male-phone-7.png"] { width: 40px; height: 40px; background-position:-240px -1400px }
	[anim="male-phone-8.png"] { width: 40px; height: 40px; background-position:-280px -1400px }
	[anim="male-phone-9.png"] { width: 40px; height: 40px; background-position:-320px -1400px }
	[anim="male-phone-10.png"] { width: 40px; height: 40px; background-position:-360px -1400px }
	[anim="male-phone-11.png"] { width: 40px; height: 40px; background-position:-400px -1400px }


	[anim="male-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -1440px }
	[anim="male-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -1440px }
	[anim="male-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -1440px }
	[anim="male-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -1440px }
	[anim="male-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -1440px }
	[anim="male-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -1440px }
	[anim="male-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -1440px }
	[anim="male-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -1440px }
	[anim="male-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -1440px }
	[anim="male-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -1440px }
	[anim="male-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -1440px }


	[anim="male-shopping-1.png"] { width: 40px; height: 40px; background-position:0px -1480px }
	[anim="male-shopping-2.png"] { width: 40px; height: 40px; background-position:-40px -1480px }
	[anim="male-shopping-3.png"] { width: 40px; height: 40px; background-position:-80px -1480px }
	[anim="male-shopping-4.png"] { width: 40px; height: 40px; background-position:-120px -1480px }
	[anim="male-shopping-5.png"] { width: 40px; height: 40px; background-position:-160px -1480px }
	[anim="male-shopping-6.png"] { width: 40px; height: 40px; background-position:-200px -1480px }
	[anim="male-shopping-7.png"] { width: 40px; height: 40px; background-position:-240px -1480px }
	[anim="male-shopping-8.png"] { width: 40px; height: 40px; background-position:-280px -1480px }
	[anim="male-shopping-9.png"] { width: 40px; height: 40px; background-position:-320px -1480px }
	[anim="male-shopping-10.png"] { width: 40px; height: 40px; background-position:-360px -1480px }
	[anim="male-shopping-11.png"] { width: 40px; height: 40px; background-position:-400px -1480px }


	[anim="male-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -1520px }
	[anim="male-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -1520px }
	[anim="male-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -1520px }
	[anim="male-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -1520px }
	[anim="male-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -1520px }
	[anim="male-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -1520px }
	[anim="male-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -1520px }
	[anim="male-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -1520px }
	[anim="male-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -1520px }
	[anim="male-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -1520px }
	[anim="male-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -1520px }


	[anim="male-sleeping-1.png"] { width: 40px; height: 40px; background-position:0px -1560px }
	[anim="male-sleeping-2.png"] { width: 40px; height: 40px; background-position:-40px -1560px }
	[anim="male-sleeping-3.png"] { width: 40px; height: 40px; background-position:-80px -1560px }
	[anim="male-sleeping-4.png"] { width: 40px; height: 40px; background-position:-120px -1560px }
	[anim="male-sleeping-5.png"] { width: 40px; height: 40px; background-position:-160px -1560px }
	[anim="male-sleeping-6.png"] { width: 40px; height: 40px; background-position:-200px -1560px }
	[anim="male-sleeping-7.png"] { width: 40px; height: 40px; background-position:-240px -1560px }
	[anim="male-sleeping-8.png"] { width: 40px; height: 40px; background-position:-280px -1560px }
	[anim="male-sleeping-9.png"] { width: 40px; height: 40px; background-position:-320px -1560px }
	[anim="male-sleeping-10.png"] { width: 40px; height: 40px; background-position:-360px -1560px }
	[anim="male-sleeping-11.png"] { width: 40px; height: 40px; background-position:-400px -1560px }


	[anim="male-social-1.png"] { width: 40px; height: 40px; background-position:0px -1600px }
	[anim="male-social-2.png"] { width: 40px; height: 40px; background-position:-40px -1600px }
	[anim="male-social-3.png"] { width: 40px; height: 40px; background-position:-80px -1600px }
	[anim="male-social-4.png"] { width: 40px; height: 40px; background-position:-120px -1600px }
	[anim="male-social-5.png"] { width: 40px; height: 40px; background-position:-160px -1600px }
	[anim="male-social-6.png"] { width: 40px; height: 40px; background-position:-200px -1600px }
	[anim="male-social-7.png"] { width: 40px; height: 40px; background-position:-240px -1600px }
	[anim="male-social-8.png"] { width: 40px; height: 40px; background-position:-280px -1600px }
	[anim="male-social-9.png"] { width: 40px; height: 40px; background-position:-320px -1600px }
	[anim="male-social-10.png"] { width: 40px; height: 40px; background-position:-360px -1600px }
	[anim="male-social-11.png"] { width: 40px; height: 40px; background-position:-400px -1600px }


	[anim="male-sports-1.png"] { width: 40px; height: 40px; background-position:0px -1640px }
	[anim="male-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -1640px }
	[anim="male-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -1640px }
	[anim="male-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -1640px }
	[anim="male-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -1640px }
	[anim="male-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -1640px }
	[anim="male-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -1640px }
	[anim="male-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -1640px }
	[anim="male-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -1640px }
	[anim="male-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -1640px }
	[anim="male-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -1640px }


	[anim="male-standing-1.png"] { width: 40px; height: 40px; background-position:0px -1680px }
	[anim="male-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -1680px }
	[anim="male-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -1680px }
	[anim="male-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -1680px }
	[anim="male-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -1680px }
	[anim="male-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -1680px }
	[anim="male-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -1680px }
	[anim="male-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -1680px }
	[anim="male-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -1680px }
	[anim="male-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -1680px }
	[anim="male-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -1680px }


	[anim="male-talking-1.png"] { width: 40px; height: 40px; background-position:0px -1720px }
	[anim="male-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -1720px }
	[anim="male-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -1720px }
	[anim="male-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -1720px }
	[anim="male-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -1720px }
	[anim="male-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -1720px }
	[anim="male-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -1720px }
	[anim="male-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -1720px }
	[anim="male-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -1720px }
	[anim="male-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -1720px }
	[anim="male-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -1720px }


	[anim="male-walking-1.png"] { width: 40px; height: 40px; background-position:0px -1760px }
	[anim="male-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -1760px }
	[anim="male-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -1760px }
	[anim="male-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -1760px }
	[anim="male-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -1760px }
	[anim="male-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -1760px }
	[anim="male-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -1760px }
	[anim="male-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -1760px }
	[anim="male-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -1760px }
	[anim="male-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -1760px }
	[anim="male-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -1760px }


	[anim="male-workingdesk-1.png"] { width: 40px; height: 40px; background-position:0px -1800px }
	[anim="male-workingdesk-2.png"] { width: 40px; height: 40px; background-position:-40px -1800px }
	[anim="male-workingdesk-3.png"] { width: 40px; height: 40px; background-position:-80px -1800px }
	[anim="male-workingdesk-4.png"] { width: 40px; height: 40px; background-position:-120px -1800px }
	[anim="male-workingdesk-5.png"] { width: 40px; height: 40px; background-position:-160px -1800px }
	[anim="male-workingdesk-6.png"] { width: 40px; height: 40px; background-position:-200px -1800px }
	[anim="male-workingdesk-7.png"] { width: 40px; height: 40px; background-position:-240px -1800px }
	[anim="male-workingdesk-8.png"] { width: 40px; height: 40px; background-position:-280px -1800px }
	[anim="male-workingdesk-9.png"] { width: 40px; height: 40px; background-position:-320px -1800px }
	[anim="male-workingdesk-10.png"] { width: 40px; height: 40px; background-position:-360px -1800px }
	[anim="male-workingdesk-11.png"] { width: 40px; height: 40px; background-position:-400px -1800px }


	[anim="male-workinglabor-1.png"] { width: 40px; height: 40px; background-position:0px -1840px }
	[anim="male-workinglabor-2.png"] { width: 40px; height: 40px; background-position:-40px -1840px }
	[anim="male-workinglabor-3.png"] { width: 40px; height: 40px; background-position:-80px -1840px }
	[anim="male-workinglabor-4.png"] { width: 40px; height: 40px; background-position:-120px -1840px }
	[anim="male-workinglabor-5.png"] { width: 40px; height: 40px; background-position:-160px -1840px }
	[anim="male-workinglabor-6.png"] { width: 40px; height: 40px; background-position:-200px -1840px }
	[anim="male-workinglabor-7.png"] { width: 40px; height: 40px; background-position:-240px -1840px }
	[anim="male-workinglabor-8.png"] { width: 40px; height: 40px; background-position:-280px -1840px }
	[anim="male-workinglabor-9.png"] { width: 40px; height: 40px; background-position:-320px -1840px }
	[anim="male-workinglabor-10.png"] { width: 40px; height: 40px; background-position:-360px -1840px }
	[anim="male-workinglabor-11.png"] { width: 40px; height: 40px; background-position:-400px -1840px }
	

	[anim2] { background-image: url(/assets/happydays/sprite-master-nonalone2.png); background-size: 440px 1880px }

	[anim2="child-eating-1.png"] { width: 40px; height: 40px; background-position:0px 0px }
	[anim2="child-eating-2.png"] { width: 40px; height: 40px; background-position:-40px 0px }
	[anim2="child-eating-3.png"] { width: 40px; height: 40px; background-position:-80px 0px }
	[anim2="child-eating-4.png"] { width: 40px; height: 40px; background-position:-120px 0px }
	[anim2="child-eating-5.png"] { width: 40px; height: 40px; background-position:-160px 0px }
	[anim2="child-eating-6.png"] { width: 40px; height: 40px; background-position:-200px 0px }
	[anim2="child-eating-7.png"] { width: 40px; height: 40px; background-position:-240px 0px }
	[anim2="child-eating-8.png"] { width: 40px; height: 40px; background-position:-280px 0px }
	[anim2="child-eating-9.png"] { width: 40px; height: 40px; background-position:-320px 0px }
	[anim2="child-eating-10.png"] { width: 40px; height: 40px; background-position:-360px 0px }
	[anim2="child-eating-11.png"] { width: 40px; height: 40px; background-position:-400px 0px }


	[anim2="child-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -40px }
	[anim2="child-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -40px }
	[anim2="child-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -40px }
	[anim2="child-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -40px }
	[anim2="child-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -40px }
	[anim2="child-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -40px }
	[anim2="child-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -40px }
	[anim2="child-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -40px }
	[anim2="child-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -40px }
	[anim2="child-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -40px }
	[anim2="child-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -40px }


	[anim2="child-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -80px }
	[anim2="child-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -80px }
	[anim2="child-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -80px }
	[anim2="child-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -80px }
	[anim2="child-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -80px }
	[anim2="child-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -80px }
	[anim2="child-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -80px }
	[anim2="child-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -80px }
	[anim2="child-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -80px }
	[anim2="child-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -80px }
	[anim2="child-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -80px }


	[anim2="child-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -120px }
	[anim2="child-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -120px }
	[anim2="child-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -120px }
	[anim2="child-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -120px }
	[anim2="child-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -120px }
	[anim2="child-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -120px }
	[anim2="child-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -120px }
	[anim2="child-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -120px }
	[anim2="child-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -120px }
	[anim2="child-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -120px }
	[anim2="child-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -120px }


	[anim2="child-social-1.png"] { width: 40px; height: 40px; background-position:0px -160px }
	[anim2="child-social-2.png"] { width: 40px; height: 40px; background-position:-40px -160px }
	[anim2="child-social-3.png"] { width: 40px; height: 40px; background-position:-80px -160px }
	[anim2="child-social-4.png"] { width: 40px; height: 40px; background-position:-120px -160px }
	[anim2="child-social-5.png"] { width: 40px; height: 40px; background-position:-160px -160px }
	[anim2="child-social-6.png"] { width: 40px; height: 40px; background-position:-200px -160px }
	[anim2="child-social-7.png"] { width: 40px; height: 40px; background-position:-240px -160px }
	[anim2="child-social-8.png"] { width: 40px; height: 40px; background-position:-280px -160px }
	[anim2="child-social-9.png"] { width: 40px; height: 40px; background-position:-320px -160px }
	[anim2="child-social-10.png"] { width: 40px; height: 40px; background-position:-360px -160px }
	[anim2="child-social-11.png"] { width: 40px; height: 40px; background-position:-400px -160px }


	[anim2="child-sports-1.png"] { width: 40px; height: 40px; background-position:0px -200px }
	[anim2="child-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -200px }
	[anim2="child-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -200px }
	[anim2="child-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -200px }
	[anim2="child-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -200px }
	[anim2="child-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -200px }
	[anim2="child-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -200px }
	[anim2="child-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -200px }
	[anim2="child-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -200px }
	[anim2="child-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -200px }
	[anim2="child-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -200px }


	[anim2="child-standing-1.png"] { width: 40px; height: 40px; background-position:0px -240px }
	[anim2="child-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -240px }
	[anim2="child-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -240px }
	[anim2="child-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -240px }
	[anim2="child-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -240px }
	[anim2="child-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -240px }
	[anim2="child-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -240px }
	[anim2="child-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -240px }
	[anim2="child-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -240px }
	[anim2="child-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -240px }
	[anim2="child-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -240px }


	[anim2="child-talking-1.png"] { width: 40px; height: 40px; background-position:0px -280px }
	[anim2="child-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -280px }
	[anim2="child-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -280px }
	[anim2="child-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -280px }
	[anim2="child-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -280px }
	[anim2="child-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -280px }
	[anim2="child-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -280px }
	[anim2="child-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -280px }
	[anim2="child-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -280px }
	[anim2="child-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -280px }
	[anim2="child-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -280px }


	[anim2="child-walking-1.png"] { width: 40px; height: 40px; background-position:0px -320px }
	[anim2="child-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -320px }
	[anim2="child-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -320px }
	[anim2="child-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -320px }
	[anim2="child-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -320px }
	[anim2="child-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -320px }
	[anim2="child-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -320px }
	[anim2="child-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -320px }
	[anim2="child-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -320px }
	[anim2="child-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -320px }
	[anim2="child-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -320px }


	[anim2="female-careadult-1.png"] { width: 40px; height: 40px; background-position:0px -360px }
	[anim2="female-careadult-2.png"] { width: 40px; height: 40px; background-position:-40px -360px }
	[anim2="female-careadult-3.png"] { width: 40px; height: 40px; background-position:-80px -360px }
	[anim2="female-careadult-4.png"] { width: 40px; height: 40px; background-position:-120px -360px }
	[anim2="female-careadult-5.png"] { width: 40px; height: 40px; background-position:-160px -360px }
	[anim2="female-careadult-6.png"] { width: 40px; height: 40px; background-position:-200px -360px }
	[anim2="female-careadult-7.png"] { width: 40px; height: 40px; background-position:-240px -360px }
	[anim2="female-careadult-8.png"] { width: 40px; height: 40px; background-position:-280px -360px }
	[anim2="female-careadult-9.png"] { width: 40px; height: 40px; background-position:-320px -360px }
	[anim2="female-careadult-10.png"] { width: 40px; height: 40px; background-position:-360px -360px }
	[anim2="female-careadult-11.png"] { width: 40px; height: 40px; background-position:-400px -360px }


	[anim2="female-carekids-1.png"] { width: 40px; height: 40px; background-position:0px -400px }
	[anim2="female-carekids-2.png"] { width: 40px; height: 40px; background-position:-40px -400px }
	[anim2="female-carekids-3.png"] { width: 40px; height: 40px; background-position:-80px -400px }
	[anim2="female-carekids-4.png"] { width: 40px; height: 40px; background-position:-120px -400px }
	[anim2="female-carekids-5.png"] { width: 40px; height: 40px; background-position:-160px -400px }
	[anim2="female-carekids-6.png"] { width: 40px; height: 40px; background-position:-200px -400px }
	[anim2="female-carekids-7.png"] { width: 40px; height: 40px; background-position:-240px -400px }
	[anim2="female-carekids-8.png"] { width: 40px; height: 40px; background-position:-280px -400px }
	[anim2="female-carekids-9.png"] { width: 40px; height: 40px; background-position:-320px -400px }
	[anim2="female-carekids-10.png"] { width: 40px; height: 40px; background-position:-360px -400px }
	[anim2="female-carekids-11.png"] { width: 40px; height: 40px; background-position:-400px -400px }


	[anim2="female-eating-1.png"] { width: 40px; height: 40px; background-position:0px -440px }
	[anim2="female-eating-2.png"] { width: 40px; height: 40px; background-position:-40px -440px }
	[anim2="female-eating-3.png"] { width: 40px; height: 40px; background-position:-80px -440px }
	[anim2="female-eating-4.png"] { width: 40px; height: 40px; background-position:-120px -440px }
	[anim2="female-eating-5.png"] { width: 40px; height: 40px; background-position:-160px -440px }
	[anim2="female-eating-6.png"] { width: 40px; height: 40px; background-position:-200px -440px }
	[anim2="female-eating-7.png"] { width: 40px; height: 40px; background-position:-240px -440px }
	[anim2="female-eating-8.png"] { width: 40px; height: 40px; background-position:-280px -440px }
	[anim2="female-eating-9.png"] { width: 40px; height: 40px; background-position:-320px -440px }
	[anim2="female-eating-10.png"] { width: 40px; height: 40px; background-position:-360px -440px }
	[anim2="female-eating-11.png"] { width: 40px; height: 40px; background-position:-400px -440px }


	[anim2="female-foodprep-1.png"] { width: 40px; height: 40px; background-position:0px -480px }
	[anim2="female-foodprep-2.png"] { width: 40px; height: 40px; background-position:-40px -480px }
	[anim2="female-foodprep-3.png"] { width: 40px; height: 40px; background-position:-80px -480px }
	[anim2="female-foodprep-4.png"] { width: 40px; height: 40px; background-position:-120px -480px }
	[anim2="female-foodprep-5.png"] { width: 40px; height: 40px; background-position:-160px -480px }
	[anim2="female-foodprep-6.png"] { width: 40px; height: 40px; background-position:-200px -480px }
	[anim2="female-foodprep-7.png"] { width: 40px; height: 40px; background-position:-240px -480px }
	[anim2="female-foodprep-8.png"] { width: 40px; height: 40px; background-position:-280px -480px }
	[anim2="female-foodprep-9.png"] { width: 40px; height: 40px; background-position:-320px -480px }
	[anim2="female-foodprep-10.png"] { width: 40px; height: 40px; background-position:-360px -480px }
	[anim2="female-foodprep-11.png"] { width: 40px; height: 40px; background-position:-400px -480px }


	[anim2="female-household-1.png"] { width: 40px; height: 40px; background-position:0px -520px }
	[anim2="female-household-2.png"] { width: 40px; height: 40px; background-position:-40px -520px }
	[anim2="female-household-3.png"] { width: 40px; height: 40px; background-position:-80px -520px }
	[anim2="female-household-4.png"] { width: 40px; height: 40px; background-position:-120px -520px }
	[anim2="female-household-5.png"] { width: 40px; height: 40px; background-position:-160px -520px }
	[anim2="female-household-6.png"] { width: 40px; height: 40px; background-position:-200px -520px }
	[anim2="female-household-7.png"] { width: 40px; height: 40px; background-position:-240px -520px }
	[anim2="female-household-8.png"] { width: 40px; height: 40px; background-position:-280px -520px }
	[anim2="female-household-9.png"] { width: 40px; height: 40px; background-position:-320px -520px }
	[anim2="female-household-10.png"] { width: 40px; height: 40px; background-position:-360px -520px }
	[anim2="female-household-11.png"] { width: 40px; height: 40px; background-position:-400px -520px }


	[anim2="female-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -560px }
	[anim2="female-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -560px }
	[anim2="female-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -560px }
	[anim2="female-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -560px }
	[anim2="female-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -560px }
	[anim2="female-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -560px }
	[anim2="female-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -560px }
	[anim2="female-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -560px }
	[anim2="female-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -560px }
	[anim2="female-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -560px }
	[anim2="female-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -560px }


	[anim2="female-pets-1.png"] { width: 40px; height: 40px; background-position:0px -600px }
	[anim2="female-pets-2.png"] { width: 40px; height: 40px; background-position:-40px -600px }
	[anim2="female-pets-3.png"] { width: 40px; height: 40px; background-position:-80px -600px }
	[anim2="female-pets-4.png"] { width: 40px; height: 40px; background-position:-120px -600px }
	[anim2="female-pets-5.png"] { width: 40px; height: 40px; background-position:-160px -600px }
	[anim2="female-pets-6.png"] { width: 40px; height: 40px; background-position:-200px -600px }
	[anim2="female-pets-7.png"] { width: 40px; height: 40px; background-position:-240px -600px }
	[anim2="female-pets-8.png"] { width: 40px; height: 40px; background-position:-280px -600px }
	[anim2="female-pets-9.png"] { width: 40px; height: 40px; background-position:-320px -600px }
	[anim2="female-pets-10.png"] { width: 40px; height: 40px; background-position:-360px -600px }
	[anim2="female-pets-11.png"] { width: 40px; height: 40px; background-position:-400px -600px }


	[anim2="female-phone-1.png"] { width: 40px; height: 40px; background-position:0px -640px }
	[anim2="female-phone-2.png"] { width: 40px; height: 40px; background-position:-40px -640px }
	[anim2="female-phone-3.png"] { width: 40px; height: 40px; background-position:-80px -640px }
	[anim2="female-phone-4.png"] { width: 40px; height: 40px; background-position:-120px -640px }
	[anim2="female-phone-5.png"] { width: 40px; height: 40px; background-position:-160px -640px }
	[anim2="female-phone-6.png"] { width: 40px; height: 40px; background-position:-200px -640px }
	[anim2="female-phone-7.png"] { width: 40px; height: 40px; background-position:-240px -640px }
	[anim2="female-phone-8.png"] { width: 40px; height: 40px; background-position:-280px -640px }
	[anim2="female-phone-9.png"] { width: 40px; height: 40px; background-position:-320px -640px }
	[anim2="female-phone-10.png"] { width: 40px; height: 40px; background-position:-360px -640px }
	[anim2="female-phone-11.png"] { width: 40px; height: 40px; background-position:-400px -640px }


	[anim2="female-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -680px }
	[anim2="female-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -680px }
	[anim2="female-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -680px }
	[anim2="female-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -680px }
	[anim2="female-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -680px }
	[anim2="female-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -680px }
	[anim2="female-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -680px }
	[anim2="female-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -680px }
	[anim2="female-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -680px }
	[anim2="female-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -680px }
	[anim2="female-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -680px }


	[anim2="female-shopping-1.png"] { width: 40px; height: 40px; background-position:0px -720px }
	[anim2="female-shopping-2.png"] { width: 40px; height: 40px; background-position:-40px -720px }
	[anim2="female-shopping-3.png"] { width: 40px; height: 40px; background-position:-80px -720px }
	[anim2="female-shopping-4.png"] { width: 40px; height: 40px; background-position:-120px -720px }
	[anim2="female-shopping-5.png"] { width: 40px; height: 40px; background-position:-160px -720px }
	[anim2="female-shopping-6.png"] { width: 40px; height: 40px; background-position:-200px -720px }
	[anim2="female-shopping-7.png"] { width: 40px; height: 40px; background-position:-240px -720px }
	[anim2="female-shopping-8.png"] { width: 40px; height: 40px; background-position:-280px -720px }
	[anim2="female-shopping-9.png"] { width: 40px; height: 40px; background-position:-320px -720px }
	[anim2="female-shopping-10.png"] { width: 40px; height: 40px; background-position:-360px -720px }
	[anim2="female-shopping-11.png"] { width: 40px; height: 40px; background-position:-400px -720px }


	[anim2="female-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -760px }
	[anim2="female-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -760px }
	[anim2="female-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -760px }
	[anim2="female-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -760px }
	[anim2="female-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -760px }
	[anim2="female-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -760px }
	[anim2="female-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -760px }
	[anim2="female-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -760px }
	[anim2="female-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -760px }
	[anim2="female-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -760px }
	[anim2="female-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -760px }


	[anim2="female-sleeping-1.png"] { width: 40px; height: 40px; background-position:0px -800px }
	[anim2="female-sleeping-2.png"] { width: 40px; height: 40px; background-position:-40px -800px }
	[anim2="female-sleeping-3.png"] { width: 40px; height: 40px; background-position:-80px -800px }
	[anim2="female-sleeping-4.png"] { width: 40px; height: 40px; background-position:-120px -800px }
	[anim2="female-sleeping-5.png"] { width: 40px; height: 40px; background-position:-160px -800px }
	[anim2="female-sleeping-6.png"] { width: 40px; height: 40px; background-position:-200px -800px }
	[anim2="female-sleeping-7.png"] { width: 40px; height: 40px; background-position:-240px -800px }
	[anim2="female-sleeping-8.png"] { width: 40px; height: 40px; background-position:-280px -800px }
	[anim2="female-sleeping-9.png"] { width: 40px; height: 40px; background-position:-320px -800px }
	[anim2="female-sleeping-10.png"] { width: 40px; height: 40px; background-position:-360px -800px }
	[anim2="female-sleeping-11.png"] { width: 40px; height: 40px; background-position:-400px -800px }


	[anim2="female-social-1.png"] { width: 40px; height: 40px; background-position:0px -840px }
	[anim2="female-social-2.png"] { width: 40px; height: 40px; background-position:-40px -840px }
	[anim2="female-social-3.png"] { width: 40px; height: 40px; background-position:-80px -840px }
	[anim2="female-social-4.png"] { width: 40px; height: 40px; background-position:-120px -840px }
	[anim2="female-social-5.png"] { width: 40px; height: 40px; background-position:-160px -840px }
	[anim2="female-social-6.png"] { width: 40px; height: 40px; background-position:-200px -840px }
	[anim2="female-social-7.png"] { width: 40px; height: 40px; background-position:-240px -840px }
	[anim2="female-social-8.png"] { width: 40px; height: 40px; background-position:-280px -840px }
	[anim2="female-social-9.png"] { width: 40px; height: 40px; background-position:-320px -840px }
	[anim2="female-social-10.png"] { width: 40px; height: 40px; background-position:-360px -840px }
	[anim2="female-social-11.png"] { width: 40px; height: 40px; background-position:-400px -840px }


	[anim2="female-sports-1.png"] { width: 40px; height: 40px; background-position:0px -880px }
	[anim2="female-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -880px }
	[anim2="female-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -880px }
	[anim2="female-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -880px }
	[anim2="female-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -880px }
	[anim2="female-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -880px }
	[anim2="female-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -880px }
	[anim2="female-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -880px }
	[anim2="female-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -880px }
	[anim2="female-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -880px }
	[anim2="female-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -880px }


	[anim2="female-standing-1.png"] { width: 40px; height: 40px; background-position:0px -920px }
	[anim2="female-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -920px }
	[anim2="female-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -920px }
	[anim2="female-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -920px }
	[anim2="female-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -920px }
	[anim2="female-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -920px }
	[anim2="female-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -920px }
	[anim2="female-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -920px }
	[anim2="female-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -920px }
	[anim2="female-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -920px }
	[anim2="female-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -920px }


	[anim2="female-talking-1.png"] { width: 40px; height: 40px; background-position:0px -960px }
	[anim2="female-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -960px }
	[anim2="female-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -960px }
	[anim2="female-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -960px }
	[anim2="female-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -960px }
	[anim2="female-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -960px }
	[anim2="female-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -960px }
	[anim2="female-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -960px }
	[anim2="female-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -960px }
	[anim2="female-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -960px }
	[anim2="female-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -960px }


	[anim2="female-walking-1.png"] { width: 40px; height: 40px; background-position:0px -1000px }
	[anim2="female-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -1000px }
	[anim2="female-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -1000px }
	[anim2="female-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -1000px }
	[anim2="female-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -1000px }
	[anim2="female-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -1000px }
	[anim2="female-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -1000px }
	[anim2="female-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -1000px }
	[anim2="female-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -1000px }
	[anim2="female-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -1000px }
	[anim2="female-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -1000px }


	[anim2="female-workingdesk-1.png"] { width: 40px; height: 40px; background-position:0px -1040px }
	[anim2="female-workingdesk-2.png"] { width: 40px; height: 40px; background-position:-40px -1040px }
	[anim2="female-workingdesk-3.png"] { width: 40px; height: 40px; background-position:-80px -1040px }
	[anim2="female-workingdesk-4.png"] { width: 40px; height: 40px; background-position:-120px -1040px }
	[anim2="female-workingdesk-5.png"] { width: 40px; height: 40px; background-position:-160px -1040px }
	[anim2="female-workingdesk-6.png"] { width: 40px; height: 40px; background-position:-200px -1040px }
	[anim2="female-workingdesk-7.png"] { width: 40px; height: 40px; background-position:-240px -1040px }
	[anim2="female-workingdesk-8.png"] { width: 40px; height: 40px; background-position:-280px -1040px }
	[anim2="female-workingdesk-9.png"] { width: 40px; height: 40px; background-position:-320px -1040px }
	[anim2="female-workingdesk-10.png"] { width: 40px; height: 40px; background-position:-360px -1040px }
	[anim2="female-workingdesk-11.png"] { width: 40px; height: 40px; background-position:-400px -1040px }


	[anim2="female-workinglabor-1.png"] { width: 40px; height: 40px; background-position:0px -1080px }
	[anim2="female-workinglabor-2.png"] { width: 40px; height: 40px; background-position:-40px -1080px }
	[anim2="female-workinglabor-3.png"] { width: 40px; height: 40px; background-position:-80px -1080px }
	[anim2="female-workinglabor-4.png"] { width: 40px; height: 40px; background-position:-120px -1080px }
	[anim2="female-workinglabor-5.png"] { width: 40px; height: 40px; background-position:-160px -1080px }
	[anim2="female-workinglabor-6.png"] { width: 40px; height: 40px; background-position:-200px -1080px }
	[anim2="female-workinglabor-7.png"] { width: 40px; height: 40px; background-position:-240px -1080px }
	[anim2="female-workinglabor-8.png"] { width: 40px; height: 40px; background-position:-280px -1080px }
	[anim2="female-workinglabor-9.png"] { width: 40px; height: 40px; background-position:-320px -1080px }
	[anim2="female-workinglabor-10.png"] { width: 40px; height: 40px; background-position:-360px -1080px }
	[anim2="female-workinglabor-11.png"] { width: 40px; height: 40px; background-position:-400px -1080px }


	[anim2="male-careadult-1.png"] { width: 40px; height: 40px; background-position:0px -1120px }
	[anim2="male-careadult-2.png"] { width: 40px; height: 40px; background-position:-40px -1120px }
	[anim2="male-careadult-3.png"] { width: 40px; height: 40px; background-position:-80px -1120px }
	[anim2="male-careadult-4.png"] { width: 40px; height: 40px; background-position:-120px -1120px }
	[anim2="male-careadult-5.png"] { width: 40px; height: 40px; background-position:-160px -1120px }
	[anim2="male-careadult-6.png"] { width: 40px; height: 40px; background-position:-200px -1120px }
	[anim2="male-careadult-7.png"] { width: 40px; height: 40px; background-position:-240px -1120px }
	[anim2="male-careadult-8.png"] { width: 40px; height: 40px; background-position:-280px -1120px }
	[anim2="male-careadult-9.png"] { width: 40px; height: 40px; background-position:-320px -1120px }
	[anim2="male-careadult-10.png"] { width: 40px; height: 40px; background-position:-360px -1120px }
	[anim2="male-careadult-11.png"] { width: 40px; height: 40px; background-position:-400px -1120px }


	[anim2="male-carekids-1.png"] { width: 40px; height: 40px; background-position:0px -1160px }
	[anim2="male-carekids-2.png"] { width: 40px; height: 40px; background-position:-40px -1160px }
	[anim2="male-carekids-3.png"] { width: 40px; height: 40px; background-position:-80px -1160px }
	[anim2="male-carekids-4.png"] { width: 40px; height: 40px; background-position:-120px -1160px }
	[anim2="male-carekids-5.png"] { width: 40px; height: 40px; background-position:-160px -1160px }
	[anim2="male-carekids-6.png"] { width: 40px; height: 40px; background-position:-200px -1160px }
	[anim2="male-carekids-7.png"] { width: 40px; height: 40px; background-position:-240px -1160px }
	[anim2="male-carekids-8.png"] { width: 40px; height: 40px; background-position:-280px -1160px }
	[anim2="male-carekids-9.png"] { width: 40px; height: 40px; background-position:-320px -1160px }
	[anim2="male-carekids-10.png"] { width: 40px; height: 40px; background-position:-360px -1160px }
	[anim2="male-carekids-11.png"] { width: 40px; height: 40px; background-position:-400px -1160px }


	[anim2="male-eating-1.png"] { width: 40px; height: 40px; background-position:0px -1200px }
	[anim2="male-eating-2.png"] { width: 40px; height: 40px; background-position:-40px -1200px }
	[anim2="male-eating-3.png"] { width: 40px; height: 40px; background-position:-80px -1200px }
	[anim2="male-eating-4.png"] { width: 40px; height: 40px; background-position:-120px -1200px }
	[anim2="male-eating-5.png"] { width: 40px; height: 40px; background-position:-160px -1200px }
	[anim2="male-eating-6.png"] { width: 40px; height: 40px; background-position:-200px -1200px }
	[anim2="male-eating-7.png"] { width: 40px; height: 40px; background-position:-240px -1200px }
	[anim2="male-eating-8.png"] { width: 40px; height: 40px; background-position:-280px -1200px }
	[anim2="male-eating-9.png"] { width: 40px; height: 40px; background-position:-320px -1200px }
	[anim2="male-eating-10.png"] { width: 40px; height: 40px; background-position:-360px -1200px }
	[anim2="male-eating-11.png"] { width: 40px; height: 40px; background-position:-400px -1200px }


	[anim2="male-foodprep-1.png"] { width: 40px; height: 40px; background-position:0px -1240px }
	[anim2="male-foodprep-2.png"] { width: 40px; height: 40px; background-position:-40px -1240px }
	[anim2="male-foodprep-3.png"] { width: 40px; height: 40px; background-position:-80px -1240px }
	[anim2="male-foodprep-4.png"] { width: 40px; height: 40px; background-position:-120px -1240px }
	[anim2="male-foodprep-5.png"] { width: 40px; height: 40px; background-position:-160px -1240px }
	[anim2="male-foodprep-6.png"] { width: 40px; height: 40px; background-position:-200px -1240px }
	[anim2="male-foodprep-7.png"] { width: 40px; height: 40px; background-position:-240px -1240px }
	[anim2="male-foodprep-8.png"] { width: 40px; height: 40px; background-position:-280px -1240px }
	[anim2="male-foodprep-9.png"] { width: 40px; height: 40px; background-position:-320px -1240px }
	[anim2="male-foodprep-10.png"] { width: 40px; height: 40px; background-position:-360px -1240px }
	[anim2="male-foodprep-11.png"] { width: 40px; height: 40px; background-position:-400px -1240px }


	[anim2="male-household-1.png"] { width: 40px; height: 40px; background-position:0px -1280px }
	[anim2="male-household-2.png"] { width: 40px; height: 40px; background-position:-40px -1280px }
	[anim2="male-household-3.png"] { width: 40px; height: 40px; background-position:-80px -1280px }
	[anim2="male-household-4.png"] { width: 40px; height: 40px; background-position:-120px -1280px }
	[anim2="male-household-5.png"] { width: 40px; height: 40px; background-position:-160px -1280px }
	[anim2="male-household-6.png"] { width: 40px; height: 40px; background-position:-200px -1280px }
	[anim2="male-household-7.png"] { width: 40px; height: 40px; background-position:-240px -1280px }
	[anim2="male-household-8.png"] { width: 40px; height: 40px; background-position:-280px -1280px }
	[anim2="male-household-9.png"] { width: 40px; height: 40px; background-position:-320px -1280px }
	[anim2="male-household-10.png"] { width: 40px; height: 40px; background-position:-360px -1280px }
	[anim2="male-household-11.png"] { width: 40px; height: 40px; background-position:-400px -1280px }


	[anim2="male-leisure-1.png"] { width: 40px; height: 40px; background-position:0px -1320px }
	[anim2="male-leisure-2.png"] { width: 40px; height: 40px; background-position:-40px -1320px }
	[anim2="male-leisure-3.png"] { width: 40px; height: 40px; background-position:-80px -1320px }
	[anim2="male-leisure-4.png"] { width: 40px; height: 40px; background-position:-120px -1320px }
	[anim2="male-leisure-5.png"] { width: 40px; height: 40px; background-position:-160px -1320px }
	[anim2="male-leisure-6.png"] { width: 40px; height: 40px; background-position:-200px -1320px }
	[anim2="male-leisure-7.png"] { width: 40px; height: 40px; background-position:-240px -1320px }
	[anim2="male-leisure-8.png"] { width: 40px; height: 40px; background-position:-280px -1320px }
	[anim2="male-leisure-9.png"] { width: 40px; height: 40px; background-position:-320px -1320px }
	[anim2="male-leisure-10.png"] { width: 40px; height: 40px; background-position:-360px -1320px }
	[anim2="male-leisure-11.png"] { width: 40px; height: 40px; background-position:-400px -1320px }


	[anim2="male-pets-1.png"] { width: 40px; height: 40px; background-position:0px -1360px }
	[anim2="male-pets-2.png"] { width: 40px; height: 40px; background-position:-40px -1360px }
	[anim2="male-pets-3.png"] { width: 40px; height: 40px; background-position:-80px -1360px }
	[anim2="male-pets-4.png"] { width: 40px; height: 40px; background-position:-120px -1360px }
	[anim2="male-pets-5.png"] { width: 40px; height: 40px; background-position:-160px -1360px }
	[anim2="male-pets-6.png"] { width: 40px; height: 40px; background-position:-200px -1360px }
	[anim2="male-pets-7.png"] { width: 40px; height: 40px; background-position:-240px -1360px }
	[anim2="male-pets-8.png"] { width: 40px; height: 40px; background-position:-280px -1360px }
	[anim2="male-pets-9.png"] { width: 40px; height: 40px; background-position:-320px -1360px }
	[anim2="male-pets-10.png"] { width: 40px; height: 40px; background-position:-360px -1360px }
	[anim2="male-pets-11.png"] { width: 40px; height: 40px; background-position:-400px -1360px }


	[anim2="male-phone-1.png"] { width: 40px; height: 40px; background-position:0px -1400px }
	[anim2="male-phone-2.png"] { width: 40px; height: 40px; background-position:-40px -1400px }
	[anim2="male-phone-3.png"] { width: 40px; height: 40px; background-position:-80px -1400px }
	[anim2="male-phone-4.png"] { width: 40px; height: 40px; background-position:-120px -1400px }
	[anim2="male-phone-5.png"] { width: 40px; height: 40px; background-position:-160px -1400px }
	[anim2="male-phone-6.png"] { width: 40px; height: 40px; background-position:-200px -1400px }
	[anim2="male-phone-7.png"] { width: 40px; height: 40px; background-position:-240px -1400px }
	[anim2="male-phone-8.png"] { width: 40px; height: 40px; background-position:-280px -1400px }
	[anim2="male-phone-9.png"] { width: 40px; height: 40px; background-position:-320px -1400px }
	[anim2="male-phone-10.png"] { width: 40px; height: 40px; background-position:-360px -1400px }
	[anim2="male-phone-11.png"] { width: 40px; height: 40px; background-position:-400px -1400px }


	[anim2="male-selfcare-1.png"] { width: 40px; height: 40px; background-position:0px -1440px }
	[anim2="male-selfcare-2.png"] { width: 40px; height: 40px; background-position:-40px -1440px }
	[anim2="male-selfcare-3.png"] { width: 40px; height: 40px; background-position:-80px -1440px }
	[anim2="male-selfcare-4.png"] { width: 40px; height: 40px; background-position:-120px -1440px }
	[anim2="male-selfcare-5.png"] { width: 40px; height: 40px; background-position:-160px -1440px }
	[anim2="male-selfcare-6.png"] { width: 40px; height: 40px; background-position:-200px -1440px }
	[anim2="male-selfcare-7.png"] { width: 40px; height: 40px; background-position:-240px -1440px }
	[anim2="male-selfcare-8.png"] { width: 40px; height: 40px; background-position:-280px -1440px }
	[anim2="male-selfcare-9.png"] { width: 40px; height: 40px; background-position:-320px -1440px }
	[anim2="male-selfcare-10.png"] { width: 40px; height: 40px; background-position:-360px -1440px }
	[anim2="male-selfcare-11.png"] { width: 40px; height: 40px; background-position:-400px -1440px }


	[anim2="male-shopping-1.png"] { width: 40px; height: 40px; background-position:0px -1480px }
	[anim2="male-shopping-2.png"] { width: 40px; height: 40px; background-position:-40px -1480px }
	[anim2="male-shopping-3.png"] { width: 40px; height: 40px; background-position:-80px -1480px }
	[anim2="male-shopping-4.png"] { width: 40px; height: 40px; background-position:-120px -1480px }
	[anim2="male-shopping-5.png"] { width: 40px; height: 40px; background-position:-160px -1480px }
	[anim2="male-shopping-6.png"] { width: 40px; height: 40px; background-position:-200px -1480px }
	[anim2="male-shopping-7.png"] { width: 40px; height: 40px; background-position:-240px -1480px }
	[anim2="male-shopping-8.png"] { width: 40px; height: 40px; background-position:-280px -1480px }
	[anim2="male-shopping-9.png"] { width: 40px; height: 40px; background-position:-320px -1480px }
	[anim2="male-shopping-10.png"] { width: 40px; height: 40px; background-position:-360px -1480px }
	[anim2="male-shopping-11.png"] { width: 40px; height: 40px; background-position:-400px -1480px }


	[anim2="male-sitting-1.png"] { width: 40px; height: 40px; background-position:0px -1520px }
	[anim2="male-sitting-2.png"] { width: 40px; height: 40px; background-position:-40px -1520px }
	[anim2="male-sitting-3.png"] { width: 40px; height: 40px; background-position:-80px -1520px }
	[anim2="male-sitting-4.png"] { width: 40px; height: 40px; background-position:-120px -1520px }
	[anim2="male-sitting-5.png"] { width: 40px; height: 40px; background-position:-160px -1520px }
	[anim2="male-sitting-6.png"] { width: 40px; height: 40px; background-position:-200px -1520px }
	[anim2="male-sitting-7.png"] { width: 40px; height: 40px; background-position:-240px -1520px }
	[anim2="male-sitting-8.png"] { width: 40px; height: 40px; background-position:-280px -1520px }
	[anim2="male-sitting-9.png"] { width: 40px; height: 40px; background-position:-320px -1520px }
	[anim2="male-sitting-10.png"] { width: 40px; height: 40px; background-position:-360px -1520px }
	[anim2="male-sitting-11.png"] { width: 40px; height: 40px; background-position:-400px -1520px }


	[anim2="male-sleeping-1.png"] { width: 40px; height: 40px; background-position:0px -1560px }
	[anim2="male-sleeping-2.png"] { width: 40px; height: 40px; background-position:-40px -1560px }
	[anim2="male-sleeping-3.png"] { width: 40px; height: 40px; background-position:-80px -1560px }
	[anim2="male-sleeping-4.png"] { width: 40px; height: 40px; background-position:-120px -1560px }
	[anim2="male-sleeping-5.png"] { width: 40px; height: 40px; background-position:-160px -1560px }
	[anim2="male-sleeping-6.png"] { width: 40px; height: 40px; background-position:-200px -1560px }
	[anim2="male-sleeping-7.png"] { width: 40px; height: 40px; background-position:-240px -1560px }
	[anim2="male-sleeping-8.png"] { width: 40px; height: 40px; background-position:-280px -1560px }
	[anim2="male-sleeping-9.png"] { width: 40px; height: 40px; background-position:-320px -1560px }
	[anim2="male-sleeping-10.png"] { width: 40px; height: 40px; background-position:-360px -1560px }
	[anim2="male-sleeping-11.png"] { width: 40px; height: 40px; background-position:-400px -1560px }


	[anim2="male-social-1.png"] { width: 40px; height: 40px; background-position:0px -1600px }
	[anim2="male-social-2.png"] { width: 40px; height: 40px; background-position:-40px -1600px }
	[anim2="male-social-3.png"] { width: 40px; height: 40px; background-position:-80px -1600px }
	[anim2="male-social-4.png"] { width: 40px; height: 40px; background-position:-120px -1600px }
	[anim2="male-social-5.png"] { width: 40px; height: 40px; background-position:-160px -1600px }
	[anim2="male-social-6.png"] { width: 40px; height: 40px; background-position:-200px -1600px }
	[anim2="male-social-7.png"] { width: 40px; height: 40px; background-position:-240px -1600px }
	[anim2="male-social-8.png"] { width: 40px; height: 40px; background-position:-280px -1600px }
	[anim2="male-social-9.png"] { width: 40px; height: 40px; background-position:-320px -1600px }
	[anim2="male-social-10.png"] { width: 40px; height: 40px; background-position:-360px -1600px }
	[anim2="male-social-11.png"] { width: 40px; height: 40px; background-position:-400px -1600px }


	[anim2="male-sports-1.png"] { width: 40px; height: 40px; background-position:0px -1640px }
	[anim2="male-sports-2.png"] { width: 40px; height: 40px; background-position:-40px -1640px }
	[anim2="male-sports-3.png"] { width: 40px; height: 40px; background-position:-80px -1640px }
	[anim2="male-sports-4.png"] { width: 40px; height: 40px; background-position:-120px -1640px }
	[anim2="male-sports-5.png"] { width: 40px; height: 40px; background-position:-160px -1640px }
	[anim2="male-sports-6.png"] { width: 40px; height: 40px; background-position:-200px -1640px }
	[anim2="male-sports-7.png"] { width: 40px; height: 40px; background-position:-240px -1640px }
	[anim2="male-sports-8.png"] { width: 40px; height: 40px; background-position:-280px -1640px }
	[anim2="male-sports-9.png"] { width: 40px; height: 40px; background-position:-320px -1640px }
	[anim2="male-sports-10.png"] { width: 40px; height: 40px; background-position:-360px -1640px }
	[anim2="male-sports-11.png"] { width: 40px; height: 40px; background-position:-400px -1640px }


	[anim2="male-standing-1.png"] { width: 40px; height: 40px; background-position:0px -1680px }
	[anim2="male-standing-2.png"] { width: 40px; height: 40px; background-position:-40px -1680px }
	[anim2="male-standing-3.png"] { width: 40px; height: 40px; background-position:-80px -1680px }
	[anim2="male-standing-4.png"] { width: 40px; height: 40px; background-position:-120px -1680px }
	[anim2="male-standing-5.png"] { width: 40px; height: 40px; background-position:-160px -1680px }
	[anim2="male-standing-6.png"] { width: 40px; height: 40px; background-position:-200px -1680px }
	[anim2="male-standing-7.png"] { width: 40px; height: 40px; background-position:-240px -1680px }
	[anim2="male-standing-8.png"] { width: 40px; height: 40px; background-position:-280px -1680px }
	[anim2="male-standing-9.png"] { width: 40px; height: 40px; background-position:-320px -1680px }
	[anim2="male-standing-10.png"] { width: 40px; height: 40px; background-position:-360px -1680px }
	[anim2="male-standing-11.png"] { width: 40px; height: 40px; background-position:-400px -1680px }


	[anim2="male-talking-1.png"] { width: 40px; height: 40px; background-position:0px -1720px }
	[anim2="male-talking-2.png"] { width: 40px; height: 40px; background-position:-40px -1720px }
	[anim2="male-talking-3.png"] { width: 40px; height: 40px; background-position:-80px -1720px }
	[anim2="male-talking-4.png"] { width: 40px; height: 40px; background-position:-120px -1720px }
	[anim2="male-talking-5.png"] { width: 40px; height: 40px; background-position:-160px -1720px }
	[anim2="male-talking-6.png"] { width: 40px; height: 40px; background-position:-200px -1720px }
	[anim2="male-talking-7.png"] { width: 40px; height: 40px; background-position:-240px -1720px }
	[anim2="male-talking-8.png"] { width: 40px; height: 40px; background-position:-280px -1720px }
	[anim2="male-talking-9.png"] { width: 40px; height: 40px; background-position:-320px -1720px }
	[anim2="male-talking-10.png"] { width: 40px; height: 40px; background-position:-360px -1720px }
	[anim2="male-talking-11.png"] { width: 40px; height: 40px; background-position:-400px -1720px }


	[anim2="male-walking-1.png"] { width: 40px; height: 40px; background-position:0px -1760px }
	[anim2="male-walking-2.png"] { width: 40px; height: 40px; background-position:-40px -1760px }
	[anim2="male-walking-3.png"] { width: 40px; height: 40px; background-position:-80px -1760px }
	[anim2="male-walking-4.png"] { width: 40px; height: 40px; background-position:-120px -1760px }
	[anim2="male-walking-5.png"] { width: 40px; height: 40px; background-position:-160px -1760px }
	[anim2="male-walking-6.png"] { width: 40px; height: 40px; background-position:-200px -1760px }
	[anim2="male-walking-7.png"] { width: 40px; height: 40px; background-position:-240px -1760px }
	[anim2="male-walking-8.png"] { width: 40px; height: 40px; background-position:-280px -1760px }
	[anim2="male-walking-9.png"] { width: 40px; height: 40px; background-position:-320px -1760px }
	[anim2="male-walking-10.png"] { width: 40px; height: 40px; background-position:-360px -1760px }
	[anim2="male-walking-11.png"] { width: 40px; height: 40px; background-position:-400px -1760px }


	[anim2="male-workingdesk-1.png"] { width: 40px; height: 40px; background-position:0px -1800px }
	[anim2="male-workingdesk-2.png"] { width: 40px; height: 40px; background-position:-40px -1800px }
	[anim2="male-workingdesk-3.png"] { width: 40px; height: 40px; background-position:-80px -1800px }
	[anim2="male-workingdesk-4.png"] { width: 40px; height: 40px; background-position:-120px -1800px }
	[anim2="male-workingdesk-5.png"] { width: 40px; height: 40px; background-position:-160px -1800px }
	[anim2="male-workingdesk-6.png"] { width: 40px; height: 40px; background-position:-200px -1800px }
	[anim2="male-workingdesk-7.png"] { width: 40px; height: 40px; background-position:-240px -1800px }
	[anim2="male-workingdesk-8.png"] { width: 40px; height: 40px; background-position:-280px -1800px }
	[anim2="male-workingdesk-9.png"] { width: 40px; height: 40px; background-position:-320px -1800px }
	[anim2="male-workingdesk-10.png"] { width: 40px; height: 40px; background-position:-360px -1800px }
	[anim2="male-workingdesk-11.png"] { width: 40px; height: 40px; background-position:-400px -1800px }


	[anim2="male-workinglabor-1.png"] { width: 40px; height: 40px; background-position:0px -1840px }
	[anim2="male-workinglabor-2.png"] { width: 40px; height: 40px; background-position:-40px -1840px }
	[anim2="male-workinglabor-3.png"] { width: 40px; height: 40px; background-position:-80px -1840px }
	[anim2="male-workinglabor-4.png"] { width: 40px; height: 40px; background-position:-120px -1840px }
	[anim2="male-workinglabor-5.png"] { width: 40px; height: 40px; background-position:-160px -1840px }
	[anim2="male-workinglabor-6.png"] { width: 40px; height: 40px; background-position:-200px -1840px }
	[anim2="male-workinglabor-7.png"] { width: 40px; height: 40px; background-position:-240px -1840px }
	[anim2="male-workinglabor-8.png"] { width: 40px; height: 40px; background-position:-280px -1840px }
	[anim2="male-workinglabor-9.png"] { width: 40px; height: 40px; background-position:-320px -1840px }
	[anim2="male-workinglabor-10.png"] { width: 40px; height: 40px; background-position:-360px -1840px }
	[anim2="male-workinglabor-11.png"] { width: 40px; height: 40px; background-position:-400px -1840px }
</style>


