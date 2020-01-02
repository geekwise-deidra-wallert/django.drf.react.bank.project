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
      };
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
                value={this.state.activeClient.client_name}
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
                value={this.state.activeClient.client_email}
                onChange={this.handleChange}
                placeholder="Enter Clients Email"
                maxLength="100"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{position: 'relative', bottom: '5px', paddingRight: '13px'}} for="connect_to_branch">Branches</Label>
                <select name="connect_to_branch">
                {this.state.branch_id.map((value, index) => {
                    return <option key={index} value={value}>{value.branch_name}</option>
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
