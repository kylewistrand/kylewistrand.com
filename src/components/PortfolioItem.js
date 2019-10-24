import React from 'react';
import {Link} from "react-router-dom";
import '../styles/PortfolioItem.css';

function PortfolioItem(props) {
    let data = props.data;
    return (
        props.placeholder ?
            <div className={"portfolioItem loading " + props.class}>
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Loading" className="portfolioItemHeaderImage" />
                <h4 className="portfolioItemName">
                    Loading...
                </h4>
                <div className="portfolioItemDescription placeholder"></div>
                <button className="detailsButton" disabled>
                    Details &rarr;
                </button>
            </div>
        :
            <Link to={{ pathname: '/project/' + props.id, state: props.data }} className="portfolioItem" style={{ order: props.order }}>
                <img src={data.headerImage} alt={data.name} className="portfolioItemHeaderImage" />
                <h4 className="portfolioItemName">
                    {data.name}
                </h4>
                <p className="portfolioItemDescription textClamp">
                    {data.headline}
                </p>
                <div className="detailsButton">
                    Details &rarr;
                </div>
            </Link>
    );
}

export default PortfolioItem