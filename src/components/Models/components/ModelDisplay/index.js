import React, { Fragment } from 'react';
import * as Styled from './styled';
import { Link } from 'react-router-dom';

const ModelDisplay = (props) => {
    const renderModelList = props.modelList.map((data) => {
        return (
            <Styled.MainContainer>
                <Styled.CarModelDisplay key={data.id}>
                    {/*   <Link to={`modeldetail/${data.model}`}> */}
                    <Link to="/modeldetail">
                        <div>
                            <p><img src={data.img} alt={data.title} className="image" /></p>
                            <p className="title">{data.title}</p>
                            <button class="btn-view">View Details</button>
                        </div></Link>

                </Styled.CarModelDisplay>
            </Styled.MainContainer >
        )
    })

    return (
        <Fragment>
            {renderModelList}
        </Fragment>
    )
}

export default ModelDisplay;
