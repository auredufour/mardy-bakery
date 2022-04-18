import React from "react"
import { Layout } from "../../components/layout"
import {Text} from "../../components/text"
import { Header } from '../../components/header'
import {SubSection} from "./styles"

export const TandC = () => {
  return (
    <Layout headerText="Terms and Conditions">
      <SubSection>
        <Header level="2" uppercase style={{ marginBottom: "2rem" }}>
          Allergens
        </Header>
        <Text margin="0 0 1rem 0">
          All our foods and bakes are prepared and baked in our kitchen, which
          contains and uses the following allergens: celery, cereals containing
          gluten, eggs, fish, lupin, milk, mustard, nuts, peanuts, sesame seeds,
          soya and sulpur dioxide.
        </Text>
        <Text margin="0 0 1rem 0">
          While we take great care to avoid cross-contamination, we cannot
          promise our products to be completly free from trace of said
          allergens.
        </Text>
        <Text margin="0 0 1rem 0">
          Allergens information is displayed in our shop and on pre-packaged
          items, and our staff are qualified to answer any questions you may
          have concerning allergens and ingredients.
        </Text>
        <Text>
          Mardy bakery is not liable for any issues regarding allergens if the
          customer does not inform us of any allergy information prior to
          ordering and consuming our products, and it is the responsability of
          the customer to inform those who are consuming the products if not
          consuming them themselves.
        </Text>
      </SubSection>
      <SubSection>
        <Header level="2" uppercase style={{ marginBottom: "2rem" }}>
          Privacy policy
        </Header>
        <Text>
          Please contact{" "}
          <a href="mailto:info@mardybakery.com">info@mardybakery.com</a> to
          receive a full copy of our privacy policy.
        </Text>
      </SubSection>
    </Layout>
  )
}
