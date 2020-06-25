import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//*********CSS**********//
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//********Code*********//
class Maincard extends React.Component{
    constructor(props){
        super(props);
        this.state={inp:'', items: []};
        
        this.store=this.store.bind(this);
        this.HandleClick=this.HandleClick.bind(this);
    }
    store(e){
        this.setState({inp: e.target.value});
    }
    HandleClick(e){
        const list=[...this.state.items,this.state.inp]
        this.setState(
            {   items: list,
                inp: null}
                );
    }
    render(){   
    var a=this.state.items
    var list=[...a].map(item=><li>{item}</li>)

        return(
            <Card style={{ width: '18rem', borderRadius: '25px' }} >
            <Card.Body>
                <Card.Title>Hello</Card.Title>
                <Card.Text>
                    <ul>{list}</ul>
                    <Form inline>
                        <FormControl type="text" placeholder="What needs to be done?" className="mr-sm-2" onChange={this.store}/>
                        <Button onClick={this.HandleClick} variant="dark">Add an item</Button>
                    </Form>    
                </Card.Text>
            </Card.Body>
        </Card> 
        );
    }
}
class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={inp: ''};
        this.HandleFormClick = this.HandleFormClick.bind(this)
        this.store=this.store.bind(this)
        
    }
    
    HandleFormClick(e){
        alert(this.state.inp);
    }
    store(e){
        this.setState({inp: e.target.value});
    }
    render(){
        return(
            <Navbar bg="dark" expand="lg" fixed="top" className="Navigation">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Enter Title" className="mr-sm-2"  onChange={this.store}/>
                    <Button onClick={this.HandleFormClick} variant="dark">Add a card</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
            )
        }
}


class Page extends React.Component{
    render(){
        var form_input;
        return(
            <div>
                <Navigation/>
                <div className='parent'>
                    <Maincard/>
                </div>
            </div>
        );
    }
    
}

ReactDOM.render( <Page/ >, document.getElementById('root'))