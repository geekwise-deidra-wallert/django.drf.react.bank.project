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

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: this.props.activeItem };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
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
                value={this.state.activeItem.name}
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
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Clients Email"
                maxLength="100"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
