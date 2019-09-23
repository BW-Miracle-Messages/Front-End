import React, { useState } from 'react';


const FamilyAddCase = props => {

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
                <input name='name'/>
                <input name='lastLocation' />
                <input name='currentCity' />
                <h3>For family members</h3>
                <input name='familyMemberName'/>
                <input name='relationship'/>
                <input name='familyMemberLastLocation' />
                <h3>For Volunteer</h3>
                <input name ='volunteerName' />
            </form>
        </div>
    )
}

export default FamilyAddCase;