import React from 'react'

class PortfolioContainer  extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{
                width: `100%`,
                height:`100%`,
                display:`flex`,
                flexWrap:`wrap`,
                flexDirection: `row`,
                justifyContent: `space-around`,
                padding: `5% 10%`,
                margin:`auto`
            }}>
                {this.props.children}
            </div>
        )
    }
}

export default PortfolioContainer