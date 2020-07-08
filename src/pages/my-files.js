import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          My Site's Files
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
      <div>Hello world</div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
