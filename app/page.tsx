import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/posts/post-card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PostList from "@/components/posts/post-list";
import CTACard from "@/components/elements/cta-card";
import client from "@/lib/directus";
//import Post from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { notFound } from "next/navigation";
import { Post } from "@/types/collection";

async function getAllPosts() {
  try {
    const posts = client.request(
      readItems("post", {
        fields: [
          "*",
          { author: ["id", "first_name", "last_name"] },
          { category: ["id", "title"] },
        ],
      })
    );

    /* const posts = client.query<Post>(`query {
              posts {
                id,
                title,
                description,
                slug,
                image,
                body,
                date_created,
                date_updated,
                author {
                  id,
                  first_name,
                  last_name,
                }
                category {
                  id,
                  title,
                }
              }
            }`); */

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
}
export default async function Home() {
  const posts = await getAllPosts();
  console.log(posts);
  if (!posts) {
    notFound();
  }
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList
          posts={posts.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard reverse post={posts[3]} />
        <PostList
          posts={posts.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
