import './App.css';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
import Feeds from "./components/Feeds";
import ListComponent from "./components/ListComponent";
import Forum from "./components/forum";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
 <div className="container-fluid">

            <Router>

                            <div className="row">
                                <HeaderComponent/>
                             </div>

                                <div  className="row" id="main-section">
                                    <div className="col-md-3">
                                        <LeftComponent/>
                                    </div>
                                    <div className="col-md-6">
                                        <Routes>
                                            <Route path="/" element={ <Feeds/>}  > </Route>
                                            <Route path="/list" element={ <ListComponent/>}  > </Route>
                                            <Route path="/forum" element={ <Forum/>}  > </Route>
                                            <Route path="/profile" element={ <Profile/>}  > </Route>
                                        </Routes>
                                    </div>
                                    <div className="col-md-3">
                                        <RightComponent/>
                                    </div>

                                </div>

            </Router>

 </div>
  );
}

export default App;
