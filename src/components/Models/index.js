import React, { useState, useEffect, Fragment } from 'react';
import ModelDisplay from './components/ModelDisplay';
import * as Styled from './styled';

const url = "http://localhost:8900/carModelsList"
export default function Models() {

    const [carModel, setCarModel] = useState([]);

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
