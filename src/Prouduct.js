import React from "react";
import './Categories.css'
import { ListGroup, ListGroupItem } from 'reactstrap'


class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prpduct: [
                { productId: "1", productName: "kovalar" },
                { productId: "2", productName: "sos" },
            ],
            currentProduct: "aaaa"

        }
    }
    render(){
        return(
            <div>





            </div>
        )
    }
}



