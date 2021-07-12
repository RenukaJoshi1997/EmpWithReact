import React from 'react';

class Review extends React.Component {

    state = {
        Reviews : 10
    }
    constructor(props) {
        super(props)
        this.state = { Reviews: props.Reviews };
    }


    add = () => 
    {
        let review = this.state.Reviews + 1
        this.setState(
            {
                Reviews: review
            })
    }

    sub = () => 
    {
        
        let review = this.state.Reviews - 1
        if(review >= 0)
        {
            this.setState(
                {
                    Reviews: review
                })
        }
        
    }

    render() {
        return <div>
            <button onClick={this.sub}>-</button>
            <input value={this.state.Reviews} type="text" />
            <button onClick={this.add}>+</button>
        </div>
    }
}

export default Review