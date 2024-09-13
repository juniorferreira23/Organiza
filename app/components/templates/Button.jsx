export default function Button(props){
    return (
        <>
            <button className="btn btn-primary text-white" onClick={props.onClick} type={props.type}>{props.name}</button>
        </>
    )
}
