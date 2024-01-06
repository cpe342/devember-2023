import React, { Component } from 'react';
import DogList from './DogList';
import DogDetail from './DogDetail';
import { Routes, Route, useParams } from 'react-router-dom';

class DogAppRoutes extends Component {
    render() {
        const { dogs } = this.props;

        const DogDetailsWrapper = ({ dogs = [] }) => {
            const { name } = useParams();

            const currentDog = dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetail dogs={dogs} dog={currentDog} />;
        }

        return (
            <Routes>
                <Route path="/dogs" element={<DogList dogs={dogs} />} />
                <Route
                    path="/dogs/:name"
                    element={<DogDetailsWrapper dogs={dogs} />}
                />
                <Route path="*" element={<DogList dogs={dogs} />}></Route>
            </Routes>
        )
    }
}

export default DogAppRoutes;