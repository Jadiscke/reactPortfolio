import React from 'react'
import './cards.css'
import CardHover from '../components/cardHover'

class PortfolioCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {hovered: false};
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }
    handleOnMouseOver(){
        this.setState({hovered: true})
    }
    handleOnMouseLeave(){
        this.setState({hovered: false})
    }
    render(){
        const cardStyle ={
            flex: `0 0 250px`,
            flexShrink:`1`,
            position: `relative`,
            margin: 15,
            minWidth: 250,
            maxWidth: 250,
            height:250,
            maxHeight: 250,
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: `contain`,
            backgroundColor: `grey`
        }
        return(
            <div 
                onMouseOver={this.handleOnMouseOver} 
                onMouseLeave={this.handleOnMouseLeave} 
                className='borderRadiusImportant' 
                style = {cardStyle}
            >
                { this.state.hovered &&
                <CardHover /> 
                
                }
            </div>
        )
    }
}

export default PortfolioCard