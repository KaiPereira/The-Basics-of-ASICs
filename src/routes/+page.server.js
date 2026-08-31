import { getPostBySlug } from "$lib/posts"

export function load({ params }) {
	return {
		post: getPostBySlug(params.slug)
	};
}
