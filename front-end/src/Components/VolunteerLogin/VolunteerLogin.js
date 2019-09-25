import React, { useState } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

const VolunteerLogin = (props) => {

    const credentials = {
        username : '',
        password: ''
    }

    const [login, setLogin] = useState(credentials)

	const handleChange = (e) => {
        // console.log(e)
        e.persist();
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('https://miracle-messages2019.herokuapp.com/api/auth/login', login)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/')
            console.log(res)
        })
        .catch(err => console.log(err))
		// console.log(e);
	};
	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="form">
				<h5 className="grey-text text-darken-3">Enter Sign In Details Below</h5>
				<div className="input-field">
					<label htmlFor="name">Enter User Name</label>
					<input type="text" name='username' placeholder="Enter your username" onChange={handleChange} value={login.username} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" name='password' placeholder='Enter your password' onChange={handleChange} value={login.password}/>
				</div>
				<div className="input-field">
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default VolunteerLogin;
