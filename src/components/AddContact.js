import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Ajouter un contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Nom</label>
                        <input type="text" name="name" placeholder="Nom" />
                    </div>
                    <div className="field">
                        <label>Mail</label>
                        <input type="email" name="mail" placeholder="Mail" />
                    </div>
                    <button className="ui button blue">Ajouter</button>
                </form>
            </div>
        );
    };
};

export default AddContact;