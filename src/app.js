import React from 'react';
import {Header} from './header';
import {Body} from './album';
import {Thumbnails} from './thumbnail';
import {Footer} from './footer';

function App() {
    return(
        <>
        <Header/>
        <Body/>
        <Thumbnails/>
        <Footer/>
        </>
    );
}

export default App;