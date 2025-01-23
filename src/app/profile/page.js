import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen pt-16">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Profile Page
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Welcome to your profile!
        </h1>
      </div>
    </div>
  );
}

export default page;
