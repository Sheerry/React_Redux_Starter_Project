import React, { Component } from 'react'
import '../app.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  } from '../actions';


class List extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    componentWillMount(){
    }
    render() {
        console.log(this.state)
        return (
            <div className='container'>
                
                <ul>
                    {this.props.items.map((item, index)=>{
                        return(
                            <li key={index}>{item} <button onClick={()=>{this.props.DeleteItem(index)}}>x</button> </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    //pass the providers
    return {
        items : state.items
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({
            
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);