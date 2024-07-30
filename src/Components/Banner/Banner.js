import {Container, Row, Col,} from 'react-bootstrap';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heromainv2 from './Assets/heromainv2.png';
function Banner() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Frontend Developer", "HubSpot Expert", "Technical SEO Expert"],
        typeSpeed: 70,
        loop: true,
        loopCount: Infinity,
        cursorChar: "|"
        });
        return () => {
        typed.destroy();
        };
    }, []);
    return (
        <section className="banner-main text-white text-start">
            <div className='wrapper'>
                <Row>
                    <Col md={6} className="portfolioTitle">
                        <h1>Hi There!<br/>I'M FURQAN
                         <br/>
                         {" "}
                        <span ref={el} />
                        {" "}   
                        </h1>
                    </Col>
                    <Col md={6} className="portfolioNav">   
                        <div className='hero-img'>
                            <img src={heromainv2} alt='Furqan' width="437" height="437"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Banner;