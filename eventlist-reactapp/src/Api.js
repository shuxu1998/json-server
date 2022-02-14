import axios from 'axios';
export const Api = (()=>{
    
    const url = 'http://localhost:3000/events';

    const getEvents  = async ()=>{
        let events = await axios.get(url);
        return events.data;
    }
    return{getEvents};
})();

