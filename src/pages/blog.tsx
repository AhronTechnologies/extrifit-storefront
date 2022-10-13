import { StoreGetProductsParams } from "@medusajs/medusa"
import Layout from "@modules/layout/templates"
import { useState } from "react"
import { NextPageWithLayout } from "types/global"

const Store: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
        Test blog
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
