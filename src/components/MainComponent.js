import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Todo from "./TodoComponent";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postFeedback,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  postFeedback: (feedback) => {postFeedback(feedback)},
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomeComponent = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.loading}
          dishErr={this.props.dishes.dishErr}
          promotions={
            this.props.promotions.promotions.filter(
              (promotions) => promotions.featured
            )[0]
          }
          promoLoading={this.props.promotions.loading}
          promoErr={this.props.promotions.promoErr}
          leaders={
            this.props.leaders.leaders.filter((leaders) => leaders.featured)[0]
          }
          leadersLoading={this.props.leaders.loading}
          leadersErr={this.props.leaders.leadersErr}
        />
      );
    };

    const dishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          dishesLoading={this.props.dishes.loading}
          dishErr={this.props.dishes.dishErr}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErr={this.props.comments.commentsErr}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomeComponent} />
              <Route
                exact
                path="/menu"
                component={() => (
                  <Menu
                    dishes={this.props.dishes}
                    dishesLoading={this.props.dishes.loading}
                    dishErr={this.props.dishes.dishErr}
                  />
                )}
              />
              <Route path="/menu/:dishId" component={dishWithId} />
              <Route
                exact
                path="/aboutus"
                component={() => (
                  <About
                    leaders={this.props.leaders.leaders}
                    leadersLoading={this.props.leaders.loading}
                    leadersErr={this.props.leaders.leadersErr}
                  />
                )}
              />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />
                )}
              />
              <Route exact path="/todo" component={Todo} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish )[0]}/> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
