import styled from "styled-components";

export const ProductStyle = styled.div`

    li {
        width: 265px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;
        border: 2px solid var(--gray20);
        border-radius: 8px;
        background-color: var(--gray0);
    }

    li:hover {
        border: 2px solid var(--colorPrimary);
    }

    img {
        height: 45%;
    }

    div {
        width: 100%;
        height: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 10px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: var(--white);
    }

    h2 {
        margin-left: 12px;
    }

    span {
        margin-left: 12px;
        color: var(--gray50);
    }

    h4 {
        margin-left: 12px;
        color: var(--colorPrimary);
    }
    
    button {
      width: 100px;
      height: 35px;
      margin-left: 12px;
      cursor: pointer;
      border: 2px solid var(--colorPrimary);
      border-radius: 10px;
      background-color: var(--colorPrimary);
      color: var(--white);
      cursor: pointer;
   }

   button:hover {
      background-color: var(--white);
      color: var(--colorPrimary);
      border: 2px solid var(--colorPrimary);
   }

`