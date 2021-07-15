import React, { Component } from "react";
import styled from "styled-components"
import MainContent from "./MainContent";
class Content extends Component {
  render() {
    var contentClass = this.props.isOpen ? "content open" : "content";
    return <Container className={contentClass}>
      <MainContent/>
    </Container>
  }
}

export default Content;

const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  margin-top:30px;
  margin-left: 30px;
  

`
