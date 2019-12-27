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
        <ModalHeader toggle={toggle}> Add New Branch </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="branch_name">Branch Name</Label>
              <Input
                type="text"
                name="branch_name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Branch Name"
                maxLength="100"
              />
            </FormGroup>
            <FormGroup>
              <Label for="location_city">City</Label>
              <Input
                type="text"
                name="location_city"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter City of Branch"
                maxLength="100"
              />
            </FormGroup>
            {/* <FormGroup check>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup> */}
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
