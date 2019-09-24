import axios from 'axios';

export const POSTING_HOMIE_START = 'POSTING_HOMIE_START';
export const SUBMIT_HOMIE = 'SUBMIT_HOMIE';

export const addHomie = (homie) => {
    return(dispatch) => {
        dispatch({ type: POSTING_HOMIE_START});
        axios
        .post('https://miracle-messages2019.herokuapp.com/api/cases', homie)
        .then(res => {
            console.log(res.data)
            console.log(homie)
            dispatch({ type: SUBMIT_HOMIE, payload: res.data });
        })
        .catch(err => console.log(err))
    }
}