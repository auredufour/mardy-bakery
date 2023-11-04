import React from "react"

import SEO from "../components/seo"
import { CelebrationCakes } from "../components/main/v2/pages/celebrationCakes"
import { GlobalStyles } from "../components/main/v2/styles"

const CelebrationCakesPage = () => (
  <>
    <GlobalStyles />
      <SEO title="Celebration Cakes" />
      <CelebrationCakes />
  </>
)

export default CelebrationCakesPage
