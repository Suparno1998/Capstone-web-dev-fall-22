import React from "react";
import { createRoot } from "react-dom/client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navbar from "./components/Navbar.jsx";
import HeroHomePage from "./components/HeroHomePage.jsx";
import Newsletter from "./components/Newletter.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "react-bootstrap/Modal";
import MealPlan from "./components/MealPlan/Mealplan.jsx";
import BMIComponent from "./pages/Bmi/bmi.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register.jsx";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      team: [],
      isLoginModalOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  async componentDidMount() {
    // const data = await fetch("/check");
    // let response = await data.json();
    // if (response.status === "works") {
    //   this.setState({ team: response.data });
    // 
  }
  handleOpen() {
    console.log("hi");
    this.setState({
      isLoginModalOpen: true,
    });
  }
  handleLogin() {}
  handleRegister() {}
  handleClose() {
    this.setState({
      isLoginModalOpen: false,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        ></Navbar>
        {/* <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1> */}
        <HeroHomePage />
        <MealPlan />
        <BMIComponent/>
        <Newsletter />
        <Footer />
        <Modal show={this.state.isLoginModalOpen} onHide={this.handleClose}>
          <Modal.Body className="p-0">
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="login" title="Login">
                <Login handleClose={this.handleClose}></Login>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register handleClose={this.handleClose}></Register>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<App />);
