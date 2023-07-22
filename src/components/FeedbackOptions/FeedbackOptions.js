import React from "react";
import PropTypes from "prop-types";
import './FeedbackOptions.Style.css'

const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <button type="button" onClick={() => onClickFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;