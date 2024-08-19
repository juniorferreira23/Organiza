export default function Button(props){
    return (
        <>
            <button className='bg-blue-900 p-1.5 rounded-md text-white my-3 hover:bg-blue-500' type={props.type}>{props.name}</button>
        </>
    )
}