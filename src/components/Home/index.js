import React, { Fragment, useState, useEffect } from 'react';
import * as Styled from './styled';
import CompanyLogos from './components/CompanyLogo';
const url = "http://localhost:8900/logosList";

const Home = () => {
    const [logosList, setLogoslist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');


    useEffect(() => {
        setLoading(true);
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setLogoslist(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    useEffect(() => {
        setLogoslist(logosList.filter(logo =>{
            return logo.manufacturer.toLowerCase().includes(search.toLowerCase()) 
        }))
    }, [search]);


    return (
        <Fragment>
            <Styled.Search>
                <input placeholder="Type to Search Company..." className="search" 
                onChange={e => setSearch(e.target.value)} />
            </Styled.Search>
            {loading ? <Styled.LogosList> Data is Loading....   </Styled.LogosList>: 
            <Styled.LogosList>
                <CompanyLogos dataList={logosList} />
            </Styled.LogosList>
}
        </Fragment>
    )
}

export default Home;
