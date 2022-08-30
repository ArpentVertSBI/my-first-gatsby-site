import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FunctionComponent } from 'react';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
    const { pageTitle, children } = props;

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    const { title } =  data.site.siteMetadata;

    return (
        <div className={container}>
          <header className={siteTitle}>{title}</header>
          <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
          <main>
          <h1 className={heading}>{title}</h1>
            {children}
          </main>
        </div>
      )
}

export default Layout
