import React from "react";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";
import { getReadingTime, getRelativeDate } from "@/lib/helpers";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

const PostContent = ({ post, isPostPage = false }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div
        className={`items-center flex-wrap flex gap-2 text-neutral-500 ${
          isPostPage ? "text-sm" : "text-xs @md:text-sm"
        }`}
      >
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-400" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-400" />
        <div>{getReadingTime(post.description)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-400" />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h2
        className={`${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "@lg:text-3xl text-xl @md:text-2xl font-medium"
        }`}
      >
        {post.title}
      </h2>
      {/* Description */}
      <p className="text-base @lg:text-lg text-neutral-600 leading-snug">
        {post.description}
      </p>
      {/* Read More option */}
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read More <ArrowRight size="14" />
        </div>
      )}
    </div>
  );
};

export default PostContent;
