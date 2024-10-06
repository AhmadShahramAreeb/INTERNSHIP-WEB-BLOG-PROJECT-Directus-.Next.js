import React from "react";

interface PostBodyProps {
  // Add any props you need here
}

const PostBody = ({ body }: { body: string }) => {
  return <div>{body}</div>;
};

export default PostBody;
