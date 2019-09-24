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
                <h5 className='grey-text text-darken-3'>Enter Sign In Details Below</h5>
                <div className='input-field'>
                    <label htmlFor='name'>Enter User Name</label>
                    <input type='text' id='name' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerLogin