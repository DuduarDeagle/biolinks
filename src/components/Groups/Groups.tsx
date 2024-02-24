/* Import dependencies */
import * as React from "react"
import clsx from "clsx"

/* Import styles */
import "./Groups.css"

/* Define interfaces */
interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

/* Set up a ContentGroup component */
export const ContentGroup: React.FC<Props> = ({ className, children }) => {
	return <div className={clsx("content-group", className)}>{children}</div>
}
