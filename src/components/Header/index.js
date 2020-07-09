import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
export default function Header() {
    return (
        <Styled.Navigation>
            <div className="logo"><Link to="/">Car Accesories</Link></div>
            <ul className="nav navbar-nav">
                <li><Link to="/models" className="li">Models</Link></li>
                <li><Link to="/accesories" className="li">Accesories</Link></li>
                <li><Link to="/modeldetail" className="li">ModelDetail</Link></li>
            </ul>
        </Styled.Navigation>
    )
}
