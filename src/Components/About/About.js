import { Container} from 'react-bootstrap';
import furqan from './Assets/furqan.png';
function About() {
    return (
        <section id="about" className="about-section">
            <div className='wrapper'>
                <div className='content-wrap'>
                    <h2>About Me</h2>
                    <p>Hello! I'm Furqan, a passionate HubSpot CMS developer with expertise in creating and customizing HubSpot Themes. I specialize in HTML, HubL, CSS, Bootstrap, Js, HubDB, and HubSpot Blogs.</p>
                    <p>Welcome to my portfolio page where you can find some of my latest projects and get to know more about my work.</p>
                    <div className='image-box'>
                        <img src={furqan} alt='Furqan' width="375" height="375"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;