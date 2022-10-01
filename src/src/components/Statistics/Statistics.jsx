import React from "react";
import PropTypes from 'prop-types';
import { TextResult, Results } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
    <ul>
        <li>
            <TextResult>Good: <Results>{good}</Results> </TextResult>
        </li>
        <li>
            <TextResult>Neutral: <Results>{neutral}</Results></TextResult>
        </li>
         <li>
            <TextResult> Bad: <Results>{bad}</Results></TextResult>
        </li>
        <li>
            <TextResult> Total: <Results>{total}</Results></TextResult>
        </li>
        <li>
            <TextResult> Positiv feedback: <Results>{positiveFeedback}</Results></TextResult>
        </li>
    </ul>              
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
};
