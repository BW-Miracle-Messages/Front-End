import React from 'react';


const VolunteerLogin = (props) => {
 const handleChange = (e) =>{
        console.log(e)
    };

    const handleSubmit =(e)=>{
        console.log(e)
    }
    return (
        <div className='container'> 
            <form onSubmit={handleSubmit} className='form'>
                <h5 className='grey-text text-darken-3'>Enter Details Below</h5>
                <div className='input-field'>
                    <label htmlFor='name'>Full Nmae</label>
                    <input type='text' id='name' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='number'>Phone</label>
                    <input type='number' id='number' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn blue ligthen-1 z-depth-0'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerLogin