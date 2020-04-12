import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 20px auto;
    padding: 10px;
`;

export const CarModelDisplay = styled.div`
width: 260px;
height: 210px;
padding: 10px;
border: 2px solid #d5d5d5;
justify-content: center;
align-items: center;
display: flex;
border-radius: 5px;
box-shadow: 0px 9px 9px #0000004f;
background-color: #fff;

:hover{
transition: border-radius 1s;
box-shadow: 0px 15px 16px #171616;
cursor: pointer;
border-radius: 20px;
}

.image{
width: 175px;
height: 110px;
justify-content: center;
align-items: center;
display: flex;
box-shadow: 0px 1px 5px #735f5f;
padding: 10px;
}

.image:hover{
    width: 160px;
    height: 110px;  
    box-shadow: 0px 5px 10px #735f5f;
}

.title{
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    margin-top: 0px;
    letter-spacing: -0.75px;
    font-weight: 600;
    font-family: sans-serif;
}
}
`;