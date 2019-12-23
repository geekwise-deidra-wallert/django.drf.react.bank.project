// import React, {Component} from 'react';
// import axios from 'axios';


// export class Accounts extends Component{
//     state = {
//         listAccounts: []
//     }

//     deleteAccount = (accountId) => {
//         axios.delete()
//         .then(res => this.setState)
//     }

//     addAccount = (submitText) => {
//         axios.post("https://bank-backend-deidra.herokuapp.com/account/",{
//             name: submitText
//         }).then(res => this.refreshAccounts())
//         .catch(err => console.log(err));
//     }

//     componentDidMount () {
//         this.refreshList ();
//     }

//     refreshList = () => {
//         axios
//             .get("https://bank-backend-deidra.herokuapp.com/account/")
//             .then(res => {this.setState({listAccounts: res.data.results})
//             console.log(res.data)
//         })
//             .catch(error => console.log(error));
//     };

//     renderAccounts = () => {
//         const accounts = this.state.listAccounts;
//         return accounts.map(account => (
//             <li key={account.id} className="list-group-item d-flex justify-content-between align-items-center">
//                 <span className={`todo-title mr-2`}>
//                     {account.account_name}
//                 </span>
//             </li>
//         ))
         
    
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