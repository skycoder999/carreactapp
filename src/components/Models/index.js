import React, { useState, useEffect, Fragment } from 'react';
import ModelDisplay from './components/ModelDisplay';
import * as Styled from './styled';

const url = "http://localhost:8900/carModelsList";
export default function Models(props) {

    const [carModel, setCarModel] = useState([]);

    //const [filterModel, setfilterModel] = useState([]);

    /*    useEffect(() => {
           fetch(`${url}/${this.props.match.params.category}`, { method: "GET" })
               .then((res) => res.json())
               .then((data) => {
                   setfilterModel(data);
               })
       }, []); */

    useEffect(() => {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setCarModel(data);
            })
    }, []);

    return (
        <Fragment>
            <Styled.Search>
                <input placeholder="Type to Search Models..." className="search" />
            </Styled.Search>
            <Styled.ModelsList>
                <ModelDisplay modelList={carModel} />
            </Styled.ModelsList>
        </Fragment>
    )
}
