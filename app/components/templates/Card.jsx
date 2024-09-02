export default function Card(props){
    return(
        <div className="card bg-blue-900 w-60 shadow-xl mx-10">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <div className="card-actions justify-end items-center">
                    <p className="text-4xl font-bold">R${props.value}</p>
                    <props.icone size={30} stroke={2}/>
                </div>
            </div>
        </div>
    )
}