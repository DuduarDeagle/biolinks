/* Import dependencies */
import * as React from "react"

/* Import styles */
import "./Container.css"

/* Define interface */
interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

/* Set up a Container component */
const Container: React.FC<Props> = ({ children }) => {
	return <div className="container">{children}</div>
}

export default Container
