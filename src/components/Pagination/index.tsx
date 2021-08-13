import { usePagination } from "@/context/paginationContext";
import React, { useEffect, useState } from "react";

export const Pagination = () => {
	const { changePage, currentPage, pageSize, articles } = usePagination();
	const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
	const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
	const [prevPages, setPrevPages] = useState<number[]>([]);
	const [nextPages, setNextPages] = useState<number[]>([]);
	const maxPageNumber = articles.length / pageSize;
	let pages = Array.from({ length: maxPageNumber }, (_, i) => i + 1);

	useEffect(() => {
		const prevPagesArray = Array.from({ length: currentPage - 1 }, (_, i) => i + 1);
		const nextPagesArray = Array.from({ length: maxPageNumber - currentPage }, (_, i) => i + 1 + currentPage);

		if (nextPagesArray.length >= 2) {
			setPrevPages(prevPagesArray.slice(prevPagesArray.length - 2, prevPagesArray.length));
		} else {
			setPrevPages(prevPagesArray.slice(0, 4 - nextPagesArray.length));
		}

		if (prevPagesArray.length >= 2) {
			setNextPages(nextPagesArray.slice(0, 2));
		} else {
			setNextPages(nextPagesArray.slice(0, 4 - prevPagesArray.length));
		}
	}, [currentPage]);

	useEffect(() => {
		const minPageNumber = 1;

		if (currentPage > minPageNumber) {
			setIsPrevButtonDisabled(false);
		} else {
			setIsPrevButtonDisabled(true);
		}

		if (currentPage < maxPageNumber) {
			setIsNextButtonDisabled(false);
		} else {
			setIsNextButtonDisabled(true);
		}
	}, [currentPage]);

	return (
		<div>
			<button onClick={() => !isPrevButtonDisabled && changePage(currentPage - 1)} disabled={isPrevButtonDisabled}>
				prev
			</button>

			{prevPages.map((page, i) => {
				return <button key={i}>{page}</button>;
			})}

			<button>
				<strong> {currentPage} </strong>
			</button>

			{nextPages.map((page, i) => {
				return <button key={i}>{page}</button>;
			})}

			<button onClick={() => !isNextButtonDisabled && changePage(currentPage + 1)} disabled={isNextButtonDisabled}>
				next
			</button>
		</div>
	);
};
