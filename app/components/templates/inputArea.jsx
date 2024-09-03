export default function InputArea({onChange}){
    return(
        <div className="py-2">
            <textarea className="textarea textarea-bordered textarea-lg bg-white" placeholder="Observações" onChange={onChange}></textarea>
        </div>
    )
}