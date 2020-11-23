const Slug = ({ slug }) =>
  <h1>Revalidate Page {(slug || []).join('/')}</h1>

export const getStaticProps = ({ params }) => {
  return {
    props: {
      slug: params.slug || []
    },
    revalidate: 10
  }
}

export const getStaticPaths = () =>
  ({
    paths: [
      { params: { slug: ['a', 'b'] } },
      { params: { slug: ['c', 'd'] } },
      { params: { slug: ['e', 'f'] } },
      { params: { slug: ['g', 'h'] } }
    ],
    fallback: 'blocking'
  })

export default Slug
