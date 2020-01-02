/*
import React, { Component } from "react";
import Modal from "../layout/ModalBranch";
import axios from "axios";


/*
class Branch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        branch_name: "",
        location_city: "",
        location_address: ""
      },
      branches: [],
      branchActive: true,
      clientActive: false,
      productActive: false,
      accountActive: false
    };
  }

  componentDidMount() {
    axios
      .get("https://bank-backend-deidra.herokuapp.com/branch/")
      .then(res => this.setState({ branches: res.data.results }))
      .catch(err => console.log(err));
  }

  displayBranch = status => {
    if (status) {
      return this.setState({
        branchActive: true,
        clientActive: false,
        productActive: false,
        accountActive: false
      });
    }
    return this.setState({ branchActive: false});
  }

  handleSubmit() {
    axios
      .post("https://bank-backend-deidra.herokuapp.com/branch/")
      .then(res => this.componentDidMount());
  }

  handleDelete(item) {
    axios
      .delete(`https://bank-backend-deidra.herokuapp.com/branch/${item.id}/`)
      .then(res => this.componentDidMount());
  }

  renderBranches() {
    
    // let branch_to_add =[]
    // branch_to_add.push( this.state.branches )
    // return branch_to_add.map( (value, index) => {
    //   console.log(`value: ${value}`)
    //   console.log(`index: ${index}`)
    // })
    
    let newItems = [];
    newItems = this.state.branches;

    return newItems.map(item => (
      <div key={item.id} className="li-div row">

        <li key={item.id} className="li-render col-8">
          {item.branch_name}
          {item.location_city}
          {item.location_address}
        </li>

        <button
          onClick={() => this.editItem(item)} className="btn btn-secondary mr-2 col">
          Edit{" "}
        </button>

        <button
          onClick={() => this.handleDelete(item)}className="btn btn-danger col">
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
    const item = { branch_name: "", location_city: "", location_address: "",completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal, createClient: !this.state.createClient });
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
    console.log(this.state.branches);
    return (
      <div className="branch-box-style offset-2 col-8 justify-content-center">

        <button onClick={this.createItem} className="btn btn-dark btn-lg col-4">
          + New Branch
        </button>

        <ul>{this.renderBranches()}</ul>
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


export default Branch
*/