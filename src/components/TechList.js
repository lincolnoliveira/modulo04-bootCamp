import React, { Component } from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: ['Node.js', 'ReactJS', 'e-gen']
    };

    // PARA TER ACESSO AO this, A FUNÇÃO PRECISA SER ARROW FUNCTION
    handleInputChange = e => {
        this.setState({newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault(); // previne o envio do form para o backend

        this.setState({ 
            techs : [... this.state.techs, this.state.newTech],
            newTech : ''
        });
    }

    handleDelete = (tech) => {
        this.setState({
            techs : this.state.techs.filter( t => t !== tech)
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>{this.state.newTech}</h2>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech} 
                            <button onClick={() =>this.handleDelete(tech)} type="button">Remover</button>
                        </li>
                    ))}
                </ul>
                <input type="text" onChange={this.handleInputChange} 
                       value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;