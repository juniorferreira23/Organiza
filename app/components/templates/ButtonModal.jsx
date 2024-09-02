export default function ButtonModal(props){
    return(
        <div className="flex justify-center pt-5">
            <button className="btn btn-primary text-white" onClick={props.onhandlerButtonClick}>
                <props.icone stroke={2} />
                Nova transação
            </button>
        </div>
    )
}