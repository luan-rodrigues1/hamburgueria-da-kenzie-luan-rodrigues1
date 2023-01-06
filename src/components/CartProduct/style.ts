import styled from "styled-components";

export const CartProductStyle = styled.li`

    img {
        width: 65px;
        height: 65px;
        background-color: var(--gray20);
        border-radius: 5px;
    }

    .boxInfo {
        background-color: var(--gray0);
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 10px;
    }

    .boxInfo > span {
        color: var(--gray50);
    }

    button {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: solid var(--feedBackNegative);
        background-color: var(--feedBackNegative);
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--ColorSecondary);
        border: solid var(--ColorSecondary);
    }

    .buttonAdd {
        border: solid var(--colorPrimary);
        background-color: var(--colorPrimary);
    }

    .buttonAdd:hover {
        border: solid var(--ColorPrimary50);
        background-color: var(--ColorPrimary50);
    }

    .boxButton {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 3px;
    }
`