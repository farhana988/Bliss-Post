import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className="text-3xl">
     hello
     <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
           
              <a className="">{post.title}</a>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
