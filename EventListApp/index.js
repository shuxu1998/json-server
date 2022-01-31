const eventList = document.getElementById("eventList");
const startDateList = document.getElementById("startDateList");
const endDateList = document.getElementById("endDateList");
let object = [];
let events = [];
let startDates = [];
let endDates = [];

const loadDatas = async () => {
    try {
        //get the data
        const res = await fetch("http://localhost:3000/events");
        datas = await res.json();
        console.log(datas);
        //here showing the data when we click the button
        eventList.addEventListener("click", displayEvents(datas));
        // startDateList.addEventListener("click", displayStartDates(data));
        // endDateList.addEventListener("click", displayEndDates(data));
    } catch (err) {
        console.error(err);
    }
};
const displayEvents = (data) => {
    const obs = data;
    let eventsArr = [];
    console.log(typeof data);//object
    //store the eventName to the eventsArr
    for (let key in obs) {
        eventsArr.push(key);
    }
};
// const displayStartDates = (data) => {
//     const obs = data;
//     let eventsArr = [];
//     for (let key in obs) {
//         eventsArr.push(key);
//     }
// };
// const displayEndDates = (data) => {
//     const obs = data;
//     let eventsArr = [];
//     console.log(typeof lists);
//     //store the eventName to the eventsArr
//     for (let key in obs) {
//         eventsArr.push(key);
//     }
// };

loadDatas();
