import Head from "next/head";

// like product/id
const DynamicComponent = (props) => {
  return (
    <div>
      <Head>
        <title>Dynamic Component</title>
        <meta name="description" content="Dynamic Component" />
      </Head>
      <h1>{props.data.title}</h1>
      <h1>{props.data.body}</h1>
      <p>Dynamic</p>
    </div>
  );
};

export default DynamicComponent;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
