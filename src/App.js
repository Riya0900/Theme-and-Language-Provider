import React from "react";
import "./App.css";
import A from "./A";
import C from "./C";

const User = React.createContext(); //init

const lang={
  step1 : {
    name: "Welcome To Coding World."
  },
  step2 :{
    name: "कोडिंग वर्ल्ड में आपका स्वागत है|"
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'dark',lan:'English'};
    this.handletheme = this.handletheme.bind(this);
    this.handlelan = this.handlelan.bind(this);
  }

  handletheme(event) {
    this.setState({value: event.target.value});
  }
  handlelan(event){
    this.setState({lan:event.target.value})
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Pick your favourable Theme:
          <select value={this.state.value} onChange={this.handletheme} className="select">
            <option value="dark" > dark</option>
            <option value="light"> light</option>
          </select>
        </label>
        <br/>
        <label>
          Pick your favourable Language:
          <select value={this.state.lan} onChange={this.handlelan} className="select">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>
      </form>
      {this.state.value==="light" ?
        <div className="light">
          {this.state.lan==="English"?
          <User.Provider value={lang.step1}>
            <A />
          </User.Provider>:
          <User.Provider value={lang.step2}>
            <C />
          </User.Provider>
          }
        </div> :
        <div className="dark">
          {this.state.lan==="English"?
            <User.Provider value={lang.step1}>
              <A />
            </User.Provider>:
            <User.Provider value={lang.step2}>
              <C />
            </User.Provider>
          }
        </div>
      }

    </div>
    );
  }
}

export { User};
export default App;