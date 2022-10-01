import React from "react";
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, FeedbackBtn } from './Feedback.styled';

export const FeedbackOptions = ({options, onClickBtn}) => {
    return (   
        <FeedbackList>
            {options.map(option => (
                <FeedbackItem key={option}>
                    <FeedbackBtn
                        type="button"
                        name={option}
                        onClick={onClickBtn}
                        >
                        {option}
                    </FeedbackBtn>
                </FeedbackItem>
            ))
            }
        </FeedbackList>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickBtn: PropTypes.func.isRequired,
};