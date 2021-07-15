import React from 'react'
import styled from 'styled-components'
export default function TopBar() {
    return (
        <Container>
            <h2>Top Bar</h2>
            
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 20px;
`