const AlgoPage = ({data}) => {
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
                
            </tbody>
        </table>
    </>
    )
}


export default AlgoPage;