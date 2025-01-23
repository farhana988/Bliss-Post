export default function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "https://bliss-post.vercel.app"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  

    if (req.method === "OPTIONS") {
      res.status(200).end(); 
      return;
    }
  

    try {

      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  