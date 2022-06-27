import React from "react";
import './Categories.css'
import { ListGroup, ListGroupItem } from 'reactstrap'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { categoryId: "1", categoryName: "kovalar" },
                { categoryId: "2", categoryName: "sos" },
            ],
            currentCategory: ""

        }
    }
    changeCategory  (category) {
        this.setState({ currentCategory: category.categoryName });
    };


    render() {

        return (
            <div >


                {this.state.categories.map((category) => (
                    <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>
                        {category.categoryName}

                    </ListGroupItem>

                ))

                }
                <ListGroupItem>{this.state.currentCategory}</ListGroupItem>






            </div>
        )
    }
} export default Categories;