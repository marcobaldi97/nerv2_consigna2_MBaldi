import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const imgNext = "data:image/png;base64,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"

class TicketSingleViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            statusmisplay: null
        };
    };
    
    render(){
        return(
            <Container fluid="sm" className="singleTicketContainer">
                <Row>
                    <Col>
                        <p><em>De: {this.props.from}</em></p>
                    </Col>
                    <Col>
                        <p><em>Enviado: {this.props.date}</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className={this.props.status} variant="primary" size="sm">{this.props.status}</Button>
                    </Col>
                    <Col> 
                        <p><strong>{this.props.subject}</strong></p>
                    </Col> 
                </Row>
                <Row>
                    <Col sm="8">
                        <p>{this.props.body}</p>
                    </Col>
                    <Col sm="3">
                        <img className="NextIcon" src={imgNext} alt="next"></img>
                    </Col>
                </Row>
            </Container>
        );//check status.
    };

} export default TicketSingleViewer;