import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Loading from "./LoadingComponent";

const RenderCard = ({ item, loading , errMsg}) => {
  if (loading) {
    return <Loading />;
  }
  else if (errMsg){
      return <h4>{errMsg}</h4>
  }
   else {
    return (
      <Card>
        <CardImg src={item.image} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
};

const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} loading={props.dishesLoading} errMsg={props.dishErr}/>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotions} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  );
};
export default Home;
