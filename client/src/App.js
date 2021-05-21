import React from 'react';

import './App.css';

//my stuff ↓↓↓
import AddUser from "./users/AddUser"
import Login from "./users/Login"
import Topnavbar from "./top-navbar/Topnavbar";
import SingleitemViewer from "./products/SingleItemViewer";
import ItemPage from "./products/ItemPage";
//my stuff ↑↑↑

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
    };//this.state
    this.handlePage = this.handlePage.bind(this);
  }; 

  render(){
    return(<a>Hi!</a>);
  };
}
export default App;


/* Old stuff left for reference
let handleToUpdate=this.handleToUpdateState;
    switch (this.state.currentView) {
      case 'Publications':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <PublicationWriter fatherId='0'/>
            <PublicationViewer /> 
          </div>
        );
      case 'Main Category':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <MainCategory handleToUpdate={handleToUpdate.bind(this)}/>
          </div>
        );  
      case 'Current post':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <PublicationSingleViewer post_id={this.state.currentPostId}/>
          </div>
        );  
      case '':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <div className="selfContainedWellPadded">
              <p>The Objective of this APP is to show the skills I'm learning in React+Express+Node.js+PostgreSQL</p>
              <p>Please go to: Views/Publications to create "Father" publications.</p>
              <p>The database backup is the FARGUS_PROJECT github. The original was created on PostgreSQL.</p>
            </div>
          </div>
        );
      default:
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <p>Nothing to be seen here boi!</p>
          </div>
        );
    }

*/