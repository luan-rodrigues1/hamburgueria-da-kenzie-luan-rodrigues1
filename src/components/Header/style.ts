import styled from "styled-components";

export const HeaderStyle = styled.div`

   header {
      width: 100%;
      height: 115px;
      background-color: var(--gray0);
   }

   nav {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   img {
      margin: 15px 0 10px 0;
      cursor: pointer;
   }

   form {
      width: 300px;
      height: 60px;
      margin-bottom: 8px;
      padding-right: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1.5px solid var(--gray20);
      border-radius: 8px;
      background-color: var(--white);
   }

   form:hover {
      border: 1.5px solid var(--gray100);
   }

   input {
      width: 60%;
      height: 94%;
      padding-left: 5px;
      border-radius: 8px;
      border: none;
      background-color: var(--white);
      color: var(--gray50);
      outline: none
   }

   input::placeholder {
      color: var(--gray20);
   }

   span {
      color: var(--gray50);
      cursor: pointer;
   }

   span:hover {
      color: var(--gray100);
   }

   button {
      width: 85px;
      height: 33px;
      border: solid var(--colorPrimary);
      border-radius: 8px;
      background-color: var(--colorPrimary);
      color: var(--white);
   }

   button {
      width: 85px;
      height: 33px;
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

   @media (min-width: 1024px) {

      header {
         width: 100%;
         height: 90px;
      }

      nav {
         width: 75%;
         margin: 0 auto;
         flex-direction: row;
         align-items: center;
         justify-content: space-between;
      }

      form {
         width: 300px;
         height: 45px;
         margin-top: 10px;
      } 
   }
`;