<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	import '../global.css'

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-image">
	<header>
		<h1>The Basics of ASIC's</h1>
		<p>An initiative to get teenagers designing and manufacturing their own ASIC's and chips by <a href="https://kaipereira.com/" target="_blank">Kai Pereira</a> and <a href="https://hackclub.com/" target="_blank">Hack Club!</a></p>
	</header>
	<nav>
		<ul>
			<li class:current={page.url.pathname === "/"}>
				<a href="/">
					<div>
						<span>Phase 1</span>
						<p>(Design)</p>
					</div>
				</a>
			</li>
			<li class:current={page.url.pathname === "/emulation"}>
				<a href="/emulation">
					<div>
						<span>Phase 2</span>
						<p>(Emulation)</p>
					</div>
				</a>
			</li>
			<li class:current={page.url.pathname === "/fabrication"}>
				<a href="/fabrication">
					<div>
						<span>Phase 3</span>
						<p>(Fabrication)</p>
					</div>
				</a>
			</li>
		</ul>
	</nav>
</div>

<main>
	<div>{@html data.post.content}</div>
</main>

{@render children()}
