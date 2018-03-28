import React, {Component} from 'react';
import Table from './table';

class Add extends Component {
    constructor(){
        super();

        this.state = {
            person:[]
        };
    }
    add(){
        let name = this.refs.name.value;
        console.log(name);
        if(localStorage.getItem('person')== null){
            let person = [];
            person.push(name);
            localStorage.setItem('person',JSON.stringify(person));
        }else{
            let person = JSON.parse(localStorage.getItem('person'));
            person.push(name);
            localStorage.setItem('person', JSON.stringify(person));
        }
        this.setState({
            person: JSON.parse(localStorage.getItem('person'))
        });
    }


    render() {
        return (
            <div className="add">
                <h2>Add new person</h2>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" ref="name" name="name" placeholder="Name"/>
                        <p><input type="checkbox" className="checkbox-inline" name="super-power"/> Super power</p>
                        <p><input type="checkbox" className="checkbox-inline" name="rich"/> rich</p>
                        <p><input type="checkbox" className="checkbox-inline" name="genius"/> Genius</p>
                        <button type="button" onClick={this.add.bind(this)} className="btn btn-primary">Add</button>
                    </div>
                </form>

                <Table person={this.state.person}/>
            </div>
        );
    }
}

export default Add;
