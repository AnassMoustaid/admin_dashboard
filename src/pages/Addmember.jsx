import React from "react";



function AddMember() {
    return(
        <div className="addmember">

        <div className="addmember_container">
            <h1>Member Information</h1>
            <form action="">
                <input type="text" placeholder="Full name" required />
                <input type="text" placeholder="Phone number/ E-mail" required />
                <input type="date" placeholder="Date of subscription" required />
                <select name="memberships" id="membership_type">
                    <option selected disabled>Select membership type</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                </select>
                <a href="" className="addmember_button">Add Member</a>
            </form>
        </div>

        </div>
    )
}

export default AddMember