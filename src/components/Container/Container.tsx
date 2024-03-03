/* Import dependencies */
import * as React from "react"
import clsx from "clsx"

/* Import styles */
import "./Container.css"

/* Define interface */
interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

/* Set up a Container component */
const Container: React.FC<Props> = ({ className, children }) => {
	return <div className={clsx("container", className)}>{children}</div>
}

export default Container
