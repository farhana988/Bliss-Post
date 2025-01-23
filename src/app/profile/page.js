"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isAuthenticated, user, login, logout } = useKindeAuth();
  const router = useRouter();

    if (!isAuthenticated) {

      router.push('/api/auth/login');
      return null; 
    }

  return (
    <>
      <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
             profile Page
          </h1>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Welcome to your profile!
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Hello, {user?.firstName} {user?.lastName}!
          </p>
        
        </div>
      </div>
    </>
  );
}
