import React, { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { GetStaticProps } from "next";
import cmsApi from "@/services/cmsApi";
import { ArticleProps } from "@/props/ArticleProps";
import { Articles } from "@/components/Articles";
import { Pagination } from "@/components/Pagination";
import { PaginationProvider } from "@/context/paginationContext";

interface HomeProps {
	articles: ArticleProps[];
}

export default function Home({ articles }: HomeProps) {
	return (
		<PageLayout>
			<PaginationProvider articles={articles}>
				<Articles />
				<Pagination />
			</PaginationProvider>
		</PageLayout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: articles } = await cmsApi.get<ArticleProps[]>("/articles");
	console.log(articles);

	return {
		props: { articles },
		revalidate: 1,
	};
};
