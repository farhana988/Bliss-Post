import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className="text-3xl p-4">
    <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
    <p className="text-lg mb-4">Total Posts: {posts.length}</p>

    {/* Responsive grid for posts */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
       <PostCard
       key={post.id}
       post={post}
       
       ></PostCard>
      ))}
    </div>
  </div>
  );
}
