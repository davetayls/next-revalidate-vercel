const RevalidateSlug = ({ slug }) =>
  <h1>Revalidate Page {(slug || []).join('/')}</h1>

export const getStaticProps = ({ slug }) => {
  return {
    props: {
      slug
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
    fallback: true
  })

export default RevalidateSlug
