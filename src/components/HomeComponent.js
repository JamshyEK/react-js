import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

const RenderCard=(props)=>{
    return(
        <Card>
            <CardImg src={props.item.image} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                {props.item.designation?<CardSubtitle>{props.item.designation}</CardSubtitle>:null}
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );
}

const Home=(props)=>{
    return(
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotions}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders}/>
                </div>
            </div>
        </div>
    );
}
export default Home;