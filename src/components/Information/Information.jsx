import { InformationLayout } from "./InformationLayout/InformationLayout.jsx";
import { Timer } from "../Timer/Timer.jsx";
import { useSelector } from "react-redux";
import { getCurrentPlayer, getIsDraw, getIsGameEnded } from "../../selectors";

export const Information = () => {
	const currentPlayer = useSelector(getCurrentPlayer);
	const isDraw = useSelector(getIsDraw);
	const isGameEnded = useSelector(getIsGameEnded);
	let playerMove =
		!isDraw && !isGameEnded ? (
			<span>
				Текущий ход:{" "}
				<span className={`header__info__move`}>{currentPlayer}</span>
			</span>
		) : null;
	const timer =
		!isDraw && !isGameEnded ? (
			<span>
				Текущее время игры: <Timer />{" "}
			</span>
		) : null;
	const winOrDraw = isGameEnded ? (
		!isDraw ? (
			<span>
				Победа:{" "}
				<span className={`header__info__move`}>{currentPlayer}</span>
			</span>
		) : (
			<span>
				<span className={`header__info__move`}>Ничья</span>
			</span>
		)
	) : null;

	return (
		<>
			<InformationLayout
				playerMove={playerMove}
				timer={timer}
				winOrDraw={winOrDraw}
			/>
		</>
	);
};
