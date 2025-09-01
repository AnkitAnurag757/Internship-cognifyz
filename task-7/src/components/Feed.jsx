import React from 'react';
import PostCard from './PostCard';
import { Container, Row, Col } from 'react-bootstrap';

import viratKohli from '../assets/virat kohli.jpg';
import steveSmith from '../assets/steve smith.jpg';
import ankit from '../assets/ankit_image.jpg';

const postData = [
  {
    title: "Virat Kohli: A Legend ",
    excerpt: "This Knock was a masterclass in chasing.",
    image: viratKohli,
    author: "steve smith",
    avatar: steveSmith,
    time: "5h ago"
  },
  {
    title: "React Hooks in Action 🚀",
    excerpt: "Learn how to manage component lifecycle like a pro with useEffect and custom hooks.",
    image: "https://picsum.photos/600/300?random=1",
    author: "Ankit Anurag",
    avatar: ankit,
    time: "2h ago"
  },
  
  {
    title: "Top 5 ES6 Tricks",
    excerpt: "Arrow functions, destructuring, optional chaining & more explained easily.",
    image: "https://picsum.photos/600/300?random=3",
    author: "David Lee",
    avatar: "https://i.pravatar.cc/40?img=20",
    time: "1 day ago"
  }
];

const Feed = () => {
  return (
    <Container className="my-4 feed-container">
      <Row className="justify-content-center">
        <Col md={8}>
          {postData.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
