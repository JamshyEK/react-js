import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component {

    constructor(props){
        
        super(props);
     
    }

  



    render(){

         
   
        // const dish=()=>{
        //     if(this.props.dish!=null){
        //         return(
        //             <div  className="col-12 col-md-5 m-1">
        //         <Card >
        //           <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
        //           <CardImgOverlay>
        //               <CardTitle>{this.props.dish.name}</CardTitle>
        //           </CardImgOverlay>
        //         </Card>
        //       </div> 
        //         );
        //     }
        //     else{
        //     return(<div>{this.props.dish.name}</div>);
        //     }
            
        // }

       
        if(this.props.dish!=null){
        return(
            
            <div className="row">
            
                 <div  className="col-12 col-md-5 m-1">
                <Card >
                   <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    
                    <CardTitle className="m-2"><h5>{this.props.dish.name}</h5></CardTitle>
                    <CardText className="m-2">{this.props.dish.description}</CardText>
                   
               </Card>
             </div> 

              <div  className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            </div>
            </div>

        );
    } 
    else{
        return(<div></div>);
    }}
   
}
export default DishDetail;