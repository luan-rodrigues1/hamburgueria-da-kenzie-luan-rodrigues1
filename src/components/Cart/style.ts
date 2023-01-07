import styled from "styled-components";

export const CartStyle = styled.div`
    aside {
        width: 95%;
        margin: 0 auto;
        background-color: var(--gray0);
    }

    aside > .emptyBag {
        width: 100%;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    aside > .emptyBag > span {
        color: var(--gray50);
    }

    .titleCart {
       width: 100%;
       height: 50px;
       background-color: var(--colorPrimary);
       border-top-left-radius: 8px;
       border-top-right-radius: 8px;
    }

    .titleCart > h2 {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        color: var(--white);
        display: flex;
        align-items: center;
    }

    ul {
        width: 100%;
        max-height: 275px;
        background-color: var(--gray0);
        gap: 10px;
        padding-top: 5px;
        overflow-y: auto;
    }

    li {
        width: 92%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        background-color: var(--gray0);
    }

    @media (min-width: 1024px) {
        aside {
            width: 420px;
            min-width: 320px;
            margin-top: 15px;
        }
    }

`