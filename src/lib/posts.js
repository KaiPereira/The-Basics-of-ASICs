import matter from "gray-matter"
import { marked } from "marked"

const renderer = new marked.Renderer();

renderer.image = ({href, title, text}) => {
	return `<img loading="lazy" src="${href}" alt="${text || ""}" ${title ? ` title="${title}"` : ""}>`;
};

marked.setOptions({ renderer });

const files = import.meta.glob("/src/lib/posts/**/*.md", {
	eager: true,
	query: "?raw",
	import: "default"
});

function parseMarkdown(raw, filepath) {
	const { data, content } = matter(raw);
	const parts = filepath.split("/");
	const filename = parts.at(-1);
	const folder = parts.at(-2);

	const isHomePage = filename === "main.md";

	return {
		filepath,
		filename,
		folder,
		slug:  isHomePage ? "" : filename.replace(".md", ""),
		metadata: data,
		content: marked(content)
	};
}

const posts = Object.entries(files).map(([path, raw]) => parseMarkdown(raw, path));

export function getPostBySlug(slug) {
	return posts.find((post) => post.slug === slug);
}
