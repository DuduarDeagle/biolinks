/* Import dependencies */
import * as React from "react"
import clsx from "clsx"

/* Import styles */
import "./Card.css"

/* Define interface */
interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

/* Set up a Card component */
const Card: React.FC<Props> = ({ className, children }) => {
	return <div className={clsx("card", className)}>{children}</div>
}

export default Card
