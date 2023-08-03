import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "해위",
      name: "해위",
    },
  });

  res.json({
    ok: true,
  });
}

// api를 만들기 위해 또 다른 서버를 만들 필요가 없다.
