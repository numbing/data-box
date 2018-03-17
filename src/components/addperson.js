import React, {Component} from 'react';
import Table from './table';

class Add extends Component {
    render() {
        return (
            <div className="add">
                <h2>Add new person</h2>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name"/>
                        <p><input type="checkbox" className="checkbox-inline" name="super-power"/> Super power</p>
                        <p><input type="checkbox" className="checkbox-inline" name="rich"/> rich</p>
                        <p><input type="checkbox" className="checkbox-inline" name="genius"/> Genius</p>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </form>

                <Table/>
            </div>
        );
    }
}

export default Add;
