import FloatingBUtton from "@components/floating-button";
import Layout from "@components/layout";
import Live from "@components/live";
import { NextPage } from "next";
import Link from "next/link";

const Stream: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className="divide-y-[1px]">
        <Live id="1" user="Steve Jebs" title="Let's try carrots!" />
        <Live id="1" user="Steve Jebs" title="Let's try carrots!" />
        <Live id="1" user="Steve Jebs" title="Let's try carrots!" />
        <Live id="1" user="Steve Jebs" title="Let's try carrots!" />
        <Link href={"/stream/upload"}>
          <FloatingBUtton live />
        </Link>
      </div>
    </Layout>
  );
};

export default Stream;
