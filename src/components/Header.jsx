import React, {useState} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="heading">

            <Navbar
                className="my-2"
                style={{
                    backgroundColor: "#bcaaa4",
                    borderRadius: "2%"
                }}
                light="light">
                <NavbarBrand className="navBar"
                    style={{
                        color: "#6E260E",
                       
                    }}>
                    <img className="navBarImage"
                        alt="logo"
                        src="images/logo.png"
                        style={{
                            height: 70,
                            width: 70,
                            padding: 5
                        }}/>
                    <strong>Yulas Soft Toys and Gift Pack</strong>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2"/>
                <Collapse isOpen={!collapsed} navbar="navbar">
                    <Nav navbar="navbar" >
                        <NavItem  >
                            <NavLink className="navItem"
                                style={{
                                   
                                }}
                                href="#sample">Samples</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                               
                                href="#main">
                                Top selled 
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink
                               
                                href="#contact">Contacts</NavLink>
                        </NavItem>
                       
                    </Nav>
                </Collapse>
            </Navbar>

            <section id="services">

                <h5>
                    We make toys, various pillows in diffrent shape, color and size for children,
                    home, birthday, gifts and various decorations at very affordable prices.</h5>

                <div class="serviceClass">

                    <h4>Some of our products are</h4>

                    <ul>
                        <li>

                            <p>Teddy Bear</p>

                        </li>
                        <li>

                            <p>Toy Pillow</p>

                        </li>
                        <li>

                            <p>Baby Nest bed</p>

                        </li>
                        <li>

                            <p>Custom made Gifts For Every Age</p>

                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Header