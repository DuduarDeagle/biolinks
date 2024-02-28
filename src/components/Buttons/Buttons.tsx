/*Import dependencies */
import * as React from "react"

/* Import styles */
import "./Buttons.css"

/* Define interfaces */
interface BaseProps {
	as?: "button" | "a"
}

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

interface AnchorProps
	extends React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {}

/* Define conditional type */
type Conditional = BaseProps & (ButtonProps | AnchorProps)

/* Set up a conditional Button component */
export const Button: React.FC<Conditional> = ({ as = "button", ...props }) => {
	/**
	 * In this case if you define the 'as' prop as 'a', you can render an 'a' element
	 */
	if (as === "a") {
		const { href, children } = props as AnchorProps

		return (
			<a href={href} className="btn">
				<span className="btn__container">{children}</span>
			</a>
		)
	}

	const { onClick, children } = props as ButtonProps

	/**
	 * A 'button' element is redered by default
	 */
	return (
		<button className="btn" onClick={onClick}>
			<span className="btn__container">{children}</span>
		</button>
	)
}
