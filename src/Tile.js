import React from 'react';
import './Tile.css';
export default class Tile extends React.Component{
    tileClick(props){
        props.gameLoop(props.loc, props.turn);
    }
    render(){
        return(
            <div className={`tile ${this.props.loc}`} onClick={()=>this.tileClick(this.props)}>
                <p className='tile'>{this.props.value}</p>
            </div>
        )
    }
}