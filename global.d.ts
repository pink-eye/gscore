import 'react'

type CustomProp = { [key in `--${string}`]: string | undefined | false }

declare module 'react' {
	export interface CSSProperties extends CustomProp {}
}
