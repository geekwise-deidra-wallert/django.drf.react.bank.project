import React, { Component } from "react";
// import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
    
    state = {
        listAccounts: []
    }

    componentDidMount () {
        this.refreshList ();
    }

    refreshList = () => {
        axios
            .get("https://bank-backend-deidra.herokuapp.com/account/")
            .then(res => {this.setState({listAccounts: res.data.results})
            console.log(res.data)
        })
            .catch(error => console.log(error));
    };

    renderAccounts = () => {
        const accounts = this.state.listAccounts;
        return accounts.map(account => (
            <li key={account.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span className={`todo-title mr-2`}>
                    {account.account_name}
                </span>
            </li>
        ))
         
    
    };

    render () {
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
                <div className="row ">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <ul className="list-group list-group-flush">
                                {this.renderAccounts()}
                            </ul>
                        </div>
                    </div>
                </div>
            </main> 
        );
    }

}
export default App;








// import React, { Component } from "react";
// import Modal from "./components/Modal";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       activeItem: {
//         title: "",
//         description: "",
//         completed: false
//       },
//       todoList: []
//     };
//   }
//   componentDidMount() {
//     this.refreshList();
//   }
//   refreshList = () => {
//     axios
//       .get("https://bank-backend-deidra.herokuapp.com/todos/")
//       .then(res => this.setState({ todoList: res.data.results }))
//       .catch(err => console.log(err));
//   };
//   displayCompleted = status => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }
//     return this.setState({ viewCompleted: false });
//   };
//   renderTabList = () => {
//     return (
//       <div className="my-5 tab-list">
//         <span
//           onClick={() => this.displayCompleted(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           complete
//         </span>
//         <span
//           onClick={() => this.displayCompleted(false)}
//           className={this.state.viewCompleted ? "" : "active"}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };
//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.todoList.filter(
//       item => item.completed === viewCompleted
//     );
//     return newItems.map(item => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2 ${
//             this.state.viewCompleted ? "completed-todo" : ""
//           }`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button
//             onClick={() => this.editItem(item)}
//             className="btn btn-secondary mr-2"
//           >
//             {" "}
//             Edit{" "}
//           </button>
//           <button
//             onClick={() => this.handleDelete(item)}
//             className="btn btn-danger"
//           >
//             Delete{" "}
//           </button>
//         </span>
//       </li>
//     ));
//   };
//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };
//   handleSubmit = item => {
//     this.toggle();
//     if (item.id) {
//       axios
//         .put(
//           `https://bank-backend-deidra.herokuapp.com/todos/${item.id}/`,
//           item
//         )
//         .then(res => this.refreshList());
//       return;
//     }
//     axios
//       .post("https://bank-backend-deidra.herokuapp.com/todos/", item)
//       .then(res => this.refreshList());
//   };
//   handleDelete = item => {
//     axios
//       .delete(
//         `https://bank-backend-deidra.herokuapp.com/todos/${item.id}`
//       )
//       .then(res => this.refreshList());
//   };
//   createItem = () => {
//     const item = { title: "", description: "", completed: false };
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };
//   editItem = item => {
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };
//   render() {
//     return (
//       <main className="content">
//         <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
//         <div className="row ">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="">
//                 <button onClick={this.createItem} className="btn btn-primary">
//                   Add task
//                 </button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {this.state.modal ? (
//           <Modal
//             activeItem={this.state.activeItem}
//             toggle={this.toggle}
//             onSave={this.handleSubmit}
//           />
//         ) : null}
//       </main>
//     );
//   }
// }
// export default App;
