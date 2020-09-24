import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import Loading from "./LoadingComponent";
import {baseUrl} from '../shared/baseUrl';

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={baseUrl+dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <h5>{dish.name}</h5>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments, addComment, dishId }) => {
  if (comments == null) {
    return <div></div>;
  } else {
    const comment = comments.map((c) => {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const date = new Date(Date.parse(c.date));
      console.log(date);
      return (
        <div>
          <ul class="list-unstyled">
            <li>{c.comment}</li>

            <li>
              --{c.author}, {monthNames[date.getMonth()]} {date.getDate()}{" "}
              {date.getFullYear()}
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <h4>Comments</h4>

        {comment}
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  }
};

const DishDetail = (props) => {
  if(props.dishesLoading){
    return <Loading/>
  }
  else if(props.dishErr){
    return <h4>{props.dishErr}</h4>
  }
  else{
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
        </div>
      </div>
    </div>
  );
  }
};

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  HandleSubmit = (values) => {
    this.props.addComment(this.props.dishId,values.rating,values.yourname,values.comment);
    // console.log("Current State is:" + JSON.stringify(values));
    // alert("Current State is:" + JSON.stringify(values));
    this.toggleModal();
  };

  render() {
    return (
      <div>
        <Button
          type="button"
          outline
          color="secondary"
          onClick={this.toggleModal}
        >
          <span className="fa fa-edit fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.HandleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="yourname" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".yourname"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />

                  <Errors
                    className="text-danger"
                    model=".yourname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or Less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    rows="6"
                    id="comment"
                    name="comment"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;
