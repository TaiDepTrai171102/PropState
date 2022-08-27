import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actAddNote, actDetailNote } from "../redux/action/actNote"; //Import các actions 
import "./TaoNode.css"
function TaoNote(props) {
  const [content, setContent] = useState(); 
  const [title, setTitle] = useState();
  const noteInput = useRef('abcd')
  const hamThemNote = (e) => {
    e.preventDefault();
    props.addNote(content); //Props này tạo bởi hàm mapDispatch
    props.addTitle(title)
    noteInput.current.value = '';    
    setContent('');
    setTitle('');
  };
  
  return (
    <div className="col-md-12">
      <div className="input-group mb-8">
        <label style={{color: "white"}}>Nội dung </label>
        <input type="text"  className="form-control"
          placeholder="Nội dung"  value =  {content}
          onChange={(e) => { setContent(e.target.value) }}  
          ref={noteInput} 
        />
      </div>
      <div className="input-group mb-8">
        <label style={{color: "white"}}>Ngày nhận</label>
        <input type="text"  className="form-control"
          placeholder="Ngày nhận"  value =  {title}
          onChange={(e) => { setTitle(e.target.value) }}  
          ref={noteInput} 
        />
      </div>
      
      <hr />
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" 
            onClick={hamThemNote} style={{ padding: 20 , fontWeight: "bold", fontSize: 20}}>
            Add Note
          </button>
        </div>
      
    </div>
  );
} 

const mapDispatch = (dispatch) => {
  return {
    addNote: (content) => {
      dispatch(actAddNote(content));
    },
    addTitle: (title) =>{
      dispatch(actAddNote(title))
    }
  
  };
};
export default connect(null, mapDispatch)(TaoNote);