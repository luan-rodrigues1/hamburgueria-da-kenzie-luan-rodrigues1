import styled from "styled-components";

export const CartTotalStyle = styled.div`
    .boxTotal {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--gray0);
        margin-bottom: 15px;
        padding-bottom: 10px;
    }

    .boxTotal > div {
        width: 92%;
        display: flex;
        margin: 0 auto;
        border-top: 1.8px solid var(--gray20);
        margin-top: 10px;
        padding-top: 15px;
        justify-content: space-between;
    }

    .boxTotal > div > span {
        color: var(--gray50);
    }

    .boxTotal > button {
        width: 92%;
        height: 40px;
        border: none;
        background-color: var(--gray20);
        border-radius: 6px;
        color: var(--gray50);
        margin: 18px auto 0 auto;
        cursor: pointer;
    }

    .boxTotal > button:hover {
        background-color: var(--gray50);
        color: var(--gray0);
    }
`   