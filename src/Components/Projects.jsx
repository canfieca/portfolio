import '../css/Projects.css'

export default function Projects() {
    // Define the createTable function
    function createTable() {
        let table = []
        for (let i = 0; i < 3; i++) {
            let children = []
            for (let j = 0; j < 3; j++) {
                children.push(<td>Project {i * 3 + j + 1}</td>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    return (
        <>
            <h1 id="section-title">I work on some projects here and there</h1>
            <table>
                {/* Call the createTable function */}
                {createTable()}
            </table>
        </>
    )
}