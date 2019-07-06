import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <React.Fragment>
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logothe..png' height="40" width="121" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                      <Jumbotron class="jumbotron">
 
        <h1 className="display-3">The Table!</h1>
        <p className="abb">A table grounds the elements visually on this rich website for The Table. This richness is extended to the subtle gradient effect in the typography, high quality photography, and the curved navigation which adds a sense of elegance to the composition.

.</p>
        <hr className="my-2" />
        <p className='bbb'>Dining out is an experience. A restaurant website is often the the first stage of that experience. For the restaurateur, it is critical that the website encourage patrons to visit the restaurant. The objective of the restaurant website should be two-fold: Show off the enticing array of food.
</p>
        
      </Jumbotron>
    </div>
    
    </React.Fragment>
        )
    }
}