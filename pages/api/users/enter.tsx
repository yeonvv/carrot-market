// api를 만들기 위해 또 다른 서버를 만들 필요가 없다.

import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { email, phone } = req.body;
  const payload = phone ? phone && { phone: +phone } : email && { email };
  const token = await client.token.create({
    data: {
      payload: "123",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log("Found it!");
  //   if (!user) {
  //     console.log("Did not find. Will create.");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }

  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log("Found it!");
  //   if (!user) {
  //     console.log("Did not find. Will create.");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         phone: +phone,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  return res.status(200).end();
};

export default withHandler("POST", handler);
