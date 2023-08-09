import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout title="Home" hasTabBar>
      <div>
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Item
          title="New iphone 14"
          id={1}
          price={95}
          color="black"
          comments={6}
          hearts={14}
        />
        <Link href={"/items/upload"}>
          <FloatingButton home />
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
