import React, { FunctionComponent } from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Seo from "../../components/seo";
import { AllMdxBlog } from "../../Models/data/allMdxBlog";

type BlogPageProps = {
    data: AllMdxBlog;
};

export const BlogPage: FunctionComponent<BlogPageProps> = (props: BlogPageProps) => {
    const { data } = props;
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                    </article>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo pageTitle="My Blog Posts" />;

export default BlogPage;
