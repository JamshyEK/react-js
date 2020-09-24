import React from 'react';
import {Link} from "react-router-dom";

import { Card, CardImg, CardImgOverlay,  
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import Loading from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
    

 const MenuItem =({dish})=>{
    return(
        <Card key={dish.id}>
        <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
      </Card>
    );
 }


 const Menu=(props)=>{
  
    const menu=props.dishes.dishes.map((dish)=>{
     
        return(
            <div  className="col-12 col-md-5 m-1">
            <MenuItem dish={dish}  />
          </div>

        );
       

    })
    if(props.dishesLoading){
        return <Loading />
    }
    else if(props.dishErr){
        return <h4>{props.dishErr}</h4>
    }
    else{
    return(
     
 <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>

            </div>
             <div className="row">
             
                 {menu}
             </div>   
             </div>       
   
    );  
}
 }
  

 



export default Menu;