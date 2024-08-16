function TextInput({label, type = 'text', value, onchange}){

    return(
        <label className="block">
            <input 
            
            className="px-4 py-2 border border-gray-500 rounded-md w-full"
            onchange = {onchange}
            placeholder = {label}
            type = {type}
            value = {value}
            
            />
        </label>
    );

}

export default TextInput;