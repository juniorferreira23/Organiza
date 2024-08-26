export default function Button(props){
    return (
        <>
            <button className="btn btn-primary text-white" type={props.type}>{props.name}</button>
        </>
    )
}