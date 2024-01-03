import { Component } from "./component.js";

export class Form extends Component{
    constructor(parent, options){
        super('form', parent, options)
    }
    addChildrem(...childream){
        childream.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
    }
}