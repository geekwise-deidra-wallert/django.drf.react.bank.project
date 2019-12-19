// import React, { Component } from "react";
// // import Modal from "./components/Modal";
// import axios from "axios";

// class App extends Component {
//     constructor ( props ) {
//         super ( props );

//         this.state = {
//             accountInfo: {
//                 id: 2,
//                 account_holder: "De"
//             },
//             listAccounts: []
//         };
//     }

//     componentDidMount () {
//         this.refreshList ();
//     }

//     refreshList = () => {
//         axios
//             .get("https://bank-backend-deidra.herokuapp.com/account/")
//             .then(Response => this.setState({listAccounts: Response.data.results}))
//             .catch(error => console.log(error));
//     };

//     renderAccounts = () => {
//         const accounts = this.state.listAccounts;
//         return this.accounts
         
//             // <li key={account.id} className="list-group-item d-flex justify-content-between align-items-center">
//             //     <span className={`todo-title mr-2`}>
//             //         {account.account_name}
//             //     </span>
//             // </li>
//     };

//     render () {
//         return (
//             <main className="content">
//                 <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
//                 <div className="row ">
//                     <div className="col-md-6 col-sm-10 mx-auto p-0">
//                         <div className="card p-3">
//                             <ul className="list-group list-group-flush">
//                                 {this.renderAccounts()}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </main> 
//         );
//     }

// }
// export default App;
