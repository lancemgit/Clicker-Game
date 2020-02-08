import React from "react";
import { Col, Card, CardImg } from "reactstrap";

function ClickerComp(props) {
    return (

        <Col md='3' className="text-center">
            <Card className="justify-content-center border-0" onClick={() => { props.imgClick(props.id) }} style={{ margin: ".5em" }}>
                <CardImg className="mx-auto text-center" height="150" src={props.img} alt={props.alt} style={{ width: "60%" }} />
            </Card>
        </Col>

    );

}

export default ClickerComp;
