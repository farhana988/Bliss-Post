import Link from "next/link";

async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function BlogDetails({ params }) {


  const { id } = await params;


  const post = await fetchPost(id);

  return (
    <>
    <div className="min-h-screen pt-20 px-6">
    <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center py-10
    ">Details page</h1>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      
    <h1 className="text-3xl font-bold mb-6 text-gray-900"> Title: {post.title}</h1>
 
    <p className="text-lg text-gray-700 mb-4">
      <span className=" text-black font-semibold"> Description: </span>
       {post.body}</p>

    <div className="mt-8">
    <button className="px-6 py-2 text-white bg-[#b07c55] rounded-lg hover:bg-[#68452b] 
    transition">
       <Link href={'/'}>
       Go Back
       </Link>
       
      </button>
    </div>
  </div>
  </div>
  </>
  );
}
