import styled from "@emotion/styled";

export const FeedbackList = styled.ul`
    display: flex;
`;

export const FeedbackItem = styled.li`
    margin-right: 30px;
`;

export const FeedbackBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: inherit;
    font-size: 16px;
    background-color: #efd1d5;

    width: 100px;
    height: 30px;

    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #c55063;
        transform: scale(1.2);
    }
`;