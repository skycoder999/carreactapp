import styled from 'styled-components';

export const MainContainer = styled.div`
margin: 20px auto;
padding: 10px;
display: flex;
flex-wrap: wrap;
`;

export const ModelYearDisplay = styled.div`
width: 70px;
height: 15px;
padding: 5px;
border: 1px solid #d5d5d5;
justify-content: center;
align-items: center;
display: inline-flex;
border-radius: 5px;
box-shadow: 0px 9px 9px #0000004f;
background-color: #fff;
text-decoration-style: none;

:hover{
transition: border-radius 1s;
box-shadow: 0px 15px 16px #171616;
cursor: pointer;
border-radius: 3px;
background-color: #ccf3ea;
}


`;