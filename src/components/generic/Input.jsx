import './input.css';

export function InputText({onChange,onKeyDown,outerRef,placeholder}) {
	return <input ref={outerRef} className="inputText font_main" 
		onChange={onChange}
		onKeyDown={onKeyDown}
		placeholder={placeholder}
	/>
}