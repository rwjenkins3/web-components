
import './App.css';
import moon from './assets/images/moon1.jpg';
import beach from './assets/images/beach.jpg';
import mountain from './assets/images/mountain.jpg'
import zap from './assets/images/zap.jpg'
import palm from './assets/images/palm.jpg'


import Card from './components/Card';
import CardGrid from './components/CardGrid';
import HCard from './components/HCard';
import Layout from './components/Layout';

const Nav = () => {
  return(
    <div style={{height: '60px', color: 'white', backgroundColor: 'black'}}>
      <h1>Navbar</h1>
    </div>

  );
}

const Main = () => {
  return(
    <div className="App">
      <CardGrid>
        <Card footer body="This is the body text. It goes here so this is just filler text. Please don't read this." title="Title 1" image={moon} />

        <Card footer shadow body="Mara vader darth fett skywalker mon jabba ahsoka qui-gonn. Darth kessel aayla darth han. Windu ackbar qui-gonn antilles droid maul fisto." title="Title 2" image={beach}/>
        <Card shadow body="Moff wedge cade skywalker. Calamari solo ackbar ventress r2-d2 padmé padmé." title="Title 3" image={zap} />
        <Card body="Kit moff ventress vader ponda. Hutt jar dantooine lando leia. Ponda ben darth lando skywalker skywalker kashyyyk sith." title="Title 4" image={mountain} />
        <Card body="ett mace fett antilles thrawn. Organa greedo yoda kenobi obi-wan antilles secura mace organa." title="Title 5" image={palm} />
        { /* 
        */ }
      </CardGrid>
      <CardGrid hcard>
        <HCard image={moon} shadow footer />
        <HCard image={beach} />
        <HCard image={zap} footer />
      </CardGrid>
    </div>
  );
}

const Footer = () => {
  return(
    <div style={{height: '60px', color: 'white', backgroundColor: 'black'}}>
      <h2>Footer</h2>
    </div>
    
  );
}


function App() {
  return (
    <Layout>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  );
}

export default App;
