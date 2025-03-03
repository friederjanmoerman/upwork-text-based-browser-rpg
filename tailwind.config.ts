import preset from "@medusajs/ui-preset"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [preset],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
}

export default config
