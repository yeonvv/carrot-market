// api를 만들기 위해 또 다른 서버를 만들 필요가 없다.

import withHandler from "@libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  return res.status(200).end();
};

export default withHandler("POST", handler);
