function Blog({ posts }) {


  const itemList = [...Array(8)].map((e, i) => (
    <span key={i}>
      <h1>{i}{posts.name}</h1>
    </span>
  ));
  return (
    <div>
      {itemList}
      </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.aleemrehmtulla.com/my.json')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
