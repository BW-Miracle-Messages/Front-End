import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './HomeScreenCases.scss'
import CaseCard from './CaseCard'



const HomeScreenCases = props => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("https://miracle-messages2019.herokuapp.com/api/cases")
            .then(res => {
                console.log(res.data);
                setData(res.data);
            });
    }, []);
    

    return (
        <div className="container">
            <h1 className='intro'>Reunite Cases</h1>
            {data.map(person => (
                <CaseCard data={person} key={person.id} />
            ))}
        </div >
    );
}

export default HomeScreenCases;

