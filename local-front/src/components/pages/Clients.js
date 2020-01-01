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
      .then(res => this.setState({ client: res.data.results }))
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

  handleDelete(client) {
    axios
      .delete(`https://bank-backend-deidra.herokuapp.com/client/${client.id}/`)
      .then(res => this.componentDidMount());
  }

  renderClients() {
    let newClient = [];
    newClient = this.state.clients;
    return newClient.map(client => (
      <div key={client.id} className="li-div row">
        {this.props.bankId === client.branch_id &&
            <li key={client.id} className="li-render col-8">
            {client.client_name}
            {client.client_email}
            </li>
        }

        <button 
            onClick={() => this.editItem(client)} className="btn btn-secondary mr-2 col">
            Edit{" "}
        </button>

        <button
            onClick={() => this.handleDelete(client)} className="btn btn-danger col">
            Delete{" "}
        </button>
      </div>
    ));
  }

  onSave(client) {
    axios
      .post("https://bank-backend-deidra.herokuapp.com/client/", client)
      .then(res => this.componentDidMount());
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeClient = { ...this.state.activeClient, [name]: value };
    this.setState({ activeClient });
  };

  createClient = () => {
    const client = { title: "", description: "", completed: false };
    this.setState({ activeClient: client, modal: !this.state.modal });
  };

  editClient = client => {
    this.setState({ activeClient: client, modal: !this.state.modal });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = client => {
    this.toggle();
    if (client.id) {
      axios
        .put(
          `https://bank-backend-deidra.herokuapp.com/client/${client.id}/`,
          client
        )
        .then(res => this.componentDidMount());
      return;
    }
        axios
        .post("https://bank-backend-deidra.herokuapp.com/client/", client)
        .then(res => this.componentDidMount());
  };

  render() {
    console.log(this.state.clients);
    return (
      <div className="branch-box-style offset-2 col-8 justify-content-center">
          {this.renderClients()}
        <button onClick={this.createClient} className="btn btn-dark btn-lg col-4">
          + New Client
        </button>

        <ul>{this.renderClients()}</ul>
        {this.state.modal ? (
          <Modal
            bankId={this.props.bankId}
            activeClient={this.state.activeClient}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}

      </div>
    );
  }
}
export default Client;
