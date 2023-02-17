import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import EditProfile from "./views/EditProfile/EditProfile";
import Feed from "./views/Feed/Feed";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Movies from "./views/Movies/Movies";
import Profile from "./views/Profile/Profile";
import Series from "./views/Series/Series";
import UserList from "./views/UserList/UserList";
import Register from "./views/Register/Register";
import VerticalLayout from "./components/Layout/VerticalLayOut";
import ShowsDetails from "./views/ShowsDetails/ShowsDetails";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<VerticalLayout />}>
        <Route path="movies" element={<Movies />} />
        <Route path="shows" element={<Series />} />
        <Route path="feed" element={<Feed />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="series/:id" element={<ShowsDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="userList" element={<UserList />} />
        <Route path="editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
