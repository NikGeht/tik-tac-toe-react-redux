import "./informationLayout.scss";

export const InformationLayout = ({ timer, playerMove, winOrDraw }) => {
	return (
		<header className={`header`}>
			<h1 className={`header__title`}>Tik-tac-toe</h1>
			<div className={`header__info`}>
				{timer}
				{playerMove}
				{!playerMove ? winOrDraw : null}
			</div>
		</header>
	);
};
