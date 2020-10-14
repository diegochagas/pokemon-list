import { createGlobalStyle } from 'styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default createGlobalStyle`
    .App {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;