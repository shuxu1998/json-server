import React from "react";
import { Api } from "./Api";
import "./styles/index.css";
import AddEvents from "./components/AddEvents";
import EventRow from "./components/EventRow";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventLists: [],
      DataisLoaded: false,
    };
  }

  async componentDidMount() {
    const eventLists = await Api.getEvents();
    // console.log(eventLists)
    this.setState({
      eventLists: eventLists,
      DataisLoaded: true,
    });
  }

  render() {

  

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
          <table className="event-content">
            <tbody>
              {this.state.eventLists.map((e) => {
                return (
                    console.log(e.eventName),
                    // <EventRow/>
                  <EventRow
                    eventName={e.eventName}
                    startDate={e.startDate}
                    endDate={e.endDate}
                    id={e.id}
                  />
                );
              })}
              {/* <AddEvents/> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
