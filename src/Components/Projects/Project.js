import { Row, Col, Card, Button } from 'react-bootstrap';
function Projects() {
    return (
        <section id="projects" className="py-5 bg-light">
        <div className='wrapper'>
          <h2>Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>Description of project 1.</Card.Text>
                  <Button variant="primary" href="https://github.com/yourusername/project1" target="_blank">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>Description of project 2.</Card.Text>
                  <Button variant="primary" href="https://github.com/yourusername/project2" target="_blank">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    );
}

export default Projects;