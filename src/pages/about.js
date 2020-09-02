import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = ({
  data: {
    about: { nodes },
  }
}) => {

  // console.log(nodes);
  const{title, info, stack, image} = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img"/>
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map( (item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

// NOTE: added graphql alias 'about' below (before allStrapiAbout) 
export const query = graphql`
{
  about:allStrapiAbout {
    nodes {
      id
      title
      info
      stack {
        id
        title
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
    }
  }
`
export default About
