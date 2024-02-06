export function TextInput({value, setValue,label}) {
  return (<div>
    <label htmlFor={label}> {label}: </label>
    <input
      type="text"
      name={label}
      id= {label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>)
}