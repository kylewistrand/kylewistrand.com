import React from 'react';
import '../styles/Portfolio.css';

import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'Portfolio Item 1',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                },
                {
                    name: 'Portfolio Item 2',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/300x500'
                },
                {
                    name: 'Portfolio Item 3',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/1000x1000'
                },
                {
                    name: 'Portfolio Item 4',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                },
                {
                    name: 'Portfolio Item 5',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                },
                {
                    name: 'Portfolio Item 6',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                },
                {
                    name: 'Portfolio Item 7',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                },
                {
                    name: 'Portfolio Item 8',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt cumque deleniti cum? Nam, delectus ipsa assumenda rem quis vitae dolorem dicta mollitia sit. Ad officiis eveniet ut iste alias.',
                    headerImage: 'https://via.placeholder.com/600x300'
                }
            ]
        };
    }

    render() {
        let numItems = this.state.items.length;
        return (
            <div className="portfolio">
                {
                    this.state.items.map((item, i) => {
                        return (
                            <PortfolioItem data={item} key={i} order={numItems-i} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Portfolio;