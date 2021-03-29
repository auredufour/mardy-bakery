import { useStaticQuery, graphql } from "gatsby"

export const useInstagramQuery = () => {
  const data = useStaticQuery(
    graphql`
      query InstagramQuery {
        allInstagramContent(limit: 6) {
          edges {
            node {
              caption
              permalink
              localImage {
                childImageSharp {
                  fixed(width: 251, height: 251) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return data?.allInstagramContent?.edges || []
}
