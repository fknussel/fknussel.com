import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import SEO from '../components/SEO';
import Grid from '../components/Grid/Grid';
import Archive from '../components/Archive/Archive';
import categories from '../data/categories';
import externalPosts from '../data/external-posts';

export default function BlogIndexTemplate(props) {
    const posts = get(props, 'data.allMarkdownRemark.edges').map(post => ({
        title: get(post, 'node.frontmatter.title'),
        slug: get(post, 'node.fields.slug'),
        spoiler: get(post, 'node.frontmatter.spoiler'),
        date: get(post, 'node.frontmatter.date'),
        timeToRead: get(post, 'node.timeToRead')
    })).concat(externalPosts);
    const sortedPosts = sortBy(posts, post => new Date(post.date)).reverse();

    return (
        <Fragment>
            <SEO />
            <Grid>
                <Archive posts={sortedPosts} />
            </Grid>
        </Fragment>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        spoiler
                        category
                    }
                }
            }
        }
    }
`;