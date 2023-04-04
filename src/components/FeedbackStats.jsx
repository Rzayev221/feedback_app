import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ""); //regular expression to replace 8.0 with 8

  return (
    <div className="feedback-stats">
      <h4>feedbacks {feedback.length}</h4>
      <h4>avg. rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = { feedback: PropTypes.array.isRequired };

export default FeedbackStats;
