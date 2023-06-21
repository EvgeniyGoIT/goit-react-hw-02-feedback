import React from "react";

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

export default FeedbackOptions;