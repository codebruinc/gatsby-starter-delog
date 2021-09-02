import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>This is a standing invitation: if you want to talk software or marketing, I want to talk to you.</p>
        </div>
        <div>
          <p>Feel free to email me at zach then use my last name at gmail.  Be sure to put in subject "read your blog" or somewhere in the body of the email.  I often search through my email for these contacts and I really do try to write everyone back.</p>
                <p>If you are in the Seattle area and want to meetup; I'd be glad to buy you a coffee.</p>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`