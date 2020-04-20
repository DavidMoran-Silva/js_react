import React from 'react';

import Card from '../components/Card';

import WIN_20190202_10_36_33_Pro from '../Assets/images/WIN_20190202_10_36_33_Pro.jpg';
import WIN_20200110_23_22_37_Pro from '../Assets/images/WIN_20200110_23_22_37_Pro.jpg';
//import youtube from '../assets/images/youtube.png';
//import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'WIN_20190202_10_36_33_Pro',
                    subTitle: 'developers',
                    imgSrc: WIN_20190202_10_36_33_Pro,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'David Moran-Silva',
                    subTitle: 'YouTube',
                    imgSrc: WIN_20200110_23_22_37_Pro,
                    link: 'https://www.instagram.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'social network',
                   // imgSrc: WIN_20190202_10_36_33_Pro.jpg,
                    link: 'https://Facebook.com',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}>
                <img src={item.imgSrc} alt={item.title}/>
            </Card>
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;