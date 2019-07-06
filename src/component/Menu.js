import React,{Component} from 'react';
import { Card, CardImg,CardSubtitle, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Menu.css';

import { Link } from 'react-router-dom';


export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedDish: null,

            modal: false,
          
          };
               this.toggle = this.toggle.bind(this);
  
  }
  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
}

renderDish(dish) {
  if (dish != null)
      return(
          <Card id="my2">
              <CardImg id='my' top src={dish.image} alt={dish.name} />
              <CardBody id ="my1">
                <CardTitle>{dish.name}</CardTitle>
                <CardText>Category={dish.category}</CardText>
                <CardText>{dish.description}</CardText>
              </CardBody>
              <Button color="primary">Add to Cart</Button>
        <Button color="secondary">Price=${dish.price}</Button>

          </Card>
      );
  else
      return(
          <div></div>
      );
}

    

    

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (      
        <div Key={dish.id} className='abc'>
        <Card   onClick={() => this.onDishSelect(dish)}>
  
                <CardActionArea className='card'>
          <CardMedia class='image'
            component="img"
            alt="Dishes"
            height="250"
            image={dish.image}
            title="Dishes"
          />
          <CardContent className="Dis">
            <Typography gutterBottom variant="h4" component="h1">
              {dish.name}
            </Typography>

          </CardContent>
        </CardActionArea>
        </Card>
        <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} MORE DETAILS</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
{dish.description   }     
  </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>


        </div>
            );
        });

        return (
          <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 id="aab">Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="container">
                <div className="aaa">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>

                  </div>
            </div>
            </div>
        );
    }
  }