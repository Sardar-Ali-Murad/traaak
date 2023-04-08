import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useSelector ,useDispatch} from "react-redux";
import {closeContactForm}  from "../../features/appSlice"

export default function Contact() {
  let dispatch=useDispatch()
  let {contactForm}=useSelector((state)=>state.store)

  const handleClose = () => {
    dispatch(closeContactForm())
  };

  return (
    <div>
      <Dialog
        open={contactForm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialogBox"
      >
        <div style={{ background: "#F4FFFB" }}>
          <h1 id="alert-dialog-title" className="dialogBoxHeader">
            Contact Us
          </h1>
          <div className="dialogBoxTextFieldsGrid">
            <div className="dialogBoxTextField">
              <p>First Name</p>
              <input placeholder="John" className="dialogBoxInput" />
            </div>
            <div className="dialogBoxTextField">
              <p>Last Name</p>
              <input placeholder="Doe" className="dialogBoxInput" />
            </div>
            <div className="dialogBoxTextField">
              <p>Email</p>
              <input
                placeholder="johndoe@gmail.com"
                className="dialogBoxInput"
              />
            </div>
            <div className="dialogBoxTextField">
              <p>Number</p>
              <input placeholder="123 456 7890" className="dialogBoxInput" />
            </div>
          </div>
          <div className="contactBtn">
            <button className="homeBtnCommon">Submit</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
