import Header from './components/Header/Header';
import Sliderimages from './components/SliderImages';
import CardSlider from './components/CardSlider';
import Premieres from './components/Premieres';
import AllMoviesFetch from './components/AllMoviesFetch';
//import AllMovies from './components/AllMovies';
import SingleMov from './components/SingleMov';
import Footer from './components/footer';
import Registration from './components/Registration';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
          <Route exact path="/movies">
              <AllMoviesFetch />
          </Route>
          <Route exact path="/register">
              <Registration />
          </Route>
          <Route exact path="/">
          <center>
            <h1 style={{background:"black",color:"white"}}>HOME PAGE</h1>
          </center>
              <Sliderimages />
              <CardSlider />
              <Premieres />
          </Route>
          <Route exact path="/movies/:movid">
              <SingleMov />
          </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}
export default App;
