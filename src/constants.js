export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const RESTART_GAME = "RESTART_GAME";
export const SET_IS_GAME_STARTED = "SET_IS_GAME_STARTED";
export const SET_IS_GAME_ENDED = "SET_IS_GAME_ENDED";
export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
export const SET_FIELD = "SET_FIELD";
export const SET_IS_DRAW = "SET_IS_DRAW";
