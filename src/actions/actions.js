import {
	RESTART_GAME,
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_IS_DRAW,
	SET_IS_GAME_ENDED,
	SET_IS_GAME_STARTED,
} from "../constants";

export const restartGame = () => ({ type: RESTART_GAME });
export const startGame = () => ({ type: SET_IS_GAME_STARTED, payload: true });
export const endGame = () => ({ type: SET_IS_GAME_ENDED, payload: true });
export const drawGame = () => ({ type: SET_IS_DRAW, payload: true });
export const setCurrentPlayer = (currentPlayer) => ({
	type: SET_CURRENT_PLAYER,
	payload: currentPlayer === "X" ? "O" : "X",
});
export const setField = (field, index, currentPlayer) => ({
	type: SET_FIELD,
	payload: [
		...field.slice(0, index),
		`${currentPlayer}`,
		...field.slice(index + 1, 9),
	],
});
