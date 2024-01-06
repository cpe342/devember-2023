import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetail.css';

class DogDetail extends Component {
    render() {
        let { dog } = this.props;

        let items = dog.facts.map(function (f, i) {
            return <li key={i} className='list-group-item'>{f}</li>
        })

        return (
            <div className='DogDetail row justify-content-center mt-5'>
                <div className='col-11 col-lg-5'>
                    <div className='DogDetail-card card'>
                        <img className='card-img-top' alt={dog.name} src={dog.src}></img>
                        <div className='card-body'>
                            <h2 className='card-title'>{dog.name}</h2>
                            <h4 className='card-subtitle text-muted'>{dog.age} year{dog.age === 1 ? '' : 's'} old</h4>
                        </div>
                        <ul className='list-group list-group-flush'>
                            {items}
                        </ul>
                        <div className='card-body'>
                            <Link className='btn btn-info' to='/dogs'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DogDetail;