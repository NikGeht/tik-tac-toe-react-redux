import "./startGame.scss";
import { useTikTac } from "../../hooks/useTikTac.jsx";

export const StartGame = ({ children }) => {
	const { handleStartGame } = useTikTac();

	return (
		<div className={`start-game`}>
			<h1 className={`start-game__title`}>Tik-tac-toe</h1>
			<button className={`start-game__button`} onClick={handleStartGame}>
				{children}
			</button>
		</div>
	);
};
