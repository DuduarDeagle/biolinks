/* Import dependencies */
import * as React from "react"

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
			<div className={`container footer__container`}>
				<div className="footer__section-stack">
					<a target="_blank" href="https://astro.build">
						<img
							src="https://astro.badg.es/v2/built-with-astro/tiny.svg"
							width={120}
							height={20}
							alt="Insignia con la frase en inglés 'Built with Astro', que hace referencia al framework con el que fue desarrollada la página."
						/>
					</a>
					<p>
						<a
							target="_blank"
							href="https://github.com/duduardeagle/biolinks.git">
							Código fuente
						</a>{" "}
						bajo{" "}
						<a
							rel="license"
							target="_blank"
							href="https://www.gnu.org/licenses/agpl-3.0.txt">
							GNU AGPLv3
						</a>
					</p>
				</div>
				<p className="footer__copyright-notice">
					Copyright © {date.getFullYear()} Duduar Deagle.{" "}
					<span>Todos los derechos reservados.</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
