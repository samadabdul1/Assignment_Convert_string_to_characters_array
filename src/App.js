import './App.css';
import TopBar from './TopBar';
import SideBar from './SideBar';
import "./styles.css";
import MainContent from './MainContent';
import styled from 'styled-components';
function App() {
  return (
    <Container>
      <MainSection>
        <TopBar />
        <SectionTwo>
          <SideBar />
        </SectionTwo>
      </MainSection>
    </Container>
  );
}

export default App;
const Container=styled.div`
`
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const SectionTwo=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`