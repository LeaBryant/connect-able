import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../style.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Container } from 'react-bootstrap';

// const myProfile = () => {
  // const { data } = useQuery(GET_ME);
  // const userData = data?.me || {};
// }


const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  return (
  <div className="body">
    <div>
      <Nav />
      </div>
  <Container>
    <Row>
  <Col sm={3}>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <Card.Body>
        <Card.Title>Welcome</Card.Title>
        <Card.Text>
          {userData.username}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item action href="#link1">Messages</ListGroup.Item>
        <ListGroup.Item action href="#link2">My Connections</ListGroup.Item>
        <ListGroup.Item action href="#link3">Events</ListGroup.Item>
      </ListGroup>  
    </Card>
    </Col>

    <Col sm={8}>
    <div className="d-flex justify-content-center row">
        <div className="col-md-15">
            <div className="feed p-1">
                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                    <div className="feed-text px-3">
                        <h6 className="text-black-50 mt-2">What's on your mind</h6>
                    </div>
                    <div className="feed-icon px-2"><i className="fa fa-long-arrow-up text-black-50"></i></div>
                </div>
                <div className="bg-white border mt-2">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"/>
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div className="p-2 px-3"><span>Whoa crazy night last night!!😎 </span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                </div>
                <div className="bg-white border mt-2">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"/>
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div className="feed-image p-2 px-3"><img className="img-fluid img-responsive" src="http://eyesimple.us/site/wp-content/uploads/2018/01/Call-Tech-Support-My-Mouse-Is-Dead-Funny-Technology-Meme-Image.jpg"/></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                </div>
            </div>
    </div>
</div>
</Col>
</Row>
  </Container>

    <div>
      <Footer />
    </div>
  </div>
  );
};

export default Profile;