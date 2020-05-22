import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle = {
  color: `black`,
  textDecoration: `none`,
}
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {shadowHeader: `0 0 0 0`};
    this.shadow = `0 2px 2px -2px`;
    this.shadowReset = `0 0 0 0`;
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
  handleScroll(){
    const scrollOffset = 50;
    if (window.scrollY > scrollOffset ){
      if (this.state.shadowHeader !== this.shadow  ){
        this.setState({shadowHeader: this.shadow});
      }
      
    }else {
      if(this.state.shadowHeader === this.shadow ){
        this.setState({shadowHeader: this.shadowReset})
      }
    }
  }
  render(){
    return(
      <header
    style={{
      background: `#E8E8E8`,
      display: `flex`,
      flexDirection: `row`,
      position: `fixed`,
      paddingTop: 15,
      width: `100%`,
      marginBottom: `auto`,
      boxShadow: `${this.state.shadowHeader}`,
      zIndex:1000
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        textAlign: `center`,
        justifyContent:`space-between`,
        alignContent:`center`,
        maxWidth: 2880,
        background: `#E8E8E8`,
        margin: `0 auto`,
        flexWrap: `wrap`
      }}
    >
      <h3 style={{padding:`0 50px`,flexGrow: 1}}>
        <Link
          to="/"
          style={linkStyle}
        >
          {this.props.siteTitle}
        </Link>
      </h3>

      <h3 style={{padding:`0 50px`,flexGrow: 1}}>
          <Link to="/#portfolio" style={linkStyle}>
            Porfolio
          </Link>

      </h3>
    </div>
  </header>
    )
  }
}



export default Header
