import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Carousel from '../components/Carousel';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>My name is David Moran-Silva  and I am currently a full time student at Lehman College.</p>
    
            <p> My major is computer science and my curriculum has given me a solid technical foundation from which to build upon.</p>

            <p> I furthermore have a passion for cybersecurity which motivates me to continually learn new skills via capture the flag and cyber war games as well as via personal study of important cyber concepts including networking and common exploits.</p>

            <p> I have a working knowledge of Java through my classes and personal projects which give me a good understanding of programming fundamentals.</p>

            <p> I believe I possess the motivation and aptitude to rapidly learn new skills and integrate myself into the team, which makes me an ideal intern candidate. I appreciate your time and look forward to hearing from you.</p>
            </Content>
            <Carousel/>
        </div>
    );

}

export default AboutPage;