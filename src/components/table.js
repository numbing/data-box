import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <div className="data-view">
                <table className="table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Super Power</th>
                            <th>Rich</th>
                            <th>Genius</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>name will added</td>
                            <td><input type='checkbox'/></td>
                            <td><input type='checkbox'/></td>
                            <td><input type='checkbox'/></td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>name will added</td>
                            <td><input type='checkbox'/></td>
                            <td><input type='checkbox'/></td>
                            <td><input type='checkbox'/></td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        );
    }
}

export default Table;
