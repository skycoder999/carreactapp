import React, { Fragment } from 'react';
import * as Styled from './styled';

import { Link } from 'react-router-dom';

const CompanyLogo = (props) => {

    const renderList = props.dataList.map((data) => {
        return (
            <Styled.MainContainer>
                <Styled.CompanyLogo key={data.id}>
                    <div>
                        <p> <Link to={`/models/${data.manufacturer}`}><img src={data.img} className="image" alt={data.title} /></Link></p>
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
