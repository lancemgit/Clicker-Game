import React from 'react';
import MyNavbar from './components/MyNavbar';
import ClickerWrapper from './components/ClickerWrapper/ClickerWrapper';
import { Container } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <ClickerWrapper />
      </Container>

    </div>
  );
}

export default App;
