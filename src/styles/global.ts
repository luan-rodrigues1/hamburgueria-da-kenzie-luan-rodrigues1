import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
  --colorPrimary: #27ae60;
  --ColorPrimary50: #93d7af;
  --ColorSecondary: #eb5757;
  --gray100: #333333;
  --gray50: #828282;
  --gray20: #e0e0e0;
  --gray0: #f5f5f5;
  --feedBackNegative: #e60000;
  --feedBackWarning: #ffcd07;
  --feedBackSucess: #168821;
  --feedBackInformation: #155bcb;
  --white: #ffffff;
}

.none {
  display: none;
}

.loading {
    animation: is-rotating 1s infinite;
    width: 50px;
    height: 50px;
    border: 6px solid var(--gray0);
    border-top-color: var(--colorPrimary);
    border-radius: 50%;

}

@keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}


@media (min-width: 1024px) {
    .App > main {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    ul::-webkit-scrollbar {
        width: 3px; 
    }

    ul::-webkit-scrollbar-thumb {
        background-color: var(--colorPrimary);
        border-radius: 20px;       
        border: 3px solid none;  
    }
}

`