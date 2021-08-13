import { ArticleProps } from "@/props/ArticleProps";
import { createContext, useContext, ReactNode, useState } from "react";

interface PaginationProviderProps {
	children: ReactNode;
	articles: ArticleProps[];
}

interface PaginationContextData {
	currentPage: number;
	pageSize: number;
	changePage: (newPage: number) => void;
	articles: ArticleProps[];
}

export const PaginationContext = createContext({} as PaginationContextData);

export const PaginationProvider = ({ children, articles }: PaginationProviderProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(2);

	const changePage = (newPage: number) => {
		setCurrentPage(newPage);
	};

	return <PaginationContext.Provider value={{ articles, currentPage, pageSize, changePage }}>{children}</PaginationContext.Provider>;
};

export const usePagination = () => useContext(PaginationContext);
