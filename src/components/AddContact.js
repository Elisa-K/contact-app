import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory !");
            return;
        };
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };

    render() {
        return (
            <div className="ui main">
                <h2>Ajouter un contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Nom</label>
                        <input type="text" name="name" placeholder="Nom" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Mail</label>
                        <input type="email" name="mail" placeholder="Mail" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Ajouter</button>
                </form>
            </div>
        );
    };
};

export default AddContact;