import React from 'react';
import {Link} from "react-router-dom";
import * as utils from '../utils';
import '../styles/ProjectDetail.css'

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: props.location.state
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if(!this.state.details) {
            fetch('/portfolio/portfolio.json')
                .then((data) => {
                    data.json().then((portfolioItems => {
                        this.setState({
                            details: portfolioItems[id]
                        });
                    }));
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        error: err
                    });
                })
        }
    }

    render() {
        if(this.state.details) {
            var {name, headline, description, headerImage, date, tags, link} = this.state.details;
            description = description.split('\n');
            
            var dateString = '';
            var language = window.navigator.userLanguage || window.navigator.language;

            if(date && date.year) {
                let dateObj = utils.createDate(date);
                if(date.day) {
                    let options = { year: 'numeric', month: 'long', day: 'numeric' };
                    dateString = dateObj.toLocaleDateString(language, options)
                } else if(date.month) {
                    let options = { year: 'numeric', month: 'long' };
                    dateString = dateObj.toLocaleDateString(language, options)
                }
            }

            
        }
        return (
            <div className="projectDetail">
                <Link to='/' className="projectDetailBack">
                    &larr; Back
                </Link>
                { 
                    this.state.details?
                        <div>
                            <h1>{name}</h1>
                            {
                                headerImage?
                                    <img src={'/' + headerImage} alt={name} className="projectDetailHeaderImage" />
                                : null
                            }
                            <h2>{headline}</h2>
                            <span className="projectDetailDate">{dateString}</span>
                            {
                                tags?
                                    tags.map((tag, i) => <span key={i} className="projectDetailTag">{tag}</span>)
                                : null
                            }
                            {
                                description.map((paragraph, i) => <p key={i}>{paragraph.trim()}</p>)
                            }
                            {
                                link?
                                    <a href={link} target="blank" className="projectDetailLink">Visit Project &rarr;</a>
                                : null
                            }
                        </div>
                        :
                        <div>
                            Loading...
                        </div>
                }
            </div>
        );
    }
}

export default ProjectDetail