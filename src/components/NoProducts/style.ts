import styled from "styled-components";

export const NoProductsStyle = styled.div`

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    p {
        color: var(--gray50);
    }

    button {
      width: 180px;
      height: 40px;
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