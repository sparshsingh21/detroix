import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import activityStyles from "../styles/activities.module.css"

const Card = ({ title, image, slug, date }) => {
  return (
    <section className={activityStyles.card}>
      <Img className={activityStyles.cardImage} fixed={image} />
      <section>
         <Link style={{ color: "#000000" }} to={`${slug}`}>
         <h4 className={activityStyles.cardHeader}>{title}</h4>
        </Link>
        <p className={activityStyles.date}>Date: {date}</p>
      </section>
      <section>
       
      </section>
    </section>
  )
}



const Activities = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "events" } } }
          sort: { fields: frontmatter___date, order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                slug
                thumbnail {
                  childImageSharp {
                    fixed(height: 266, width: 288) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <section className={activityStyles.campusActivities}>
      <Header headerText={"Events"} />
      <section style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <section className={[activityStyles.cardContainer]}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              slug={node.frontmatter.slug}
              image={node.frontmatter.thumbnail.childImageSharp.fixed}
            />
          ))}
        </section>
      </section>
      {/* <Link to="/events"><button className={activityStyles.button}>View All Events</button></Link> */}
    </section>
  )
}

export default Activities
