import React, { Fragment, useState, useEffect } from 'react';
import * as Styled from './styled';
import CompanyLogos from './components/CompanyLogo';
const url = "http://localhost:8900/logosList";

const Home = () => {
    const [logosList, setLogoslist] = useState([]);
    const [filtercompany, setFilterCompany] = useState([]);

    useEffect(() => {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setLogoslist(data);
            })
    }, []);

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        this.props.userText(event.target.value)
    };

    return (
        <Fragment>
            <Styled.Search>
                <input placeholder="Type to Search Company..." className="search" onChange={onChangeHandler} />
            </Styled.Search>
            <Styled.LogosList>
                <CompanyLogos dataList={logosList} />
            </Styled.LogosList>
        </Fragment>
    )
}

export default Home;
