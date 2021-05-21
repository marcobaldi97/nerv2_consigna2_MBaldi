import React from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';

import TicketSingleViewer from "./TicketSingleViewer"

class TicketsViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            aTickets: [],
            childrenTickets: []
        };
    };

    componentDidMount() {
        this.getTickets();
    }

    getTickets() {
        axios
        .get('/tickets/getTickets', "")//url + parametros
        .then(response=>{
            console.log(response.data)
            let arrayToUpdate = [];
            for (let i = 0; i < response.data.length; i++) {
                arrayToUpdate.push(response.data[i]);
            };
            this.setState({aTickets: arrayToUpdate})
            console.log(this.state.aTickets);
            this.printTickets();
        })
        .catch(err => {
            console.log(err);//codigo de que hacer en caso de error.
        });
    };

    printTickets() {
        const tickets = this.state.aTickets;
        let auxArr = [];
        tickets.forEach(currentTicket => {
            auxArr.push(<TicketSingleViewer
                ticketId={currentTicket.ticketId} 
                subject={currentTicket.subject} 
                date={currentTicket.date} 
                from={currentTicket.from} 
                status={currentTicket.status} 
                body={currentTicket.body}>
                </TicketSingleViewer>);
        });
        console.log("Aux arr:")
        console.log(auxArr);
        this.setState({childrenTickets:auxArr});
    }
    
    render() {
        return(
            <div className="TicketViewer">
                <div className="TicketViewerTitle">
                    <h3><strong>Tickets</strong></h3>
                </div>
                <div>
                    {this.state.childrenTickets}
                </div>
            </div>  

        );
        
    };
} export default TicketsViewer;