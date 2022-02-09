// Get all Events
fetch("http://localhost:3000/events")
    .then((response) => response.json())
    .then((json) => console.log(json));

// Create a new Event
fetch("http://localhost:3000/events", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        eventName: "TEST",
        startDate: "1641790800000",
        endDate: "1641790800000",
    }),
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// Delete an exist Event
fetch("http://localhost:3000/events/1", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//   // Update an exist Event
fetch("http://localhost:3000/events/2", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        eventName: "TEST-CHANGED",
        startDate: "1641790800000",
        endDate: "1641790800000",
    }),
})
    .then((response) => response.json())
    .then((json) => console.log(json));
//write a promise function

//for each

//reduce

//map
//for each
function cb(item, index, arr) {
    console.log(item, index, arr);
}

Array.prototype.forEach = function (cb) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
};
arr.forEach(cb);
//reduce
Array.prototype.reduce = function (cb2, init) { 
    let result;
     for (let i = 0; i < this.length;i++){

        if(i===0){
            let output = cb2[init, this[i], i, this]
            result = output
        }else{
            let output = cb2[result,this[i],i,this]
            result = output;
        }
        return result
     }
};
function cb2(acc,begin) { console.log(acc,begin)}


