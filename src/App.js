import React,{Component} from 'react';
import Menu from './component/Menu';
import {DISHES} from './shared/dishes';
import './App.css';
import Header from './component/Header';
import Footer from './component/footer';
import {BrowserRouter} from 'react-router-dom';
import Home from './component/home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './component/contact';
import {COMMENT} from './shared/comment';
import {PROMOTION} from './shared/promotion';
import {LEADER} from './shared/leader';
import About from './component/about';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENT,
      promotions:PROMOTION,
      leaders:LEADER
    };
  }
  render(){
 const HomePage=() =>{
   return(
    <Home 
    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
/>
   );
 }   

 const DishWithId = ({match}) => {
  return(
      <Menu dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
  );
};


  return (
<BrowserRouter>
    <div class='back'> 
      <Header/>
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' />
              <Route exact path='/aboutus' component={() => <About /> } />
              <Route exact path='/contactus' component={Contact} />

              <Redirect to="/home" />
          </Switch>
  <Footer/>
      </div>
      </BrowserRouter>
  
  );
}
}
