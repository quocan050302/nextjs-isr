import React from "react";

type Props = {};

const page = ({ posts }) => {
  return (
    <ul>
      {posts?.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
};

export default page;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
