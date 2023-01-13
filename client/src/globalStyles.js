import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
    }
    body {
        background-color: #FFFCF8;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Fraunces', serif;
    }

    h1 {
        font-size: 2.5rem;
        letter-spacing: 0.391rem;
        text-transform: uppercase;
    }

    h2 {
        font-size: 2rem;
        letter-spacing: -0.014rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1rem;
        text-transform: uppercase;
    }


    p {
        line-height: 1.625rem;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--dark-grey);
    }

    :root {
        --white: #FFFFFF;
        --light-cream: #FFFCF8;
        --grey: #808397;
        --dark-grey: #24303E;
        --yellow: #FBD600;
        --red: #FE7766;
    }
`;