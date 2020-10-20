import React, { Component } from 'react'
import Picture from "../component/ibrahim.jpg"

export default class Person extends Component {
    constructor(props){ 
        super(props)
        this.state={
            fullname:'Zlatan Ibrahimovic',
            bio: 'is a Swedish professional footballer who plays as a striker for Serie A club A.C. Milan. Ibrahimović is widely regarded as one of the best strikers of his generation.',
            imgSrc:<img src={Picture} alt="ibrahimovic"    height={"300px"}
            width={"250px"} ></img>,
            profession:'professional footballer'


        }


    }
       render() {
        return (
            <>
                <div>{this.state.imgSrc}</div>  
                <h1 style={{ fontSize: "50px", color:" rgb(109 95 24)" }}>{this.state.fullname}</h1>
                <h3 style={{ fontSize: "30px", color:"#635f5f" }}>{this.state.profession}</h3>
                <p  style={{ fontSize: "14px", color:"white"  }} >{this.state.bio}</p>
                
            </>
        )
    }
}
