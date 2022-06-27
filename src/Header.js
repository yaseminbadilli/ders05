import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" }
        console.log("ben bir const")
    }
componentDidMount(){
  
}
    static getDerivedStateFromPorps(props, state) {
        console.log("ben bir getDerivedStateFromPorps'dır.")

        return { favoritecolor: props.favcol };
    }
    render() {
        console.log("ben bir render'ım")
        return (

            <h2>favori rengim {this.state.favoritecolor}</h2>
        )
    }
} export default Header;