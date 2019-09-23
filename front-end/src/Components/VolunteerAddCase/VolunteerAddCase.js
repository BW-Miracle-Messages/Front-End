import React, { useState } from 'react';

const VolunteerAddCase = () => {

    const handleItems = e => { 

    }

    const submitForm = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>
            Add New Case Form:
            </h1>
            <form>
                <input name='name' placeholder='Name of missing or homeless person'/>
                <input name='lastLocation' placeholder='Last known location' />
                <input name='currentCity' placeholder='Current city of last known location'/>
                <h3>For family members</h3>
                <input name='familyMemberName' placeholder='Name of family member posting'/>
                <input name='relationship' placeholder="Relationship to person"/>
                <input name='familyMemberLastLocation' placeholder="Family member location"/>
                <h3>For Volunteer</h3>
                <input name ='volunteerName' placeholder="Volunteer name"/>
            </form>
        </div>
    )
}

export default VolunteerAddCase;