import React,{Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS,
      selectedDish: null
    }
  }


  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    })
}



  render() {
    const HomeComponent=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotions={this.state.promotions.filter((promotions)=>promotions.featured)[0]}
          leaders={this.state.leaders.filter((leaders)=>leaders.featured)[0]}
        />
      );
    }

    const dishWithId=({match})=>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

    
    return (
      <div >
        
        <Header/>
        <Switch>
          <Route path="/home" component={HomeComponent}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={dishWithId}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish )[0]}/> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
