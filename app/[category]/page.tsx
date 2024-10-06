import React from "react";
import { DUMMY_CATEGORIES } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/posts/post-list";
import client from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { notFound } from "next/navigation";
import { Post } from "@/types/collection";

export const generateStaticParams = async () => {
  // return DUMMY_CATEGORIES.map((category) => {
  //   return {
  //     category: category.slug,
  //   };
  // });

  try {
    const categories = await client.request(
      readItems("category", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        fields: [
          "id",
          "title",
          "description",
          "slug",
          {
            posts: [
              "id",
              "title",
              "description",
              "date_created",
              "image",
              {
                author: ["id", "first_name", "last_name", "date_created"],
              },
              {
                category: ["id", "title"],
              },
            ],
          },
        ],
      })
    );

    const params = categories?.map((category) => {
      return {
        category: category.slug as string,
      };
    });

    return params;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching categories");
  }
};

const Page = async ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  // const category = DUMMY_CATEGORIES.find(
  //   (category) => category.slug === params.category
  // );
  // const posts = DUMMY_POSTS.filter(
  //   (post) => post.category.title.toLocaleLowerCase() === params.category
  // );

  const getcategory = async () => {
    try {
      const result = await client.request(
        readItems("category", {
          filter: {
            slug: {
              _eq: params.category,
            },
          },
          fields: [
            "id",
            "title",
            "description",
            "slug",
            {
              posts: [
                "id",
                "title",
                "description",
                "date_created",
                "image",
                {
                  author: ["id", "first_name", "last_name", "date_created"],
                },
                {
                  category: ["id", "title"],
                },
              ],
            },
          ],
        })
      );
      console.log(JSON.stringify(result));
      return result?.[0];
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching category");
    }
  };

  const category = await getcategory();

  if (!category) {
    notFound();
  }

  const typeFixedCategory = category as unknown as {
    id: number;
    title: string;
    description: string;
    slug: string;
    posts: Post[];
    image: string;
  };

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{typeFixedCategory?.title}</h1>
        <p className="text-lg text-neutral-600">
          {typeFixedCategory?.description}
        </p>
      </div>
      <PostList posts={typeFixedCategory.posts} />
    </PaddingContainer>
  );
};

export default Page;
