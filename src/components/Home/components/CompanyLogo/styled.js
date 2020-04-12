import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
    margin: 20px auto;
    padding: 10px;
`;

export const CompanyLogo = styled.div`
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
    width: 200px;
    height: 150px;
    justify-content: center;
    align-items: center;
    display: flex;
   // box-shadow: 0px 1px 5px #735f5f;
    padding: 20px;
}

.image:hover{
    width: 210px;
    height: 155px;  
    /* box-shadow: 0px 5px 10px #735f5f; */
}

.title{
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    margin-top: 0px;
    letter-spacing: 2.25px;
    font-weight: 600;
}
`;