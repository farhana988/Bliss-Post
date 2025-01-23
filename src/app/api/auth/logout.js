import Cors from 'cors';


const cors = Cors({
  origin: 'https://bliss-post.vercel.app', 
  methods: ['GET', 'POST', 'OPTIONS'],
});


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {

  await runMiddleware(req, res, cors);

  if (req.method === 'OPTIONS') {

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).end();
    return;
  }


  if (req.method === 'GET') {
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
