import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Counter(props) {
	return (
		<div className="d-flex bg-dark justify-content-center display-4 text-white align-content-center">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="fourth">{props.fourthDigit % 10}</div>
			<div className="third">{props.thirdDigit % 10}</div>
			<p>:</p>
			<div className="second">{props.secondDigit % 10}</div>
			<div className="first">{props.firstDigit % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	fourthDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	firstDigit: PropTypes.number
};
