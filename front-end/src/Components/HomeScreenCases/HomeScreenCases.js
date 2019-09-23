import React, { useState, useEffect } from 'react';
import axios from 'axios'





const HomeScreenCases = () => {
    const mockData = {
        name: 'mockName',
        lastLocation: 'mockLocation',
        currentCity: "mockCity",
        familyMember: 'mockFamName',
        relationship: 'Relationship',
        famMemberLastLocation: 'mockFamMemberLastLocation',
        volunteer: "mockVolunteer"
    }
    const [data, setData] = useState(mockData)

    useEffect(() => {

        axios
            .get()
            .then()

    }, [])

    return (
        <div>
            <h1>homescreen</h1>
        </div>
    )
}




export default HomeScreenCases;