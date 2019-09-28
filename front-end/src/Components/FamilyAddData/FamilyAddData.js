import React, { useState } from 'react'

import {connect} from 'react-redux'
import {addFamily} from '../../Actions'


const FamilyAddData = props => {
    const { cases, isFetching, error, addFamily } = props

    const newForm = {
        family_name : '',
        age: '',
        relationship : '',
        current_location : '',
        email: '',
        case_id: `${props.match.params.id}`,
        phone: '',
    }

    const [detail, setDetail] = useState(newForm)

    const handleChange = e => { 
        e.persist();
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }
    
    const family = {
        family_name : detail.family_name,
        age: detail.age,
        relationship : detail.relationship,
        current_location : detail.current_location,
        email: detail.email,
        phone: detail.phone,
        case_id: detail.case_id
    }

    const submitForm = e => {
        e.preventDefault();
        addFamily(family)
        setDetail(newForm) 
        props.history.push('/')
    }

    return(
        <div className='form-container'>
            <h1 className="h1">
            Add Family Data:
            </h1>
            <form onSubmit={submitForm}>
                <h3>For Family Members</h3>
                <input 
                name='family_name' 
                placeholder='Name of family member posting'
                value={detail.family_name}
                onChange={handleChange}
                />

                <input 
                name='age' 
                type = 'number'
                placeholder='age'
                value={detail.age}
                onChange={handleChange}
                />

                <input 
                name='relationship' 
                placeholder="Relationship to person"
                value={detail.relationship}
                onChange={handleChange}
                />

                <input 
                name='current_location' 
                placeholder="Family member current location"
                value={detail.current_location}
                onChange={handleChange}
                />

                <input 
                name='current_location' 
                placeholder="Family member current location"
                value={detail.current_location}
                onChange={handleChange}
                />

                <input 
                name='email' 
                placeholder="email adress"
                value={detail.email}
                onChange={handleChange}
                />

                <input 
                name='phone' 
                type = 'number'
                placeholder='phone'
                value={detail.phone}
                onChange={handleChange}
                />

                <input
                name="case_id"
                type="number"
                placeholder='case_id'
                value={detail.case_id}
                onChange={handleChange}
                />

                <div className="button-container">
                <button>Submit Family Data</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cases: state.cases,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {addFamily})(FamilyAddData);