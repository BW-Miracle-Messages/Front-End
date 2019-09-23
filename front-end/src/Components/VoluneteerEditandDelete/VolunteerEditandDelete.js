import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './VolunteerEditandDelete.scss'


const VolunteerEditandDelete = props => {

    const initialCaseDetails = {
        id: `${props.match.params.id}`,
        name: '',
        lastLocation: '',
        currentCity: '',
        familyMemberName: '',
        relationship: '',
        famMemberLastLocation : '',
        volunteer: ''
    }

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
        <div>
            <form onSubmit={submit}>
                <input name='name' value={detail.name}/>
                <input name='lastLocation' value={detail.lastLocation}/>
                <input name='currentCity' value={detail.currentCity}/>
                <h3>For family members</h3>
                <input name='familyMemberName' value={detail.familyMemberName}/>
                <input name='relationship' value={detail.relationship}/>
                <input name='famMemberLastLocation' value={detail.famMemberLastLocation}/>
                <h3>For Volunteer</h3>
                <input name ='volunteer' value={detail.volunteer}/>
                <button>Save Edit</button>
                <button onClick={deleteCase}>Delete Case Form</button>
            </form>
        </div>
    )
}

export default VolunteerEditandDelete;