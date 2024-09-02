export default function TableModal(){
    return(
        <div className="overflow-x-auto px-10 pt-10">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr className="text-white bg-blue-900">
                    <th>ID</th>
                    <th>Movimentação</th>
                    <th>Valor(R$)</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}