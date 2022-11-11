import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import AddMember  from './pages/Addmember';
import MemberList from './pages/Memberlist';
import BlogPanel from './pages/Blogpanel';
import ReceivedMessages from './pages/Receivedmessages';
import Logout from './pages/Logout';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/addmember' element={<AddMember/>}   />
      <Route path='/memberlist' element={<MemberList />}   />
      <Route path='/receivedmessages' element={<ReceivedMessages/>}   />
      <Route path='/blogpanel' element={<BlogPanel />}   />
      <Route path='/logout' element={<Logout />} />
    </Routes>
    </Sidebar>
    </BrowserRouter>
    </>
  );
}

export default App;
