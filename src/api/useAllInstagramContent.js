// import { useStaticQuery, graphql } from "gatsby"

// export const useInstagramQuery = () => {
//   const data = useStaticQuery(
//     graphql`
//       query InstagramPosts {
//         allInstagramContent(limit: 12) {
//            edges {
//               node {
//               link
//               localImage {
//                 childImageSharp {
//                   fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
//                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                   }
//                 }
//               }
//               images {
//                 standard_resolution {
//                   width
//                   height
//                   url
//                 }
//                 low_resolution {
//                   url
//                 }
//              }
//            }
//            }
//         }
//       }
//     `
//   )

//   console.log({ data })

//   return data?.allInstagramContent?.edges || []
// }

