import React from 'react';
import '../styles/PortfolioItem.css';

function PortfolioItem(props) {
    let data = props.data;
    return (
        <div className="portfolioItem" style={{order: props.order}}>
            <img src={data.headerImage} alt={data.name} className="portfolioItemHeaderImage"/>
            <h4 className="portfolioItemName">
                {data.name}
            </h4>
            <p className="portfolioItemDescription textClamp">
                {data.description}
            </p>
            <button className="detailsButton" >
                Details &rarr;
            </button>
        </div>
    );
}

export default PortfolioItem