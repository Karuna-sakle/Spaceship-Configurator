import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export const Spaceship = () => {
    const basePrice = 1000;
    const [color, SetColor] = useState(0)
    const [power, SetPower] = useState(0);
    const [wrapdrive, SetWrapdrive] = useState(0)
    const [optionpackage, SetOptionPackage] = useState(0)
    const [active1 , SetActive1] = useState("");
    const [active2 , SetActive2] = useState("");
    const [active3 , SetActive3] = useState("");
    const [active4 , SetActive4] = useState("");



    function handleColorButton1(e){
       SetColor(0)
       SetActive1(e.target.id)
    }
    function handleColorButton2(e){
        SetColor(100)
        SetActive1(e.target.id)
     }
    function handleColorButton3(e){
        SetColor(100)
        SetActive1(e.target.id)
     }
    function handlePowerButton1(e){
        SetPower(0)
        SetActive2(e.target.id)
    }
    function handlePowerButton2(e){
        SetPower(200)
        SetActive2(e.target.id)
    }
    function handlePowerButton3(e){
        SetPower(500)
        SetActive2(e.target.id)
    }
    function handleWrapButton1(e){
        SetWrapdrive(0)
        SetActive3(e.target.id)
    }
    function handleWrapButton2(e){
        SetWrapdrive(1000)
        SetActive3(e.target.id)
    }
    function handlePackageButton1(e){
        SetActive4(e.target.id)
    }
    function handlePackageButton2(e){
        SetOptionPackage(100)
        SetActive4(e.target.id)
    }
    function handlePackageButton3(e){
        SetOptionPackage(500)
        SetActive4(e.target.id)
    }
    
    return (
        <div>
            <center>
            <div style={{backgroundColor:"navy" ,marginTop:40 , marginLeft:50,marginRight:50,marginBottom:10, border:"2px solid"}}>
            <div className='row' style={{padding:20}}>
            <h2 style={{color:"white"}}>Spaceship Configurator</h2>
                <div className='col' style={{padding : 20}} id="myDIV">
                    <h2 style={{color:"white"}} >Select Color : </h2>
                    <Button variant="outline-success" class="btn" onClick={handleColorButton1} 
                     id = {"1"}  className={active1 === "1" ? "active" : "btn"}>
                     +0€ <br /> Snow</Button>{"   "}

                    <Button variant='outline-success'class="btn"  onClick={handleColorButton2}
                     id = {"2"} className={active1 === "2" ? "active" : "btn"}
                     >+100€ <br /> Volcano</Button>{"   "}

                    <Button variant='outline-success' class="btn" onClick={handleColorButton3}
                     id = {"3"} className={active1 === "3" ? "active" : "btn"}> 
                         +100€ <br /> Sky</Button>

                    <hr />
                    <h2 style={{color:"white"}} >Select Power : </h2>

                    <Button variant="outline-success" class="btn" onClick={handlePowerButton1}
                     id = {"4"} className={active2 === "4" ? "active" : "btn"} >
                         100 MW <br /> +0€</Button>{"   "}

                    <Button variant="outline-success" class="btn" onClick={handlePowerButton2}
                     id = {"5"} className={active2 === "5" ? "active" : "btn"}>
                         150 MW <br /> +200€</Button>{"   "}

                    <Button variant="outline-success" class="btn" onClick={handlePowerButton3} 
                    id = {"6"} className={active2 === "6" ? "active" : "btn"} >
                        200 MW <br />  +500€</Button>{"   "}
                    <hr />
                    <h2 style={{color:"white"}} >Warp drive: </h2>

                    <Button variant="outline-success" class="btn" onClick={handleWrapButton1}
                     id = {"7"} className={active3 === "7" ? "active" : "btn"}>
                         No <br />  +0€</Button>{"   "}

                    <Button variant="outline-success" class="btn" onClick={handleWrapButton2}
                     id = {"8"} className={active3 === "8" ? "active" : "btn"} >
                         Yes <br />  +1000€</Button>{"   "}
                    <hr />
                    <h2 style={{color:"white"}} >Select option package</h2>

                    <Button variant="outline-success" id = {"9"} onClick={handlePackageButton1} 
                    className={active4 === "9" ? "active" : "btn"} >Basic</Button>{"  "}

                    <Button variant="outline-success" class="btn" onClick={handlePackageButton2} 
                    id = {"10"} className={active4 === "10" ? "active" : "btn"}>
                        Sport <br />+100€</Button>{"   "}

                    <Button variant="outline-success" class="btn" onClick={handlePackageButton3} 
                    id = {"11"} className={active4 === "11" ? "active" : "btn"} >
                        Lux <br />  +500€</Button>{"   "}
                </div>
                 
                <div className='col' style={{paddingLeft : 120 , paddingTop:50}}>
                <Card style={{ width: '18rem' , backgroundColor : "green"}}>
                <Card.Body>
                <p style={{color:"white"}}>Base Price:{basePrice}€ </p>
                <p style={{color:"white"}}>Color:{color}€</p>
                <p style={{color:"white"}}>Power:{power}€</p>
                <p style={{color:"white"}}>Wrap drive:p{wrapdrive}€</p>
                <p style={{color:"white"}}>option package:{optionpackage}€</p>
                <hr />
                <p style={{color:"white"}}>Total:{basePrice + color + power + wrapdrive + optionpackage}€</p>
                </Card.Body>
                </Card>
              
                </div>
              
                

            </div>
            </div>
            </center>
        </div>
    )
}
