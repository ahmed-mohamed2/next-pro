import Head from "next/head";
import Link from "next/link";

const About = (props) => {
  return (
    <div>
      <Head>
        <title>About Component</title>
        <meta name="description" content="About Project" />
      </Head>
      {props?.data?.map((i) => (
        <div key={i.id}>
          <Link href={`/about/${i.id}`}>{i.title}</Link>
        </div>
      ))}
      <h2>About</h2>
    </div>
  );
};
export default About;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
