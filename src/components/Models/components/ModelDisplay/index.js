import React, { Fragment } from 'react';
import * as Styled from './styled';

const ModelDisplay = (props) => {

    const renderModelList = props.modelList.map((data) => {
        return (
            <Styled.MainContainer>
                <Styled.CarModelDisplay key={data.id}>
                    <div>
                        <p><img src={data.img} alt={data.title} className="image" /></p>
                        <p className="title">{data.title}</p>
                    </div>
                </Styled.CarModelDisplay>
            </Styled.MainContainer>
        )
    })

    return (
        <Fragment>
            {renderModelList}
        </Fragment>
    )
}

export default ModelDisplay;
