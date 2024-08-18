export default function InputCamp(props){
    return(
        <div className="flex flex-col py-1 bg-blue-400">
            <label className="py-1" htmlFor={props.name}>{props.name}</label>
            <input className="rounded-md border border-zinc-300 px-1 w-80" type={props.type} name={props.name} id={props.name} placeholder={props.name}/>
        </div>
    )
}