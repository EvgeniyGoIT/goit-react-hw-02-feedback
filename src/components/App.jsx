import React from "react";
import FeedbackWidget from './FeedbackWidget/FeedbackWidget';
import '../index.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
      <FeedbackWidget/>
    </div>
  );
};
