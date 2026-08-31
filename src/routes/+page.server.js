import { getPostBySlug } from "$lib/posts"

export function load({ params }) {
	console.log(getPostBySlug(""));
	return {
		post: getPostBySlug("")
	};
}
