import React from 'react';
import * as utils from '../utils';
import '../styles/Portfolio.css';

import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: [],
            error: null
        };

        this.numberLoadingItems = 3;
    }

    componentDidMount() {
        fetch('/portfolio/portfolio.json')
            .then((data) => {
                data.json().then((portfolioItems => {
                    this.setState({
                        loading: false,
                        items: portfolioItems
                    });
                }));
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    loading: false,
                    error: err
                });
            })
    }

    render() {
        let numItems = this.state.items.length;
        if(!this.state.loading) {
            var projects = this.state.items.sort((a,b) => utils.createDate(b.date) - utils.createDate(a.date));
            console.log(projects);
        }
        return (
            <div className="portfolio">
                {
                    this.state.loading?
                        Array.apply(null, Array(this.numberLoadingItems)).map((x, i) =>
                            <PortfolioItem placeholder={true} key={i} class={"delay" + (this.numberLoadingItems - 1 - i)} />
                        )
                        
                    :
                        projects.map((item, i) =>
                                <PortfolioItem data={item} key={i} order={numItems-i} id={i} />
                        )
                }
            </div>
        );
    }
}

export default Portfolio;