const initialState = {
	currentPlayer: "X",
	field: ["", "", "", "", "", "", "", "", ""],
	isGameStarted: false,
	isGameEnded: false,
	isDraw: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_CURRENT_PLAYER":
			return { ...state, currentPlayer: payload };
		case "SET_FIELD":
			return { ...state, field: payload };
		case "SET_IS_GAME_STARTED":
			return { ...state, isGameStarted: payload };
		case "SET_IS_GAME_ENDED":
			return { ...state, isGameEnded: payload };
		case "SET_IS_DRAW":
			return { ...state, isDraw: payload };
		case "RESTART_GAME":
			return initialState;
		default:
			return state;
	}
};
