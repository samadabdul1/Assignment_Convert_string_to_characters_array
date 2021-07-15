import {useState} from 'react'
import styled from 'styled-components'
export default function PrintBlocks({name}) {
    console.log("ASDasd",{name})
    
    return (
        <Container>
            {   
                name.map((letter,i)=>{
                    
                    console.log("i",i)
                    if((i+1)%3===0){
                        return(
                        <BoxTwo><Letter>{letter}</Letter></BoxTwo>
                    )}
                    else if(letter===' '){
                        return(<div></div>)
                    }
                    else{
                        return(<BoxOne><Letter>{letter}</Letter></BoxOne>
                        
                    )}
                    
                })
                    
            }
            {/* 
            <BoxTwo></BoxTwo>
            <BoxThree></BoxThree>
            <BoxOne></BoxOne>
            <BoxTwo></BoxTwo>
            <BoxThree></BoxThree>
            <BoxOne></BoxOne>
            <BoxTwo></BoxTwo>
            <BoxThree></BoxThree> */}
        </Container>
    )
}
const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  margin-top:0px;
  margin-left: 0px;
  

`

const BoxOne=styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height:70px;
  width:70px;
  border:solid 1px blue;
  margin:5px;
  
`
const BoxTwo=styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height:70px;
  width:70px;
  border:solid 1px red;
  margin:5px;
  
`
const Letter =styled.h2`
    
`