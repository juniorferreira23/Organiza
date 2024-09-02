export default function Input({onChange}){
    return(
        <div className="py-2">
            <input type="text" placeholder="Valor" className="input input-bordered w-full max-w-xs bg-white"
            onChange={onChange}
            />
        </div>
    )
}