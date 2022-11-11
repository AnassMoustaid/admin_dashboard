import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EditForm from "../components/Editform";
import PopupModal from "../components/PopupModal";
import data from "./mock-data.json";
import moment from 'moment';

function MemberList() {
  const [members, setMembers] = useState(data);
  const [member, setMember] = useState({});
  const [searchMember, setSearchMember] = useState("");
  const [showMember, setShowMember] = useState(false);
  const [editForm, setEditForm]= useState(false);

  function search(searchTexte){
    let tmp_users = data;
   return tmp_users.filter((member) =>{
      return member.full_name.toLowerCase().includes(searchTexte.toLowerCase());
    })
  }


  useEffect(()=>{
    setMembers(search(searchMember)) ; 
  },[searchMember])

  
 

    return(
        <div className="member_list">
            <h1>Member List</h1>

            <input type="text" placeholder="Search by name" onChange={event => {setSearchMember(event.target.value)}}  />

            <table class="member_table" >
                <thead>
                  <tr>
                    <th >Full Name</th>
                    <th >Phone number/ E-mail</th>
                    <th >Date of subscription</th>
                    <th >End of subscription</th>
                    <th>Days Left</th>
                    <th >Settings</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member)=>(
                    <tr>
                    <td>{member.full_name}</td>
                    <td>{member.email}</td>
                    <td>{member.subscription_date} </td>
                    <td>{moment(member.subscription_date, "DD/MM/YYYY").add(7, 'days').format('DD/MM/YYYY')}</td>
                    <td>XXX Days Left</td>
                    <td>
                      <button className="table_button" onClick={() => {
                        setShowMember(true);
                        setMember(member)
                      }} >Show</button>
                    </td>
                  </tr>     
                  ))}
                </tbody>
              </table>

              <PopupModal trigger={showMember} setTrigger={setShowMember}>
                <h1>Member info will be displayed here</h1>
                <p>Full Name: {member.full_name}</p>
                <p>E-mail or Phone Number: {member.email}</p>
                <p>Subscription Date: {member.subscription_date}</p>
                <p>End of Subscription: {moment(member.subscription_date, "DD/MM/YYYY").add(7, 'days').format('DD/MM/YYYY')} </p>
                <p>Days Left:  </p>
                <br />
                <div className="modal_buttons">
                <button onClick={()=>{
                  setShowMember(false)
                  setEditForm(true)
                }} >Edit Info</button>
                <button>Delete member</button>
                </div>
              </PopupModal>

              <EditForm trigger={editForm} setTrigger={setEditForm}>
                <h1>Edit Member Information</h1>
                <p>Full Name: <textarea id="" cols="20" rows="10">{member.full_name}</textarea></p>
                <p>E-mail or Phone Number: <textarea id="" cols="20" rows="10">{member.email}</textarea></p>
                <p>Subscription Date: <input type="date" /></p>
                <p>End of subscription: </p>
                <p>Days left in the subscription: </p>
                <div className="modal_buttons">
                  <button>Save</button>
                  <button>Delete</button>
                </div>
              </EditForm>

      </div>
    )
}

export default MemberList