import React, {Component} from 'react';
import Table from './table';

class Add extends Component {
    constructor(){
        super();

        this.state = {
            person:[],
            checkbox:[]
        };
    }
    componentWillMount(){
        const state =JSON.parse(localStorage.getItem('state'));
        this.setState(
            state

        );
    }

        //!important when i use arow function i have access to THIS of parrent
    add =(e)=>{
        e.preventDefault();
        const name = this.refs.name.value;
        const newPerson = [...this.state.person, name];
        const newState ={person:newPerson};
        localStorage.setItem('state',JSON.stringify(newState));

        this.setState(
            newState
        );

    };


    render() {
        return (
            <div className="add">
                <h2>Add new person</h2>
                <form className="form-inline" onSubmit={this.add}>
                    <div className="form-group">
                        <input type="text" ref="name" name="name" placeholder="Name"/>
                        <p><input type="checkbox" className="checkbox-inline" name="super-power"/> Super power</p>
                        <p><input type="checkbox" className="checkbox-inline" name="rich"/> rich</p>
                        <p><input type="checkbox" className="checkbox-inline" name="genius"/> Genius</p>
                        <button type="submit"  className="btn btn-primary">Add</button>
                    </div>
                </form>

                <Table person={this.state.person} />
            </div>
        );
    }
}

export default Add;
