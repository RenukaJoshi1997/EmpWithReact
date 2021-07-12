import header from './header.css'

function Myheader() {
    return(
       <div>  

           <h1 id ="heading"> 
               Welcome to employee portal !
           </h1>

           <hr/>
          
           <label className="para">Attendance</label>| <labe className="para" > Leaves </labe>| <label className="para" > Salary Slips </label>
           <hr />
             
       </div>  
    );
}

export default Myheader;