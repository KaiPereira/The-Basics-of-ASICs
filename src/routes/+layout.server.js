import { getPostBySlug } from "$lib/posts"

export function load({ url }) {
	return {
		post: getPostBySlug(url.pathname.replace("/", ""))
	};
}
