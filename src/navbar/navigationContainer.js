
import Navigation from "./component/Navigation.js"
export default class NavigationContainer extends React.Component {
    constructor(props){
        super(props)
    }
    
    handleNavClick(){
        var x = document.getElementById("topNav")
        if (x.className === "c-navbar__item") {
            x.className += " c-navbar__responsive";
        } else {
            x.className = "c-navbar__item";
        }
        console.log(x)
    }
    render(){
        return(
            <Navigation onNavClick={this.handleNavClick}/>

        )
    }

}

