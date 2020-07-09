import styled, { css } from 'styled-components';

export const Footer = styled.div`
.logo{
  position: relative;
    z-index: 59;
    margin-bottom: -48px;
    color: #fff;
    margin-left: 20px;
    font-size: 36px;
    width: 250px;
}

ul {
    list-style-type: none;
    margin: -0.30px;
    padding: 0;
    overflow: hidden;
    background-color: #000;
  }
  
  li {
    float: right;
    color: #fff !important;
    margin-right: 30px;
  }
  
  li a{
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #111;
  }
`;