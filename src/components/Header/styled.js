import styled, { css } from 'styled-components';

export const Navigation = styled.div`

.logo{
  position: relative;
  z-index: 59;
  margin-bottom: -51px;
  color: #fff;
  margin-left: 20px;
  font-size: 38px;
  width: 450px;
}

.logo a{
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

.logo a:hover{
  color:red;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 10px;
    overflow: hidden;
    background-color: #000;
  }
  
  li {
    float: right;
    color: #fff !important;
    text-transform: uppercase;
  }
  
  li a{
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #f40202;
  }
`;