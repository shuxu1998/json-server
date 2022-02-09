console.log("start")

//get the data form server.
// $.get('http://localhost:3000/events',  // url
//       function (data, textStatus, jqXHR) {  // success callback
//           alert('status: ' + textStatus + ', data:' + data);
//           console.log(data)
//           let mydata = data;
//     });


//create table and dipaly data
$(document).ready(function(){
    $.get("http://localhost:3000/events/",function(data,status){
        var mydata = data
        var content = ""
        mydata.forEach(function(dt){
            console.log(dt)
            $("#tdata").append(
                "<tr class='input-row'> "+
                "<td class = 'header__leftGroup'>" + dt.eventName+ "</td>"+
                "<td class = 'header__left-centerGroup'>" +dateConverter(dt.startDate)+"</td>"+
                "<td class = 'header__right-centerGroup'><input type = 'text'value = ''></td>" +
                "<td class = 'header__rightGroup'><button class='btn'>EDIT</button><button class='btn' id = 'delete_btn'>Delete</button></td>"+
                "</tr> "

            )

        });

    })
    //add row
    $("#add-row").click(function(){
        var addcontrols = "<tr class='input-row'> "
        addcontrols += "<td class = 'header__leftGroup'><input type = 'text'value = ''></td>"
        addcontrols += "<td class = 'header__left-centerGroup'><input type = 'text'value = ''></td>"
        addcontrols += "<td class = 'header__right-centerGroup'><input type = 'text'value = ''></td>"
        addcontrols += "<td class = 'header__rightGroup'><button class='btn'>EDIT</button><button id = 'delete_btn' class= 'btn'>Delete</button></td>"
        addcontrols += "</tr> "
        $("table tbody").append(addcontrols);

    })
    //delete row
    $("table tbody").on('click','#delete_btn',function(){
        $(this).closest('tr').remove();
        

    })


})
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