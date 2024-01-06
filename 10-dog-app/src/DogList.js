import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center'>Doglist</h1>
                <div className='row'>
                    {this.props.dogs.map(d => (
                        <div className='Dog col-md-6 col-lg-4 text-center' key={d.name}>
                            <h3>
                                <img alt={d.name} src={d.src}></img>
                                <Link className='underline mt-3' to={`/dogs/${d.name}`}>{d.name}</Link>
                            </h3>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default DogList;