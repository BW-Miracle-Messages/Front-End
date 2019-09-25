import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './VolunteerEditandDelete.scss'


const VolunteerEditandDelete = props => {
    console.log(props.caseData)

    const initialCaseDetails = {
        id: `${props.match.params.id}`,
        homie_name: '',
        current_city: '',
        current_state: '',
        last_location : '',
        hometown: ''
        // familyMemberName: '',
        // relationship: '',
        // famMembercurrent_city : '',
        // volunteer: ''
    };

    useEffect(() => {

    }, [props.match.params.id, props.caseData])

    const [detail, setDetail] = useState(initialCaseDetails);

    const handleChange = e => {
        e.persist();
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }
    const submit = e => {
        e.preventDefault();
        // axios PUT request and then props.history.push to '/home-volunteer'        
    }
    const deleteCase = e => {
        e.preventDefault();
        // axios DELETE request and then props.history.push to '/home-volunteer'
    }
    

    return (
        <div className='form-container'>
            <h1 className='h1'>
                 Edit Case Form: 
                 </h1>
            <form onSubmit={submit}>
                <input 
                name='homie_name' 
                value={detail.homie_name}
                onChange={handleChange}
                />

                <input
                name='current_city' 
                value={detail.current_city}
                onChange={handleChange}
                />

                <input 
                name='current_state' 
                value={detail.current_state}
                onChange={handleChange}
                />

                <input
                name='last_location' 
                value={detail.last_location} 
                onChange={handleChange}
                />

                <input 
                name="hometown" 
                value={detail.hometown} 
                onChange={handleChange}
                />

                {/* <h3>For family members</h3>
                <input name='familyMemberName' value={detail.familyMemberName}/>
                <input name='relationship' value={detail.relationship}/>
                <input name='famMembercurrent_city' value={detail.famMembercurrent_city}/>
                <h3>For Volunteer</h3>
                <input name ='volunteer' value={detail.volunteer}/> */}
                <div className="button-container" >
                <button>Save Edit</button>
                <button onClick={deleteCase}>Delete Case Form</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerEditandDelete;