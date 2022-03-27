import React from "react"
import _get from "lodash/get"
import { Layout } from "../../components/layout"

export const TandC = () => {
  return (
    <Layout headerText="TandC">
      <h2>Allergens:</h2>
      <p>
        All our foods and bakes are prepared and baked in our kitchen, which
        contains and uses the following allergens: celery, cereals containing
        gluten, eggs, fish, lupin, milk, mustard, nuts, peanuts, sesame seeds,
        soya and sulpur dioxide.
      </p>
      <p>
        While we take great care to avoid cross-contamination, we cannot promise
        our productsto be completly free from trace of said allergens
      </p>
      <p>
        Allergens information is displayed in our shop and on pre-packages items,
        and our staff are qualified to answer any questions you may have
        concerning allergens and ingredients.
      </p>
      <p>
        Mardy bakery is not liable for any issues regarding allergens if the
        customer does not inform us of any allergy information prior to ordering
        and consuming our products, and it is the responsability of the customer
        to inform those who are consuming the products if not consuming them
        themselves
      </p>
      <h2>Privacy policy:</h2>
      <p>
        Please contact <a mailto="info@mardybakery.com">info@mardybakery.com</a> to receive a full copy of our privacy policy.
      </p>
    </Layout>
  )
}
