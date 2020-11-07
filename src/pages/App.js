import React from "react";
import Header from "../components/Header";
import PostsComponent from "../components/Posts";

import "../assets/App.css";

const App = () => {
  return (
    <>
      <Header />
      <PostsComponent />
    </>
  );
};

export default App;

// Create a React Class component that -< `Hooks Using`
// 1. renders a list of users in a HTML unordered list.
// 2. In each <li>, display the name of the user in a <strong> element.
// 3. Also, add a <button> with text "Get Posts" that when clicked will send a POST request using fetch API to retrieve the posts under the particular user using endpoint: https://jsonplaceholder.typicode.com/posts?userId=:id where :id is the id of the given user.
// 4. Display the posts title only in a HTML unordered list as well.
// 5. Lastly, add a <button> with text "Delete" on each post that when clicked will delete the said post by sending a DELETE request using fetch API at https://jsonplaceholder.typicode.com/posts/:id where :id is the id of the post. Make sure that the post is removed from the list.

// Extra challenge:
//    1. Make sure that no more than 5 network request are being sent at once. Alert user if it exceeds.
//    2. Add capability to add two more users with id 9 and 10 so that the added could also retrieve posts associated with them and delete as well. Create an input text to enter name and id.
