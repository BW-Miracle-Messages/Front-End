import React, { useState } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth'

const VolunteerAddCase = (props) => {
    const newForm = {
        newName : '',
        newLastLocation : '',
        newCurrentCity : '',
        newFamMemberName : '',
        newRelationship : '',
        newFamMemberLastLocation : '',
        newVolunteerName : '',
    }

    const [detail, setDetail] = useState(newForm)

    const handleChange = e => { 
        e.persist();
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        // axiosWithAuth.post('URL', {})
        setDetail(newForm) 
        props.history.push('/')
    }

    return (
        <div>
            <h1>
            Add New Case Form:
            </h1>
            <form onSubmit={submitForm}>
                <input 
                name='newName' 
                placeholder='Name of missing or homeless person'
                value={detail.newName}
                onChange={handleChange}
                />

                <input 
                name='newLastLocation'
                placeholder='Last known location'
                value={detail.newLastLocation}
                onChange={handleChange}
                />

                <input 
                name='newCurrentCity' 
                placeholder='Current city of last known location'
                value={detail.newCurrentCity}
                onChange={handleChange}
                />

                <h3>For family members</h3>
                <input 
                name='newFamMemberName' 
                placeholder='Name of family member posting'
                value={detail.newFamMemberName}
                onChange={handleChange}
                />

                <input 
                name='newRelationship' 
                placeholder="Relationship to person"
                value={detail.newRelationship}
                onChange={handleChange}
                />

                <input 
                name='newFamMemberLastLocation' 
                placeholder="Family member location"
                value={detail.newFamMemberLastLocation}
                onChange={handleChange}
                />

                <h3>For Volunteer</h3>
                <input 
                name ='newVolunteerName' 
                placeholder="Volunteer name"
                value={detail.newVolunteerName}
                onChange={handleChange}
                />
                <button>Submit Case Form</button>
            </form>
        </div>
    )
}

export default VolunteerAddCase;