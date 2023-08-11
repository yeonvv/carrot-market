// api를 만들기 위해 또 다른 서버를 만들 필요가 없다.
import mail from "@sendgrid/mail";
import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiHandler } from "next";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

mail.setApiKey(process.env.SENDGRID_API!);

const handler: NextApiHandler<ResponseType> = async (req, res) => {
  const { email, phone } = req.body;
  const user = phone ? phone && { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      from: process.env.TWILIO_NUMBER,
      to: process.env.MY_PHONE!,
      body: `Your login to is ${payload}`,
    });
    console.log(message);
  } else if (email) {
    const email = await mail.send({
      from: process.env.MY_EMAIL!,
      to: process.env.SENDGRID_MAIL,
      subject: "Your Carrot Market Verification Email",
      text: `Your Token is ${payload}`,
      html: `<strong>Your Token is ${payload}</strong>`,
    });
    console.log(email);
  }
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
  return res.json({ ok: true });
};

export default withHandler("POST", handler);
