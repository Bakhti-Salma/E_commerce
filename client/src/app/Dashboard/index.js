import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
const Dashboard = () => {
    return (
        
 <Fragment>
      <div className="mt-16">
        <Sidebar/>
        <div className="w-full">
        <Topbar/>
        <switch>
          <Route exact path="/dashboard/" component={Home} ></Route>
        </switch>
          </div>
          </div>
        </Fragment>
    );
};
export default Dashboard;