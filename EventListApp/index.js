const eventList1 = document.getElementById("eventList1");
// const eventList2 = document.getElementById("eventList2");
// const eventList3 = document.getElementById("eventList3");
const startDateList = document.getElementById("startDateList");
const endDateList = document.getElementById("endDateList");
let object = [];
let events = [];
let startDates = [];
let endDates = [];

const loadDatas = async () => {
    try {
        // get the data
        const res = await fetch("http://localhost:3000/events");
        datas = await res.json();
        console.log(datas[0].eventName);
        // let startDate1 = datas[0].eventName;
        // eventList1.placeholder = `${startDate1}`;

        
        //here showing the data when we click the button

        // eventList.addEventListener("click", displayEvents(datas));
        // startDateList.addEventListener("click", displayStartDates(data));
        // endDateList.addEventListener("click", displayEndDates(data));
    } catch (err) {
        console.error(err);
    }
};
// const displayEvents = (data) => {
//     const obs = data;
//     let eventsArr = [];
  
//     for (let key in obs) {
//         eventsArr.push(key);
//     }
// };
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
//to display the object.name we need to place the object.name into the input 
//first get the object.name
//second assign the object.name to the input。placeholder

//question: how do you automatically fill the input box? is there a way to do it?
//or you can place one in a row 

// add the row go to the next row
