// react
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App";
import GlobalStylesStyled from "./components/settings/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<>
			<App />
			<GlobalStylesStyled />
		</>
	</StrictMode>
);
