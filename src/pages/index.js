import Head from "next/head";
import { useState, useEffect } from "react";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "@/sections";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>CMS Blog</title>
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
// export async function getStaticProps() {
//   console.log(31);
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }
