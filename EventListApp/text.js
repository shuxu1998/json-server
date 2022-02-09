const btnAddNew = document.getElementById("add-row");
const table = document.querySelector("table");
// const newRow = document.getElementById("new-row");

const loadDatas = async () => {
  try {
    // get the data
    const res = await fetch("http://localhost:3000/events");
    datas = await res.json();
    console.log(datas);
    var content = "";
    var newContent = "";

    //create and fill the data into table
    datas.forEach((element) => {
      content += `
            <tr class="input-row">
            <td class="header__leftGroup">
              <input value = ${element.eventName} id=${element.id
        } type="text" />
            </td>
            <td class="header__left-centerGroup">
              <input value = ${dateConverter(element.startDate)} id=${element.id
        }  type="text" />
            </td>
            <td class="header__right-centerGroup">
              <input value = ${dateConverter(element.endDate)} id=${element.id
        } type="text" />
            </td>

            <td class="header__rightGroup">
              <button class="btn">EDIT</button>
              <button class="btn">Delete</button>
            </td>
          </tr>
         `;
    });

    document.querySelector(".event-content").innerHTML = content;

    // btnAddNew.addEventListener("click", () => {
    //   console.log('click is working')
    //   newContent += `
    //   <tr class="input-row">
    //   <td class="header__leftGroup">
    //     <input value = '' id='' type="text" />
    //   </td>
    //   <td class="header__left-centerGroup">
    //     <input value = ''id = ''
    //     }  type="text" />
    //   </td>
    //   <td class="header__right-centerGroup">
    //     <input value = '' id= ''
    //     } type="text" />
    //   </td>

    //   <td class="header__rightGroup">
    //     <button class="btn">EDIT</button>
    //     <button class="btn">Delete</button>
    //   </td>
    // </tr>`;
    // table.innerHTML += newContent
    // }
    // );

    // table.innerHTML += newContent;
  } catch (err) {
    console.error(err);
  }
};

const dateConverter = (milliseconds) => {
  var convertedDate = new Date(+milliseconds);

  var year = convertedDate.getFullYear();
  var month = convertedDate.getMonth() + 1;
  var day = convertedDate.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
};
loadDatas();

//promise
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

//idea of improvement using for each method
//array1.forEach(element => console.log(element));
//datas.forEach(obj => displayEvent(onj));
//function dispaly (pbj){
// return `

// `

// const getData = (() => {
//     fetch([baseurl, path].join("/"))
//       .then((res) => res.json())
//       .then((events) => {
//         events.forEach((event, index) => {
//           displayEvent(event);
//         });
//       });
//   })();
//}

//idea of adding the row

//here showing the data when we click the button

// eventList.addEventListener("click", displayEvents(datas));
// startDateList.addEventListener("click", displayStartDates(data));
// endDateList.addEventListener("click", displayEndDates(data));

//one way to click the add button and the show
// newRow.innerHTML += `
//     <td><input
//         type="text"
//         class="header__leftGroup"
//         value="${endDate}"
//         id=endDate${id}
//         disabled=true
//      /></td>
// `;

// let arr = [1, 2, 3, 4];
// arr.forEach(arr => {
//     console.log(arr)
// })
