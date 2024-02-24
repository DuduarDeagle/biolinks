/* Import dependencies */
import * as React from "react"

/* Import styles */
import "./Input.css"

/* Import interface */
interface Props
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

/* Set up an Input component */
const Input: React.FC<Props> = ({
	id,
	name,
	type = "text",
	value,
	disabled = false
}) => {
	return (
		<input
			id={id}
			name={name}
			type={type}
			value={value}
			className="input"
			disabled={disabled}
		/>
	)
}

export default Input
