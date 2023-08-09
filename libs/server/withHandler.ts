import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  handler: NextApiHandler
): NextApiHandler {
  return async (req, res) => {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
