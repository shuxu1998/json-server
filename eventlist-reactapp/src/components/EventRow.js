import React from "react";

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

class EventRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: props.eventName,
    //   startDate: dateConverter(props.startDate),
    startDate:props.startDate,
    //   endDate: dateConverter(props.endDate),
    endDate:props.endDate
    };
  }

  render() {
    return (
      <tr className="input-row">
        <td className="header__leftGroup">
          <input value={this.state.eventName} type="text" />
        </td>
        <td className="header__left-centerGroup">
          <input value={dateConverter(this.state.startDate)} type="text" />
        </td>
        <td className="header__right-centerGroup">
          <input value={dateConverter(this.state.endDate)} type="text" />
        </td>

        <td className="header__rightGroup">
          <button onClick={this.edit} className="btn">
            EDIT
          </button>
          <button onClick={this.delete} handlerclass="btn">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default EventRow;
