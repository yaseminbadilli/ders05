import React from "react";
import ReactDOM  from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './Header.js';
import Categories from "./Categories.js";
import Product from "./Product.js";


class App extends ReactDOM.Component {
    render() {

        let infoCategories = { title: "ÜRÜNLER" }
        return (
            <div>
                <Container>
                    <Row><Header favcol ="yellow"></Header></Row>
                    <Row>
                        <Col><Categories></Categories></Col>
                    </Row>
                    <Row>
                        <Col><Product></Product></Col>
                    </Row>
                </Container>


            </div>
        )
    }
}export default App;