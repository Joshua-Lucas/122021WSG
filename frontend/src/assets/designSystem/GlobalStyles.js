import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Theme } from './Theme.js';

export const GlobalStyles = createGlobalStyle`
        ${normalize()}


    html {
         font-size: 16px;
         box-sizing: border-box;
     }
     * , *:before, *:after {
         box-sizing: inherit;
     }
     
     body {
         margin: 0;
         background-color: ${Theme.colors.primary};
         color: ${Theme.colors.secondary};
         font-family:  'Open Sans', sans-serif;
         
         
     }
     
     /* Reset margins and paddings on most elements */
     body,
     h1,
     h2,
     h3,
     h4,
     h5,
     h6,
     ul,
     ol,
     li,
     p,
     pre,
     blockquote,
     div,
     button,
     figure,
     svg,
     hr {
     margin: 0;
     padding: 0;
     }
     
     /* Removes discs from ul */
     ul {
     list-style: none;
     }
     a{
         text-decoration: none;
         color: inherit;
     }
     h1,
     h2,
     h3,
     h4,
     h5,
     h6,
     a,
     button {
        font-weight: 300;

     }

`;
