export default function InputCamp(props){
    return(
        <div className="flex flex-col py-2">
            <label className="py-1 text-center" htmlFor={props.name}>{props.name}</label>
            <input className="rounded-md border border-blue-600 p-2 w-full md:w-80 required" type={props.type} name={props.name} id={props.name} placeholder={props.name}/>
        </div>
    )
}