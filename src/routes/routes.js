import TodosList from "../pages/Todo/TodosList";
import TodoDetail from "../pages/Todo/TodoDetail";
import Homepage from "../pages/Homepage";
import appPaths from "../constants/appPaths";
import PostList from "../pages/Post/PostList";
import PostDetail from "../pages/Post/PostDetail";
import CommentsList from "../pages/Comments/CommentLists";
import CommentDetail from "../pages/Comments/CommentDetail";
import PhotosList from "../pages/Photos/PhotosList";
import PhotoDetail from "../pages/Photos/PhotoDetail";
import UsersList from "../pages/Users/UsersList";
import UserDetail from "../pages/Users/UserDetail";

export const routes = [
  {
    path: appPaths.todo.list,
    component: TodosList,
  },
  {
    path: appPaths.todo.detail,
    component: TodoDetail,
  },
  {
    path: appPaths.homepage,
    component: Homepage,
  },
  {
    path: appPaths.post.list,
    component: PostList,
  },
  {
    path: appPaths.post.detail,
    component: PostDetail,
  },
  {
    path: appPaths.comment.list,
    component: CommentsList,
  },
  {
    path: appPaths.comment.detail,
    component: CommentDetail,
  },
  {
    path: appPaths.photos.list,
    component: PhotosList,
  },
  {
    path: appPaths.photos.detail,
    component: PhotoDetail,
  },
  {
    path: appPaths.users.list,
    component: UsersList,
  },
  {
    path: appPaths.users.detail,
    component: UserDetail,
  },
];