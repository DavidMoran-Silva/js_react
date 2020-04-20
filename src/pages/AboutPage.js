import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Carousel from '../components/Carousel';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>My paragraph that shows the different sites</p>
            </Content>
            <Carousel/>
        </div>
    );

}

export default AboutPage;