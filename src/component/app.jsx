import React, { Component } from 'react'
import '../app.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, deleteItem } from '../actions';
import List from './list';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            item:''
        }
        // this.DeleteItem = this.DeleteItem.bind(this);
    }
    componentWillMount(){
    }
    DeleteItem = (index) =>{
        this.props.actions.deleteItem(index);
    }
    render() {
        console.log(this.state)
        return (
            <div className='App container'>
                <div className='title'>
                    Todo List
                </div>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            value={this.state.item}
                            onChange={(e)=>{this.setState({ item : e.target.value})}}
                        />
                        <button type="button" className="btn btn-success" onClick={()=>{this.props.actions.addItem(this.state.item)}}>
                            Add Item
                        </button>
                    </div>
                </div>
                <List DeleteItem={this.DeleteItem}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    //pass the providers
    return {
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({
            addItem,
            deleteItem
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps)(App);
