export default function SelectModal({value, onChange}){
    return(
        <div className="py-2">
            <select className="select select-bordered w-full max-w-xs bg-white" value={value} onChange={onChange}>
                <option disabled selected>Tipo de informação?</option>
                <option>Entrada</option>
                <option>Saída</option>
            </select>
        </div>
    )
}