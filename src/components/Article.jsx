/* eslint-disable react/prop-types */
function Article({ title, date = "January 1, 1970", preview }) {
	return (
		<div>
			<article>
				<h3>{title}</h3>
			</article>
			<small>{date}</small>
			<p>{preview}</p>
		</div>
	);
}

export default Article;
