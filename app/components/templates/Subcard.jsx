export default function Subcard(props){
    return(
        <div className="card bg-blue-900 w-60 h-20 shadow-xl rounded-md mx-2 my-5">
            <div className="flex flex-col p-3">
                <h2>{props.title}</h2>
                <div className="">
                    <p className="text-xl">R${props.value}/R${props.limit}</p>
                </div>
            </div>
        </div>
    )
}