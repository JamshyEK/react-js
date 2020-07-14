import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component {

    constructor(props){
        
        super(props);
     
    }

  renderDish(dish){
    if(dish!=null){
       
        return(
     
            <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle ><h5>{dish.name}</h5></CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
     
        );
    }
    else{
        return(
            <div></div>
        );
    }
  }





  renderComments(comments){
      if(comments==null){
          return(<div></div>);
      }else{
          const comment= comments.map((c)=>{
              
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const date = new Date(Date.parse(c.date))
                console.log(date)
                return(
                    <div> 
                         <ul class="list-unstyled">
                        <li>{c.comment}</li>
                        
                         <li>--{c.author}, {monthNames[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</li>
                         </ul>
              
                    </div>
                  
                );
              
          })
          return(
               <div><h4>Comments</h4>
                   {comment}</div> 
          );
      }
  }


    render(){


        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>)
        }
      
        const commentItem = this.renderComments(dish.comments);
        
         
   
 
       
   
        return(
            
            <div className="row">
            
            <div  className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
                </div>
            <div  className="col-12 col-md-5 m-1">  
               {commentItem}
               </div>
             </div>

       

        );
    
 }
   
}
export default DishDetail;