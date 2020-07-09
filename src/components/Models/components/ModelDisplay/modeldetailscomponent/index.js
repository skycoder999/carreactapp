import React, { useState, useEffect, Fragment } from 'react';
import ModelYearDisplay from "./components/ModelYearDisplay/ModelYearDisplay"
import * as Styled from './styled';

const ModelDetailsComponent = () => {

    const [modelYear, setModelYear] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8900/carModeLYearsList", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setModelYear(data);
            }, [])
    }, []);

    return (
        <Fragment>
            <div style={{
                color: "#fff", display: "flex",
                flexWrap: "wrap"
            }}>
                <div><img src="https://peugeot.com.my/img/Peugeot-Hero-Banner-Latest-Model.jpg?autocrop=1" style={{ overflowX: "hidden", width: "97.75vw", height:"90%" }} /></div>
                <ModelYearDisplay yearlist={modelYear} style={{
                    color: "#fff", display: "flex",
                    flexWrap: "wrap"
                }} />
            </div>
        </Fragment >

    )
}


export default ModelDetailsComponent;