import React from "react";

function EditForm(props) {
    return(props.trigger) ? (
        <div className="popup_modal">
            <div className="popup_modal_content">
                <button className="close-button" onClick={() =>{
                    props.setTrigger(false)} 
                }>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default EditForm