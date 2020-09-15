import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png';
import Tabletop from 'tabletop'; 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    Tabletop.init({
      key: '1bTF99Qr4O3i8Sd7JqsUHAea20JRc3uIDKEchrdfQ740',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  } 
  
  render() {
    const { data } = this.state
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><font color="yellow">Google Sheet Data Moyadev</font></h1>
          <p>
          Experimenting <code>src/landing-page.js</code> fetch data from GoogleSheet Moyahexagon.
          </p>
          <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vST2KG3QtenYbGp0sB6JvymaGWu2Pirtx7IMUfaXEzeXHu5-9UnUC3RZVzgIFK9ho2HQRdTL5SzW_MC/pubhtml"
          target="_blank"
          rel="noopener noreferrer"
          >
          Moyadev
          </a>
        
          <div id="username">
          {
            data.map(obj => {
              return (
                <div key={obj.username}>
                  <p>{obj.username}</p>
                  <p>{obj.email}</p>
                  <img alt={obj.avatar} src={obj.avatar} />
                </div>
              )
            })
          }
      </div>
    </header>
   </div>
   
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
