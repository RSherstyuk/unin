const PyPage = ({data}) => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Link</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {data.courses.map(course => (
                    <tr key={course.title}>
                        <td>{course.title}</td>
                        <td>{course.type}</td>
                        <td><a href={course.link} target="_blank" rel="noreferrer">{course.link}</a></td>
                        <td>{course.cost}</td>
                    </tr>
                ))}
                {data.resources.map(resource => (
                    <tr key={resource.title}>
                        <td>{resource.title}</td>
                        <td>{resource.type}</td>
                        <td><a href={resource.link} target="_blank" rel="noreferrer">{resource.link}</a></td>
                        <td>{resource.cost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}


export default PyPage;