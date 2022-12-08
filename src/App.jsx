import Component from './constants/Component';
import './styles/App.scss';

function App() {
  return (
    <>
      <Component.NavBar />
      <Component.Home />
      <Component.Features />
      <Component.OurApp />
      <Component.Plans />
      <Component.Footer />
    </>
  );
}

export default App;
