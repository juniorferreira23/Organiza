export default function Input({placeholder, onChange}){
    return(
        <div className="py-2">
            <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs bg-white"
            onChange={onChange}
            />
        </div>
    )
}