import { connect } from 'react-redux'; 
import HienNote from './component/HienNode';
import TaoNote from './component/TaoNode';
import { BrowserRouter, Router, Route } from 'react-router-dom'
function App(props) {
  return( 
    <BrowserRouter>
    <div className="container">
          <div className="row">
            <div className="col-12 bg-dark mb-2">
              <h1 style={{textAlign: 'center', color: 'white'}}>Timestamped Notes App</h1>
              <TaoNote />
              <div>
              {props.note.map((n) => { // Render các ghi chú.
                  return <HienNote noteData = {n} key={n.id}/>
              })}
              
              </div>                          
            </div>
          </div>     
    </div>
    </BrowserRouter>
  )
  
}
const mapStateToProps = (state, ownProps) => {  
  //console.log("Toàn bộ state " , state);
  return {  
    note: state.note,

  }; 
};
export default connect(mapStateToProps, null)(App);
