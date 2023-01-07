import styled from "styled-components";

export const ProductsListStyle = styled.div`
    section {
        margin: 15px 0 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        display: flex;
        overflow-x: auto;
    }

    @media (min-width: 1024px) {
        section {
            width: auto;
        }

        section > ul {
            flex-wrap: wrap;
            overflow-x: none;
        }

        section > div {
            position: fixed;
            top: 14%;
            left: 35%;
        }
    }

`