import React, { useState } from "react";
import "./HienNode.css";
import { connect } from "react-redux";
import { actEditNote, actRemoveNote , actDetailNote, actAddNote} from "../redux/action/actNote";
function HienNote(props) {
  let noidungGhiChu = props.noteData.content;
  let noidungDetail = props.noteData.title;
  let  noteID = props.noteData.id
  const [noteContent, hamGanNoiDungGhiChu] = useState(noidungGhiChu);
  const [noteDetail, hamGanNoiDungTitle] = useState(noidungDetail);



  const hamXoaGhiChu = () => { props.removeNote(noteID) }
  return (    
      <div className="mt-2 card bg-warning">
        <div className="card-body" style={{ height: 50 }}>
          <textarea value= {noteContent} ></textarea>
          
        </div>
        <div className="card-footer p-1">


          <button style={{ position: "relative", left: -140 , top:-45  }} className="btn btn-primary btn-sm float-right"
          onClick={hamGanNoiDungTitle}>(Show Details)</button>
          <button className="btn btn-danger btn-sm float-right" onClick={hamXoaGhiChu} 
          style={{ position: "relative", right: -100 , top:-45 }}>(Remove Note)</button>

          
          
        </div>
      </div>
  );
}
 
// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    
    removeNote: id => {  dispatch(actRemoveNote(id)); },
    detailNote: (id,title) => {dispatch(actDetailNote(id , title));},
  };
};
// chuyển state từ store thành props của component
const mapState = (state, ownProps) => {
  return { note: state.note,};
};
export default connect(mapState, mapDispatchToProps)(HienNote);
