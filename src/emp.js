import React from 'react';
import Review from './review';
// if we are using clas then render unction should be called
class Emp extends React.Component{
    render(){
        return <div>
            <p>Name:{this.props.Name}</p>
            <p>Job:{this.props.Job}</p>
            <p>Dept:{this.props.Dept}</p>
            <p>Location:{this.props.Location}</p>
            <p>Reviews:{this.props.Reviews}</p>
            <Review Reviews = {this.props.Reviews} ></Review>
        </div>
    }
}

export default Emp;