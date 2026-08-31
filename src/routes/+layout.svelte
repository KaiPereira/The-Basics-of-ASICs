<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import '../global.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1>The Basics of ASIC's</h1>
	<p>An initiative to get teenagers designing and manufacturing their own ASIC's and chips by <a href="https://kaipereira.com/" target="_blank">Kai Pereira</a> and <a href="https://hackclub.com/" target="_blank">Hack Club!</a>
</header>
<nav>
	<ul>
		<li>
			<a href="/phase-1">
				<div>
					<span>Phase 1</span>
					<p>(Design)</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/phase-2">
				<div>
					<span>Phase 2</span>
					<p>(Emulation)</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/phase-3">
				<div>
					<span>Phase 3</span>
					<p>(Fabrication)</p>
				</div>
			</a>
		</li>
	</ul>
</nav>

{@render children()}
