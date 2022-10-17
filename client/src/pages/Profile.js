import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../style.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <Card.Body>
        <Card.Title>Welcome</Card.Title>
        <Card.Text>
          {userData.username}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item href="#">Messages</ListGroup.Item>
        <ListGroup.Item href="#">My Connections</ListGroup.Item>
        <ListGroup.Item href="#">Events</ListGroup.Item>
      </ListGroup>
      
    </Card>
     
    <div>
      <Footer />
    </div>
  </div>
  );
};

export default Profile;