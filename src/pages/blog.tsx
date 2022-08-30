import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { AllMdxBlog } from '../Models/data/allMdxBlog';



type BlogPageProps = {
  data: AllMdxBlog;  
};

export const BlogPage: FunctionComponent<BlogPageProps> = (props: BlogPageProps) => {
  const { data }  = props;
  return (
    <Layout pageTitle="My Blog Posts">      
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      excerpt
    }
  }
}
  `

export const Head = () => <Seo pageTitle="My Blog Posts" />


export default BlogPage