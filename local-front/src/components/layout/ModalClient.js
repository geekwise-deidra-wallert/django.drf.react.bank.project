import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class ClientModal extends Component {

  constructor(props) {
      super(props);
      this.state = {

        activeClient: this.props.activeClient,
        branch_id: this.props.branch_id,
        branch_value: "",

      };
  }
  handleChange = event => {
     let { name, value } = event.target;
      if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    const activeClient = { ...this.state.activeClient, [name]: value };
    this.setState({ activeClient });
  };

  branchInput = e => {
    console.log(e.target.value)
    this.setState({branch_value:e.target.value})
    let activeClient = this.state.activeClient;
    activeClient.connect_to_branch = e.target.value;
    this.setState({ activeClient });
    
  }


  render() {
    const { branch_value } = this.state;
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Add New Client </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="client_name">Name</Label>
              <Input
                type="text"
                name="client_name"
                // value={this.state.activeClient.client_name}
                onChange={this.handleChange}
                placeholder="Enter Name of Client"
                maxLength="100"
              />
            </FormGroup>
            <FormGroup>
              <Label for="client_email">Email</Label>
              <Input
                type="text"
                name="client_email"
                // value={this.state.activeClient.client_email}
                onChange={this.handleChange}
                placeholder="Enter Clients Email"
                maxLength="100"
              />
            </FormGroup>
            <FormGroup>
              <Label for="connect_to_branch">Branches</Label>
                <select onChange={this.branchInput} value={"branch_value"} name="connect_to_branch">
                {this.state.branch_id.map((bValue, index) => {
                    return <option key={index} value={bValue.url}>{bValue.branch_name}</option>

                  })
                }
                </select>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeClient)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
