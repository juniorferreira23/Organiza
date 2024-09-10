export default function TableModal(props){
    return(
        <div className="overflow-x-auto px-10 pt-10">
            <table className="w-full ">
                {/* head */}
                <thead>
                <tr className="text-white bg-blue-900">
                    <th>ID</th>
                    <th>Data</th>
                    <th>Movimentação</th>
                    <th>Valor(R$)</th>
                    <th>Observações</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.finance.map((item, index) => (
                            <tr key={index + 1 } className="text-center text-black">
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td>{item.value}</td>
                                <td>{item.details}</td>
                            </tr>
                        ))
                    }
                {/* row 1 */}
                {/* <tr className="text-black">
                    <td>1</td>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}