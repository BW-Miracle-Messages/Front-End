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

    // CaseCard

//  function CaseCard({data}, props) {
    
//     const goToEdit = () => {
//         props.history.push(`/volunteer-edit-delete-case/${props.match.params.id}`)
//         console.log(CaseCard)
//     }
//     return (
//         <div className='case-card' key={data.id}>
//             <h4><i>{data.homie_name}</i></h4>
//             <h6>Current State: <i>{data.current_state}</i></h6>
//             <h6>Current City: <i>{data.current_city}</i></h6>
//             <h6>Last Location: <i>{data.last_location}</i></h6>
//             <div className='btn-edit'>
//                 <button className='button-edit' onClick={goToEdit}>Edit Case</button>
//                 <button className='button-edit'>Add Family Data</button>
//             </div>

//         </div>
//     );
//   }


export default HomeScreenCases;

