import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Gal's Shop",
    description: "eCommerce website I built using MERN stack",
    keywords: 'FullStack, Programming, Frontend, Backend',
}

export default Meta