import React, { useState, useEffect, Fragment } from 'react';
import ModelDisplay from './components/ModelDisplay';
import * as Styled from './styled';

//const url = "http://localhost:8900/carModelsList";

/* http://localhost:8900/carModelsList?manufacturer=jaguar */
const Models = (props) => {
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
        fetch(`http://localhost:8900/carModelsList?manufacturer=${props.match.params.manufacturer}`, { method: 'GET' })
            //fetch(`http://localhost:8900/carModelsList?manufacturer=jaguar`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setCarModel(data);
                //     console.log(props)
                // console.log(props.match.params.manufacturer)
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

export default Models;
