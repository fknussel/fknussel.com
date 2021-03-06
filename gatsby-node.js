const path = require('path');

const Promise = require('bluebird');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const BlogIndexTemplate = path.resolve('./src/templates/blog-index.tsx');
        const BlogPostTemplate = path.resolve('./src/templates/blog-post.tsx');

        createPage({
            path: '/',
            component: BlogIndexTemplate,
        });

        resolve(
            graphql(
                `
                    {
                        allMarkdownRemark(
                            sort: { fields: [frontmatter___date], order: DESC }
                            limit: 1000
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                    }
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                _.each(posts, (post, index) => {
                    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path: post.node.fields.slug,
                        component: BlogPostTemplate,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                        },
                    });
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
