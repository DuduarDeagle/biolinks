/* Import dependencies */
import * as React from "react"

/* Import components */
import Container from "@components/Container"
import { ContentGroup } from "@components/Groups"

/* Import styles */
import "./Footer.css"

/* Define interfaces */
interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {}

/* Set up a Footer component */
const Footer: React.FC<Props> = () => {
	const date = new Date()

	return (
		<footer className="footer">
			<Container>
				<ContentGroup className="footer__section-stack">
					<a target="_blank" href="https://astro.build">
						<img
							src="https://astro.badg.es/v2/built-with-astro/tiny.svg"
							alt="Insignia con la frase en inglés 'Built with Astro', que hace referencia al framework con el que fue desarrollada la página."
							width={120}
							height={20}
							loading="lazy"
						/>
					</a>
					<p>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://github.com/duduardeagle/homepage.git"
							className="footer__external-link">
							Código fuente
						</a>{" "}
						bajo{" "}
						<a
							rel="license"
							target="_blank"
							href="https://www.gnu.org/licenses/agpl-3.0.txt"
							className="footer__external-link">
							GNU AGPLv3
						</a>
					</p>
				</ContentGroup>
				<ContentGroup className="footer__copyright-notice">
					<span> Copyright © {date.getFullYear()} Duduar Deagle.</span>
					<span>Todos los derechos reservados.</span>
				</ContentGroup>
			</Container>
		</footer>
	)
}

export default Footer
