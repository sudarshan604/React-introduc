import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/myApps" element={<Navigate to="/Learn" />} />
      <Route path="/Learn" element={<Learn />}>
        <Route path="Courses" element={<Courses />}>
          <Route path=":CourseId" element={<CourseId />} />
        </Route>
        <Route path="Bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Router Home</h1>
    </div>
  );
}
function Learn() {
  return (
    <div>
      <h1>Learn Route</h1>
      <Link to="/Learn/Courses">Course</Link>
      <Link to="/Learn/Bundles">Bundles</Link>

      <Outlet />
    </div>
  );
}

function Courses() {
  const language = ["react", "vue", "angular"];
  const randomCourse = language[Math.floor(Math.random() * language.length)];
  return (
    <div>
      <h1>Courses</h1>
      <NavLink
        style={({ isActive }) => ({
          background: isActive ? "red" : "yellow",
        })}
        to={`/Learn/Courses/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>
      <NavLink to="/Learn/Courses/test">test</NavLink>

      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>BUndles</h1>
    </div>
  );
}

function CourseId() {
  const { CourseId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <p>your course id={CourseId}</p>
      <button onClick={() => navigate("/dashboard", { state: CourseId })}>
        price
      </button>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Dashboard----{location.state}</h1>
    </div>
  );
}
