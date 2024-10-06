/*in this file we create post type first */
export interface Post {
  id: string;
  title: string;
  description: string;
  category: Category;
  author: Author;
  slug: string;
  status: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
}

export interface Category {
  id: string;
  title: string;
  slug?: string;
  status: string;
  description?: string;
}

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
}
