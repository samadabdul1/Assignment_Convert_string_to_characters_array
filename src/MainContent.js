import React from 'react'
import styled from "styled-components"
import PrintBlocks from "./PrintBlocks"
export default function MainContent() {
    const [name, setName] = React.useState("");
    const nameLetters=name.split('')
    // console.log("split",nameLetters);
    return (
    <Container>
        <Form >
            <InputSection>
                <h1>Name</h1>
                <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </InputSection>
            <PrintBlocks name={nameLetters}/>
        </Form>
      
    </Container>
    )
}

const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  margin-top:30px;
  margin-left: 30px;
  

`
const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const InputSection =styled.div`
    margin-bottom: 50px;
`