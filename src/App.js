import { Provider } from "./Context"
import { createGlobalStyle } from "styled-components"
import Data from "./Data"
import Presentation from "./components/Presentation"
import Progress from "./components/Progress"

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, li, label, th, td {
		color: white;
		font-family: "Roboto", sans-serif !important;
	}
`

function App() {
	let current = 1
	// max cards
	let max = 9

	return (
		<Provider>
			<div className="App">
				<GlobalStyle />
				<Presentation>
					<Data />
				</Presentation>
				<Progress current={current + 1} max={max} />
			</div>
		</Provider>
	)
}

export default App
