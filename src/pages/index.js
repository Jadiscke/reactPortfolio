import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"
import PortfolioContainer from "../components/portfolioContainer"
import PortfolioCard from "../components/potfolioCard"

const imgUrl = 'http://placehold.it/350x150';

const IndexPage = () => (
  

  <Layout>
    <SEO title="Home" />
    <Container bgcolor={"#E8E8E8"} justify={"center"} head={true}>
      <h1>Vinícius Jadiscke</h1>
      <p>Full Stack Web Developer</p>
   </Container>
   <Container justify={"space-around"}> 
    <h2 id="portfolio"> Portfolio </h2>
    <PortfolioContainer>
      <PortfolioCard image={imgUrl} />
      <PortfolioCard image={imgUrl} />
      <PortfolioCard image={imgUrl} />
      <PortfolioCard image={imgUrl} />
    </PortfolioContainer>
   </Container>
  </Layout>
)

export default IndexPage
