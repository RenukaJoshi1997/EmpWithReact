import React from 'react';
import Emp from './emp';
import data from './data/emp.json';

class List extends React.Component{
    render(){
        const employees=data;
        return <div>
            <ul>
                {
                    employees.map(e=>(
                        <li>
                            <Emp Name={e.Name}
                                Job={e.Job}
                                Dept={e.Dept}
                                Location={e.Location}
                                Reviews={e.Reviews}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    }
}

export default List;