import type { ArticleType } from "./ArticleType"

export interface FilterArticleType { 
  critera?: string
  items?: Array<ArticleType>
}