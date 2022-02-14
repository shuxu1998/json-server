import ReactDOM from "react-dom";
import React from "react";
import "../styles/index.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  //add 
  add = () => {
    this.setState({
      items:[]
    });
  };
  //delete the whole table
  delete = () => {
    this.setState({
      items: [],
      DataisLoaded: false

    })
  };
  edit = () => {};
  save = () => {};

  render() {
    const { DataisLoaded, items } = this.state;
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

    console.log(items);

    return (
      <div className="event-container">
        <div className="table-container">
          <button onClick={this.add} className="btn">
            Add New
          </button>
          <header className="event-header">
            <div className="header__leftGroup">
              <h3>Event name</h3>
            </div>
            <div className="header__left-centerGroup">
              <h3>start date</h3>
            </div>
            <div className="header__right-centerGroup">
              <h3>end date</h3>
            </div>
            <div className="header__rightGroup">
              <h3>Actions</h3>
            </div>
          </header>
          <table class="event-content">
            <tbody>
              {items.map((item) => (
                <tr className="input-row">
                  <td className="header__leftGroup">
                    <input value={item.eventName} type="text" />
                  </td>
                  <td className="header__left-centerGroup">
                    <input value={dateConverter(item.startDate)} type="text" />
                  </td>
                  <td className="header__right-centerGroup">
                    <input value={dateConverter(item.endDate)} type="text" />
                  </td>

                  <td className="header__rightGroup">
                    <button onClick={this.edit} class="btn">
                      EDIT
                    </button>
                    <button onClick={this.delete} handlerclass="btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
