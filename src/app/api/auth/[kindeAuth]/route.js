import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();
export const OPTIONS = (req) => {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  };