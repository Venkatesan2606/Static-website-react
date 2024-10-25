import React from 'react'
import MainContent1 from './MainContent1';
import MainContent2 from './MainContent3';
import MainContent3 from './MainContent2';



export default function AllMain(){
    return(
        <div className='container d-flex flex-row flex-wrap'>
            <MainContent1 />
            <MainContent2 />
            <MainContent3 /> 
        </div>
    );
}