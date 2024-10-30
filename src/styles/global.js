import {createGlobalStyle} from 'styled-components'
import bgImage from '../assets/main-image.png'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Alice", sans-serif;
}
body{
   padding: 5rem;
    width: 100%;
    height: 100%;
    
    background: url(${bgImage}) no-repeat;
    background-size: cover;

    flex-shrink: 0;
    backdrop-filter: blur(12px);
    
    color: ${({theme})=>theme.COLORS.WHITE};
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
    filter: 0.2s;
}
button:hover, a:hover{
   filter: brightness(0.9);
}
`
