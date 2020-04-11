import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 20px auto;
    padding: 10px;
`;

export const CarModelDisplay = styled.div`
    width: 300px;
    height: 200px;
    padding: 10px;
    border: 2px solid #d5d5d5;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 9px 9px #0000004f;
    background-color: #fff;

:hover{
    border: 2px solid #ece3e3;
    transition: border 1s;
}


.image{
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    display: flex;
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