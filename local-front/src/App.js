import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        branch_name: "",
        location_city: ""
      },
      branches: []
    };
  }
  componentDidMount() {
    axios
      .get("https://bank-backend-deidra.herokuapp.com/branch/")
      .then(res => this.setState({ branches: res.data.results }))
      .catch(err => console.log(err));
  }
  handleSubmit(item) {
    let api_result;
    console.log(item + 'item');
    let api_posturl = 'https://bank-backend-deidra.herokuapp.com/branch/'

    const axios = require('axios');
    const api_url = 'https://bank-backend-deidra.herokuapp.com/branch/'
    const custom_options = {
      headers: {
        'Origin' : 'https://bank-backend-deidra.herokuapp.com',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type' : 'application/json',
        'Accept' : 'text/html; q=1.0, */*',
        'X-Requested-With' : 'XMLHttpRequest',
        'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials' : true,
      }
    };

      // let post_data = {
      //   branch: 'Bank Of Seattle',
      //   address: '600 University St Ste 1850, Seattle, WA 98101'
      // }

    axios
        .post( api_url, item, custom_options )
        .then( (response) => {
          console.log(response);
      })
      .catch( (error) => {
          console.log(error);
      });

    // axios
    //   .post("https://bank-backend-deidra.herokuapp.com/branch/")
    //   .then(res => this.componentDidMount());
  }
  handeDelete(item) {
    axios
      .delete(`https://bank-backend-deidra.herokuapp.com/branch/${item.id}/`)
      .then(res => this.componentDidMount());
  }
  renderBranches() {
    let newItems = [];
    newItems = this.state.branches;
    return newItems.map(item => (
      <div>
        <li key={item.id}>{item.location_name}</li>
        <button
          onClick={() => this.editItem(item)}
          className="btn btn-secondary mr-2"
        >
          {" "}
          Edit{" "}
        </button>
        <button
          onClick={() => this.handleDelete(item)}
          className="btn btn-danger"
        >
          Delete{" "}
        </button>
      </div>
    ));
  }

  onSave(item) {
    axios
      .post("https://bank-backend-deidra.herokuapp.com/branch/", item)
      .then(res => this.componentDidMount());
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(
          `https://bank-backend-deidra.herokuapp.com/branch/${item.id}/`,
          item
        )
        .then(res => this.componentDidMount());
      return;
    }
    axios
      .post("https://bank-backend-deidra.herokuapp.com/branch/", item)
      .then(res => this.componentDidMount());
  };
  render() {
    return (
      <div>
        <ul>{this.renderBranches()}</ul>
        <button onClick={this.createItem} className="btn btn-primary">
          Add task
        </button>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}
export default App;
// "https://bank-backend-deidra.herokuapp.com/todos/"
