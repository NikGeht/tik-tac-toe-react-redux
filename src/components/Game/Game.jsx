import { StartGame } from "../StartGame/StartGame.jsx";
import { Information } from "../Information/Information.jsx";
import { Field } from "../Field/Field.jsx";
import { Button } from "../button/Button.jsx";
import { useTikTac } from "../../hooks/useTikTac.jsx";
import { useSelector } from "react-redux";
import { getIsGameStarted, getIsGameEnded } from "../../selectors";

export const Game = () => {
	const isGameStarted = useSelector(getIsGameStarted);
	const isGameEnded = useSelector(getIsGameEnded);

	const { handleStartGame } = useTikTac();

	return (
		<>
			{isGameStarted ? (
				<>
					<Information />
					<Field />
					{isGameEnded ? (
						<Button onClick={handleStartGame}>Начать заново</Button>
					) : null}
				</>
			) : (
				<StartGame>Начать игру</StartGame>
			)}
		</>
	);
};
