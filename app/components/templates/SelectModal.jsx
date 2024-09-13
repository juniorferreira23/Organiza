export default function SelectModal({value, onChange, title, options}){
    return(
        <div className="py-2">
            <select className="select select-bordered w-full max-w-xs bg-white" value={value} onChange={onChange}>
                <option disabled defaultValue>{title}</option>
                {options.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}