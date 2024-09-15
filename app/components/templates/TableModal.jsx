import Button from "./Button";

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
                    <th>Setor</th>
                    <th>Valor(R$)</th>
                    <th>Observações</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.finance.map((item, index) => (
                            <tr key={index + 1 } className="text-center text-black">
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td>{item.sector}</td>
                                <td>{item.value}</td>
                                <td>{item.details}</td>
                                <td><Button onClick={() => props.deleteRegister(index + 1)} type="button" name="Excluir"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}