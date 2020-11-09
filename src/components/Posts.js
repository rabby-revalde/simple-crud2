import React, { useState } from "react";
import { ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import { users } from "../assets/usersData.js";

const Posts = () => {
  const [nUser, setNusers] = useState(users);

  const HandleClickGetPost = async (userId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const userPosts = await res.json();
    setNusers(
      nUser.map((user) => {
        if (user.id === userId) {
          return { ...user, posts: userPosts };
        }
        return user;
      })
    );
  };

  const HandleClickDeletePost = async (userId, postId) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
    setNusers(
      nUser.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            posts: user.posts.filter((post) => post.id !== postId),
          };
        }
        return user;
      })
    );
  };
  console.log(nUser);
  return (
    <Container className="my-5">
      <h3 className="my-3">Mini Challenge 2 (Simple CRUD)</h3>
      <ListGroup>
        {nUser.map((user, idx) => {
          return (
            <ListGroupItem key={idx}>
              <strong>
                User{user.id} {user.name}
              </strong>
              <Button
                onClick={() => HandleClickGetPost(user.id)}
                outline
                color="info"
                className="float-right ml-3"
              >
                View Posts
              </Button>
              <Button
                onClick={() => HandleClickGetPost(user.id)}
                outline
                color="success"
                className="float-right"
              >
                Add Post
              </Button>
              <ListGroup>
                {user.posts &&
                  user.posts.map((post, idx) => {
                    return (
                      <ListGroupItem className="mr-5" key={idx}>
                        {post.id}. {post.title}
                        <Button
                          onClick={() =>
                            HandleClickDeletePost(user.id, post.id)
                          }
                          outline
                          color="danger"
                          className="float-right ml-3"
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={() => HandleClickGetPost(user.id)}
                          outline
                          color="primary"
                          className="float-right"
                        >
                          Edit
                        </Button>
                      </ListGroupItem>
                    );
                  })}
              </ListGroup>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default Posts;
