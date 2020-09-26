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
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

const RenderCard = ({ item, loading , errMsg}) => {
  if (loading) {
    return <Loading />;
  }
  else if (errMsg){
    console.log(errMsg);
      return <h4>{errMsg}</h4>
  }
   else {
    return (
      <FadeTransform in transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
      <Card>
        <CardImg src={baseUrl+item.image} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
      </FadeTransform>
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
          <RenderCard item={props.promotions} loading={props.promoLoading} errMsg={props.promoErr} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leaders} loading={props.leadersLoading} errMsg={props.leadersErr} />
        </div>
      </div>
    </div>
  );
};
export default Home;
