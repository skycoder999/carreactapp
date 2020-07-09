import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import * as Styled from './styled';

const ModelYearDisplay = (props) => {

    const renderYearList = props.yearlist.map((data) => {
        return (
            <Styled.MainContainer >
                <Styled.ModelYearDisplay key={data.id}>
                    {/*   <Link to={`modeldetail/${data.model}`}> */}
                    <Link to="/">
                        <div>
                            {data.modelyear}
                        </div></Link>

                </Styled.ModelYearDisplay>
            </Styled.MainContainer >
        )
    })
    return (
        <div style={{
            color: "#fff", display: "flex",
            flexWrap: "wrap", marginTop: "-70px"
        }}><h1 style={{ marginLeft: "10px" }}>Select Model Year</h1><p style={{
            color: "#fff", display: "flex",
            flexWrap: "wrap", marginTop: "-30px"
        }}>{renderYearList}</p></div>
    )

}

export default ModelYearDisplay;