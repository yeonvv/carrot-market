import FloatingBUtton from "@/components/floating-button";
import Layout from "@/components/layout";
import News from "@/components/news";
import { NextPage } from "next";
import Link from "next/link";

const Coummunity: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="px-10 divide-y-[1px]">
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <News
          id="1"
          category="동네생활"
          title="What is the best mandu restaurant?"
          user="니꼬"
          empathy={5}
          answer={12}
        />
        <Link href={"/community/write"}>
          <FloatingBUtton news />
        </Link>
      </div>
    </Layout>
  );
};

export default Coummunity;
