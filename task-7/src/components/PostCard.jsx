import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { HandThumbsUp, ChatDots, Share } from 'react-bootstrap-icons';

const PostCard = ({ title, excerpt, image, author, avatar, time }) => {
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="mb-4 shadow-sm border-0 rounded-3 post-card">
      <Card.Header className="bg-white d-flex align-items-center border-0">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <div>
          <h6 className="mb-0">{author}</h6>
          <small className="text-muted">{time}</small>
        </div>
      </Card.Header>

      {image && <Card.Img variant="top" src={image} className="post-img" />}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>

        <div className="d-flex gap-3 mt-3">
          <Button
            variant="light"
            size="sm"
            className="d-flex align-items-center gap-1"
            onClick={() => setLikes(likes + 1)}
          >
            <HandThumbsUp /> {likes > 0 ? likes : "Like"}
          </Button>

          <Button
            variant="light"
            size="sm"
            className="d-flex align-items-center gap-1"
            onClick={() => setShowComments(!showComments)}
          >
            <ChatDots /> {showComments ? "Hide" : "Comment"}
          </Button>

          <Button
            variant="light"
            size="sm"
            className="d-flex align-items-center gap-1"
          >
            <Share /> Share
          </Button>
        </div>

        {showComments && (
          <div className="mt-3">
            <div className="bg-light rounded p-2 mb-2 small">
              <strong>Jane:</strong> Great post!
            </div>
            <div className="bg-light rounded p-2 mb-2 small">
              <strong>Mike:</strong> Loved this read 🔥
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              className="form-control form-control-sm"
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PostCard;
