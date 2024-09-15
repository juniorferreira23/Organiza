export default function Input({placeholder, onChange, name}){
    return(
        <div className="py-2">
            <input type="text" placeholder={placeholder} name={name} className="input input-bordered w-full max-w-xs bg-white"
            onChange={onChange||null}
            />
        </div>
    )
}