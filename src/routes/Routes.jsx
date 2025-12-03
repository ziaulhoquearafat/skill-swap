import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import AllSkills from "../pages/AllSkills";
import ContactUs from "../pages/ContactUs";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import SignUp from "../pages/SignUp";
import SkillDetails from "../pages/SkillDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "all-skills",
        Component: AllSkills,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "/skill-details/:id",
        element: <SkillDetails />,
        loader: ({ params }) =>
          fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => data.find((skill) => skill.skillId == params.id)),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
]);

export default router;
