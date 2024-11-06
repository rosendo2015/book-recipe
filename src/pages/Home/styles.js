import styled from "styled-components";

export const HomeContainer = styled.main`
margin: auto;
width: 50rem;
padding: 1.5rem;
background: ${({theme})=>theme.COLORS.bg_surface};
border-radius: 1.5rem;
h1{
    color: ${({theme})=>theme.COLORS.text_primary};
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 140%; /* 3.5rem */
}
h2{
    color: ${({theme})=>theme.COLORS.text_primary};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%; /* 2.25rem */
}
p,
ul li{
    color: ${({theme})=>theme.COLORS.text_secondary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
}
p{
    margin-top: 0.75rem;
}
.noListDecoration{
    list-style: none;
    margin: 0.75rem 0;
}
ul{
    margin: 0.9rem;
}

` 