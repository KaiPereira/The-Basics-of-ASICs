<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import '../global.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1>The Basics of ASICS</h1>
	<p>An initiative to get teenagers designing and manufacturing their own ASIC's and chips by <a href="https://kaipereira.com/" target="_blank">Kai Pereira</a> and <a href="https://hackclub.com/" target="_blank">Hack Club!</a>
</header>
<nav>
	<a href="/phase-1">Phase 1 (Design)</a>
	<a href="/phase-2">Phase 2 (Emulation)</a>
	<a href="/phase-3">Phase 3 (Fabrication)</a>
</nav>

{@render children()}
