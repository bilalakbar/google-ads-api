import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'
import Sidebar from '../components/sidebar'
// import SEO from '../components/seo'
import { getIds, getSectionsData } from '../utils'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const ids = getIds(edges)
    const sections_data = getSectionsData(edges)
    const Sections = sections_data.map(section => {
        return <Section id={section.id} name={section.key} node={section.node} meta={section.meta} />
    })

    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <div className="w-100 flex items-start">
                <div className="w-20">
                    <Sidebar ids={ids} />
                </div>
                <div className="w-80 pa3">{Sections}</div>
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___entity, frontmatter___order] }) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        order
                        type
                        entity
                    }
                    fields {
                        directory
                        is_index
                    }
                }
            }
        }
    }
`
