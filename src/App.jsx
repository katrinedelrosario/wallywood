import AppRouter from './components/app/approuter/approuter';
import Footer from './components/partials/footer';
import Header from './components/partials/header';
import {ContainerStyle} from './components/styled/container.style'

function App() {
  return (
    <ContainerStyle maxwidth='1024'>
      <Header />
      <AppRouter />
      <Footer />
    </ContainerStyle>
  );
}

export default App;
