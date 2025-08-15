import { Game } from "./components/Game/Game";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
	return (
		<Provider store={store}>
			<Game />
		</Provider>
	);
};
