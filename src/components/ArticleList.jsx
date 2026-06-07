/* eslint-disable react/prop-types */
import Article from "./Article";

function ArticleList({ posts }) {
	return (
		<main>
			{posts.map((post) => (
				<Article key={post.id} {...post} />
			))}
		</main>
	);
}

export default ArticleList;
