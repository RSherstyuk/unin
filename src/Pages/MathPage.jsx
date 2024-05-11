import React from "react"

const MathPage = ({data}) => {
  return(
      <>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Link</th>
                      <th>Cost</th>
                      <th>Language</th>
                  </tr>
              </thead>
              <tbody>
              {data.resources.map((resource, index) => (
                  <tr key={index}>
                  <td>{resource.name}</td>
                  <td>{resource.type}</td>
                  <td><a href={resource.link} target="_blank" rel="noreferrer">Link</a></td>
                  <td>{resource.cost}</td>
                  <td>{resource.language}</td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </>
  )
} 
export default MathPage
