/* eslint-disable react/prop-types */
function Article({ post }) {
	return (
		<div>
			<article>
				<h3>{post.title}</h3>
			</article>
			<small>{post.date}</small>
			<p>{post.preview}</p>
		</div>
	);
}

export default Article;
