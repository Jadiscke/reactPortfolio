import React from 'react'
let styleContainer;
class Container extends React.Component {
    constructor(props){
        super(props);
        this.imgUrl = this.props.head || false
    }

    render(){
        if(this.imgUrl === true){
            styleContainer = {
                paddingTop:`10%`,
                display: `flex`,
                flexDirection: `column`,
                maxWidth: 2880,
                height: `100%`,
                minHeight:512,
                backgrounImage: `url("../images/background-heade.jpg")`,
                backgroundSize:`contain`,
                textAlign: `center`,
                justifyContent: `${this.props.justify}`,
                alignContent: `center`
            } 
        }else {
            styleContainer = {
                paddingTop:`10%`,
                display: `flex`,
                flexDirection: `column`,
                maxWidth: 2880,
                height: `100%`,
                minHeight:512,
                backgroundColor: `${this.props.bgcolor}`,
                textAlign: `center`,
                justifyContent: `${this.props.justify}`,
                alignContent: `center`
            }
        }
        return(
            <>
            <div style ={styleContainer}> {this.props.children}</div>
            </>
        )
    }
}


export default Container