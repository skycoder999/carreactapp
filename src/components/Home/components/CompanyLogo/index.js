import React, { Fragment } from 'react';
import * as Styled from './styled';

const CompanyLogo = (props) => {

    const renderList = props.dataList.map((data) => {
        return (
            <Styled.MainContainer>
                <Styled.CompanyLogo key={data.id}>
                    <div>
                        <p> <img src={data.img} className="image" alt={data.title} /></p>
                        <p className="title">{data.title}</p>
                    </div>
                </Styled.CompanyLogo>
            </Styled.MainContainer>

        )
    });

    return (
        <Fragment>
            {renderList}
        </Fragment>
    )

}

export default CompanyLogo;
