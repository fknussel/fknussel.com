import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../Layout/Layout';
import SEO from '../SEO';
import styles from './Post.module.css';
import calendarIcon from './calendar.svg';
import timeIcon from './time.svg';

export default function Post(props) {
    const post = props.data.markdownRemark;
    const { previous, next, slug } = props.pageContext;
    const postDetails = (
        <ul className={styles.detailsList}>
            <li className={styles.detailsItem}>
                <img
                    src={calendarIcon}
                    alt="Date published"
                    title="Date published"
                    className={styles.detailsIcon}
                />
                {post.frontmatter.date}
            </li>
            <li className={styles.detailsItem}>
                <img
                    src={timeIcon}
                    alt="Time to read"
                    title="Time to read"
                    className={styles.detailsIcon}
                />
                {post.timeToRead} min.
            </li>
        </ul>
    );

    return (
        <Layout className={styles.layout} details={postDetails}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.spoiler}
                slug={post.fields.slug}
            />

            <h1 className={styles.title}>{post.frontmatter.title}</h1>

            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />

            {/* <footer>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </footer> */}
        </Layout>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            fields {
                slug
            }
        }
    }
`;
