import { getPostBySlug } from "$lib/posts"

export async function load({ url }) {
	const res = await fetch(
		"https://api.github.com/repos/KaiPereira/The-Basics-of-ASICs"
	);

	const { pushed_at } = await res.json();

	return {
		post: getPostBySlug(url.pathname.replace("/", "")),
		updated_at: pushed_at
	};
}
