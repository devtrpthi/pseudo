import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    state = {hasError: false};
    static getDerivedFromError(){
        return(hasError: true)
    }
}