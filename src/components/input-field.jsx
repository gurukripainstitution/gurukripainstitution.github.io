export default function InputField({ label, name, type='text', required=true }) {
    let inputEle = <input type={type} placeholder={label} name={name} required={required} className="outline-none p-4 border border-gray-400 rounded-lg focus:border-primary bg-white" />
    if(type==='textarea') {
        inputEle = <textarea placeholder={label} rows={5} name={name} required={required} className="outline-none p-4 border border-gray-400 rounded-lg focus:border-primary bg-white" />
    }
    

    return (
        <label className="flex flex-col gap-2">
            <p className="font-medium">{label}</p>
            {inputEle}
        </label>
    )
}