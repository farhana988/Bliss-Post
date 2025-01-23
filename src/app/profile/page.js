"use client";

import { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isAuthenticated, user } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/api/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="min-h-screen pt-96">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Profile Page
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Welcome to your profile!
        </h1>
        {/* {user && (
          <p className="text-lg text-gray-700 mb-4">
            Hello, {user.firstName} {user.lastName}!
          </p>
        )} */}
      </div>
    </div>
  );
}
