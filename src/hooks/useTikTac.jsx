import { WIN_PATTERNS } from "../constants.js";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPlayer, getField, getIsGameEnded } from "../selectors";
import {
	drawGame,
	endGame,
	restartGame,
	setCurrentPlayer,
	setField,
	startGame,
} from "../actions";

export const useTikTac = () => {
	const dispatch = useDispatch();
	const currentPlayer = useSelector(getCurrentPlayer);
	const field = useSelector(getField);
	const isGameEnded = useSelector(getIsGameEnded);

	const handleStartGame = () => {
		dispatch(restartGame());
		dispatch(startGame());
	};

	function processGameTurn(fieldLocal) {
		if (isGameEnded) return;
		const isFieldFull = fieldLocal.every((value) => value !== "");
		const isCurrentPlayerWinner = WIN_PATTERNS.some((indexes) =>
			indexes.every((value) => fieldLocal[value] === currentPlayer)
		);

		if (isCurrentPlayerWinner) {
			dispatch(endGame());
			return;
		}

		if (isFieldFull) {
			dispatch(endGame());
			dispatch(drawGame());
			return;
		}
		dispatch(setCurrentPlayer(currentPlayer));
	}

	const onClickButton = (e) => {
		const index = Number(e.target.dataset.index);
		if (field[index] !== "" || isGameEnded) return;
		dispatch(setField(field, index, currentPlayer));
		const fieldLocal = [
			...field.slice(0, index),
			`${currentPlayer}`,
			...field.slice(index + 1, 9),
		];
		processGameTurn(fieldLocal);
	};

	return {
		handleStartGame,
		onClickButton,
	};
};
