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

export default class ModalBranch extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
        
      activeItem: this.props.activeItem
      }
  }

  handleChange = event => {
    let { name, value } = event.target;
    if ( event.target.type === "checkbox") {
        value = event.target.checked;
    }
  
    const activeItem = { ...this.state.activeItem, [name]: value }
    this.setState({ activeItem })
  } 

  // on_save = event => {
  //   console.log( event )
  // }

  // handle_submit = event => {
  //       console.log( event )
  // }

  render() {
    const { toggle, onSave } = this.props;
    return (
    <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Branch Item </ModalHeader>
        <ModalBody>
        <Form>
            <FormGroup>
            <Label for="branch_name">Branch</Label>
            <Input
                id='input_branch_name'
                type="text"
                name="branch_name"
                value={ this.state.activeItem.branch_name }
                // value={this.state.activeItem.branch_name}
                onChange={this.handleChange}
                placeholder="branch:"
            />
            </FormGroup>
            <FormGroup>
            <Label for="location_city">City</Label>
            <Input
                type="text"
                name="location_city"
                value={this.state.activeItem.location_city}
                onChange={this.handleChange}
                placeholder="city:"
            />
            </FormGroup>
            <FormGroup>
            <Label for="location_address">Address</Label>
            <Input
                type="text"
                name="location_address"
                value={this.state.activeItem.location_address}
                onChange={this.handleChange}
                placeholder="address:"
            />
            </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="success" onClick={() => onSave(this.state.activeItem)
        }
        >
        Save
        </Button>
        </ModalFooter>
    </Modal>
    );
  }
}











// import React, { Component } from "react";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Input,
//   Label
// } from "reactstrap";

// export default class CustomModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeItem: this.props.activeItem };
//   }
//   handleChange = e => {
//     let { name, value } = e.target;
//     if (e.target.type === "checkbox") {
//       value = e.target.checked;
//     }
//     const activeItem = { ...this.state.activeItem, [name]: value };
//     this.setState({ activeItem });
//   };





//   render() {
//     const { toggle, onSave } = this.props;
//     return (
//       <Modal isOpen={true} toggle={toggle}>
//         <ModalHeader toggle={toggle}> Add New Branch </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="branch_name">Branch Name</Label>
//               <Input
//                 type="text"
//                 name="branch_name"
//                 value={this.state.activeItem.name}
//                 onChange={this.handleChange}
//                 placeholder="Enter Branch Name"
//                 maxLength="100"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="location_city">City</Label>
//               <Input
//                 type="text"
//                 name="location_city"
//                 value={this.state.activeItem.name}
//                 onChange={this.handleChange}
//                 placeholder="Enter City of Branch"
//                 maxLength="100"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="location_address">Address</Label>
//               <Input
//                 type="text"
//                 name="location_address"
//                 value={this.state.activeItem.name}
//                 onChange={this.handleChange}
//                 placeholder="Enter Address of Branch"
//                 maxLength="100"
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="success" onClick={
//               (event) => {
//                 console.log( this.state.activeItem )
//                 console.log( Date.now().toString() )
//                 // return this.state.activeItem
//             }}>
//           Save
//           </Button>
//         </ModalFooter>
//       </Modal>
//     );
//   }
// }
