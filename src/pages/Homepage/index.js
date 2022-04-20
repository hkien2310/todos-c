import React from "react";
import { Link } from "react-router-dom";
import appPaths from "../../constants/appPaths";

const Homepage = () => {
  return (
    <div>
      <button>
        <Link to={appPaths.todo.list}>Todo</Link>
      </button>
      <button>
        <Link to={appPaths.post.list}>Post</Link>
      </button>
      <button>
        <Link to={appPaths.comment.list}>Comment</Link>
      </button>
      <button>
        <Link to={appPaths.photos.list}>Photos</Link>
      </button>
      <button>
        <Link to={appPaths.users.list}>Users</Link>
      </button>
    </div>
  );
};

export default Homepage;
