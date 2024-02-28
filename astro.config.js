import { defineConfig } from "astro/config"

import node from "@astrojs/node"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://duduar.dev",
	output: "hybrid",
	adapter: node({
		mode: "standalone"
	}),
	integrations: [sitemap(), react()],
	build: {
		assets: "assets"
	}
})
