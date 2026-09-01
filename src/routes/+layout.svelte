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
						<span>Phase 0</span>
						<p>(Intro)</p>
					</div>
				</a>
			</li>
			<li class:current={page.url.pathname === "/design"}>
				<a href="/design">
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

<footer>
	<ul>
		<li>
			<a href="/resources">Resources</a>
		</li>
		<li>
			<a href="/write-up">Making Write-Ups</a>
		</li>
		<li>
			<a href="https://github.com/KaiPereira/The-Basics-of-ASICs" target="_blank" rel="noreferrer">
				GitHub Repo
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
			</a>
		</li>
	</ul>
</footer>

{@render children()}
