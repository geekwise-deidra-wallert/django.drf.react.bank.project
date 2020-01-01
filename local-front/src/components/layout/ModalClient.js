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
    this.state = { activeClient: this.props.activeClient };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeClient = { ...this.state.activeClient, [name]: value };
    this.setState({ activeClient });
  };
  render() {
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
                value={this.state.activeClient.name}
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
                value={this.state.activeClient.name}
                onChange={this.handleChange}
                placeholder="Enter Clients Email"
                maxLength="100"
              />
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
