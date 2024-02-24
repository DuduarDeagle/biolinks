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

export const Button: React.FC<Conditional> = ({ as = "button", ...props }) => {
	if (as === "a") {
		const { href, children } = props as AnchorProps

		return (
			<a href={href} className="btn">
				<span className="btn__container">{children}</span>
			</a>
		)
	}

	const { onClick, children } = props as ButtonProps

	return (
		<button className="btn" onClick={onClick}>
			<span className="btn__container">{children}</span>
		</button>
	)
}
