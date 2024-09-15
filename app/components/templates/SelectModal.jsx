import { useState } from "react"

export default function SelectModal({value, onChange, title, options}){
    const [option, setOption] = useState()
    return(
        <div className="py-2">
            <select className="select select-bordered w-full max-w-xs bg-white" value={value} onChange={onChange}>
                    <option disabled selected>{title}</option>
                {options.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}