import { usePagination } from "@/context/paginationContext";
import { ArticleProps } from "@/props/ArticleProps";

export const Articles = () => {
	const { articles, changePage, currentPage, pageSize } = usePagination();

	function paginate(array: ArticleProps[], page_number: number, page_size: number) {
		// human-readable page numbers usually start with 1, so we reduce 1 in the first argument
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	}

	return (
		<div>
			{paginate(articles, currentPage, pageSize).map((article: ArticleProps, index) => {
				return (
					<div key={index}>
						{/* <img src={process.env.NEXT_PUBLIC_CMS_API_HOST + article.image.url} alt='Image' /> */}
						<h2>{article.title}</h2>
						<p>{article.published_at}</p>
						<p>{article.description}</p>
					</div>
				);
			})}
		</div>
	);
};
