import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <>
        <NavBar />
        <ItemListContainer greeting="Sara les da la bienvenida a todos" />
        </>
    );
};

export default App;