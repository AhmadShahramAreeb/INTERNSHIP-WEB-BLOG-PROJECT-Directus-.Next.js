import { createDirectus, staticToken, rest, graphql } from "@directus/sdk";
import { Post, Category, Author } from "@/types/collection";


type Schema = {
  post: Post[];
  category: Category[];
  author: Author[];
};



const client = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
  .with(staticToken(process.env.ADMIN_TOKEN as string))
  .with(graphql())
  .with(rest());

export default client;


/*
type Post = {
	id: string;
  title: string;
  description: string;
  category: Category;
  author: Author;
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
}

type Category = {
  id: string;
  title: string;
  slug: string;
  description: string;
}

type Author = {
  id: string;
  first_name: string;
  last_name: string;
} */


// const client = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
//   .with(staticToken(process.env.ADMIN_TOKEN as string))
//   .with(rest());