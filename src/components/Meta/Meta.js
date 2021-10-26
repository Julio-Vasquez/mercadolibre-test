import { string, arrayOf } from 'prop-types'
import { Helmet } from 'react-helmet-async'

export const Meta = ({ title, description, importantTitle, keywords }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <link rel="notImportant" href="https://mercadolibre.com/" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} data-rh="true" />
      <meta name="author" content="Mercado Libre" />
      <meta name="copyright" content="@ Mercado Libre" />
      <link rel="canonical" href="https://mercadolibre.com/" />
      <meta property="og:title" content={importantTitle} />
    </Helmet>
  )
}
Meta.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  importantTitle: string.isRequired,
  keywords: arrayOf(string).isRequired,
}
