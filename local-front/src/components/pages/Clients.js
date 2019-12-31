import React, { Component } from "react";
import Modal from "../layout/ModalClient";
import axios from "axios";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        client_name: "",
        client_email: "",
        connect_to_branch: ""
      },
      clients: [],
      branchActive: false,
      clientActive: true,
      productActive: false,
      accountActive: false
    };
  }

  componentDidMount() {
    axios
      .get("https://bank-backend-deidra.herokuapp.com/client/")
      .then(res => this.setState({ branches: res.data.results }))
      .catch(err => console.log(err));
  }

  displayClient = status => {
    if (status) {
      return this.setState({
        branchActive: false,
        clientActive: true,
        productActive: false,
        accountActive: false
      });
    }
    return this.setState({ clientActive: false });
  };

  handleSubmit() {
    axios
      .post("https://bank-backend-deidra.herokuapp.com/client/")
      .then(res => this.componentDidMount());
  }

  handleDelete(item) {
    axios
      .delete(`https://bank-backend-deidra.herokuapp.com/client/${item.id}/`)
      .then(res => this.componentDidMount());
  }

  renderClients() {
    let newItems = [];
    newItems = this.state.clients;
    return newItems.map(item => (
      <div className="li-div row">

        <li key={item.id} className="li-render col-8">
          {item.client_name}
          {item.client_email}
        </li>

        <button 
            onClick={() => this.editItem(item)} className="btn btn-secondary mr-2 col">
            Edit{" "}
        </button>

        <button
            onClick={() => this.handleDelete(item)} className="btn btn-danger col">
            Delete{" "}
        </button>

      </div>
    ));
  }

  onSave(item) {
    axios
      .post("https://bank-backend-deidra.herokuapp.com/client/", item)
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
          `https://bank-backend-deidra.herokuapp.com/client/${item.id}/`,
          item
        )
        .then(res => this.componentDidMount());
      return;
    }
    axios
      .post("https://bank-backend-deidra.herokuapp.com/client/", item)
      .then(res => this.componentDidMount());
  };

  render() {
    console.log(this.state.clients);
    return (
      <div className="branch-box-style offset-2 col-8 justify-content-center">

        <button onClick={this.createItem} className="btn btn-dark btn-lg col-4">
          + New Client
        </button>

        <ul>{this.renderClients()}</ul>
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
export default Client;
