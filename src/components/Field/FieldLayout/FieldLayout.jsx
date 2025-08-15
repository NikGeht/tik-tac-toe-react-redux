import "./fieldLayout.scss";

import { useTikTac } from "../../../hooks/useTikTac.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getField, getIsGameEnded } from "../../../selectors";

export const FieldLayout = () => {
	const dispatch = useDispatch();
	const { onClickButton } = useTikTac(dispatch);

	const field = useSelector(getField);
	const isGameEnded = useSelector(getIsGameEnded);

	return (
		<div className={`game__container`}>
			<div className={`game__container__field`}>
				{field.map((value, index) => {
					return (
						<button
							data-index={index}
							className={value}
							key={index}
							disabled={!!value || isGameEnded}
							onClick={(e) => onClickButton(e)}
						>
							{value}
						</button>
					);
				})}
			</div>
		</div>
	);
};
