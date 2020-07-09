import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 20px auto;
    padding: 10px;
`;

export const CarModelDisplay = styled.div`
    width: 300px;
    height: 250px;
    padding: 10px;
    border: 2px solid #d5d5d5;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 9px 9px #0000004f;
    background-color: #fff;
    text-decoration-style: none;

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
    box-shadow: 0px 1px 5px #000000d1;
    padding: 10px;
    background-color: #cecece;
}

.image:hover{
    width: 180px;
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
<<<<<<< HEAD
    color: #474747;
}

.btn-view{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00a6ce;
    color: white;
    padding: 10px 16px;
    margin: 0px auto;
    border: 0px;
    border-radius: 2px;
    margin-bottom: 12px;
    margin-top: -10px;
    text-decoration: none
}

.btn-view:hover{
    background-color: #0d3e91;
    cursor: pointer;
    text-decoration: none
}

.btn-view:visited {
    text-decoration: none;
    background-color: #00a77e;
    cursor: pointer;

=======
>>>>>>> 6b65b0a0cf8d9bcc638ad939015b6d2654032374
}
}
`;