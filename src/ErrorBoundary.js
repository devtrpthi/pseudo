import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    state = {hasError: false};
    static getDerivedFromError(){
        return{hasError: true}
    }
    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error', error, info);
    }
    render() {
        if(this.state.hasError) {
            return(
                <h1>
                    This listing has an error.<Link to='/'>Click Here</Link> to go back to the home page.
                </h1>
            )
        }
    }
}