import React, { Component } from 'react'

export class Dashboard extends Component {
    // static contextType = AuthContext

    // componentDidMount(){
    //     this.context.dispatch({
    //         type:'HEADER_CHANGE',
    //         payload: 'Home',
    //     })
    // }

    render() {
        return (
            <div className="container">

                <section className="text-center form-top-padding purple_container">
                    <div className="container">
                        <h1 className="jumbotron-heading name_font">Your Dashboard</h1>
                        <p className="lead name_font">Information "displayed" below!</p>
                    </div>
                </section>

                <section className="form-top-padding filler">
                </section>
                <section className="form-top-padding filler">
                </section>
                <section className="form-top-padding filler">
                </section>

            </div>        
    )
    }
}

export default Dashboard