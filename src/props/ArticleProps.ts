import { AuthorProps } from "./AuthorProps";
import { CategoryProps } from "./CategoryProps";
import { CmsImageProps } from "./CmsImageProps";


export interface ArticleProps{
  id: number,
  title: string,
  description: string,
  content: string,
  slug: string,
  published_at: string,
  image: CmsImageProps,
  category: CategoryProps,
  author: AuthorProps
}