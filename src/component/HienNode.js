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
      <>    
      <div className="card-content">
          <h3 style={{color:"white"}}>{noteContent}</h3> 
      </div>

      <div className="card-title">
          <h3 style={{color:"white"}}>{noteDetail}</h3> 
      </div>

      </>
  );
}
 
// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    
    removeNote: id => {  dispatch(actRemoveNote(id)); },

  };
};
// chuyển state từ store thành props của component
const mapState = (state, ownProps) => {
  return { note: state.note,};
};
export default connect(mapState, mapDispatchToProps)(HienNote);













//   <button style={{ position: "relative", left: -140 , top:-45  }} className="btn btn-primary btn-sm float-right"
// onClick={hamGanNoiDungTitle}>(Show Details)</button>