import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeScreenCases.scss';
import avatar from "../../avatar.png";


const HomeScreenCases = () => {
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
                <Link to={`/individualcase/${person.id}`} key={person.id}>
                    <CaseCard data={person} key={person.id} />
                </Link>
            ))}
        </div >
    );
}

export default HomeScreenCases;


function CaseCard({data}) {
    return (
        <div className='case-card'>
            <div className='CaseDiv'>
                <div className='home'>
                    <h4><i>{data.homie_name}</i></h4>
                    <h6>Cureent State: <i>{data.current_state}</i></h6>
                    <h6>Current City: <i>{data.current_city}</i></h6>
                    <h6>Last Location: <i>{data.last_location}</i></h6>
                </div>
                <div className='avatarDiv'>
                    <img src={avatar} alt="Avatar" className="avatar"></img>
                </div>
            </div>
            <div className='btn-edit'>
                <button className='button-edit'>Edit Case</button>
                <button className='button-edit'>Add Family Data</button>
            </div>

        </div>
    );
}
