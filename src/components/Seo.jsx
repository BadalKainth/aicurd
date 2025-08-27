import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "AICURD – Empowering Communities Since 1985",
  description = "AICURD empowers disadvantaged communities through health, education, women empowerment, socio-economic surveys & rural development.",
  keywords = "AICURD, NGO India, Rural Development, Urban Development, Women Empowerment, Health Awareness, Poverty Alleviation",
  author = "MR PRINCE GUPTA",
  url = "https://aicurd.org",
  image = "https://aicurd.org/cover.jpg",
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
