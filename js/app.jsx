import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

document.addEventListener('DOMContentLoaded', function(){

    const List = props => (
        <ul>
            {
                props.items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    );

    class App extends React.Component {
        state = {
            input: '',
            items: []
        };

        onChange = (event) => {
            this.setState({ input: event.target.value });
        };

        onSubmit = (event) => {
            event.preventDefault();
            this.setState({
                input: '',
                items: [...this.state.items, this.state.input]
            });
        };

        render() {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.input} onChange={this.onChange} />
                        <button>Submit</button>
                    </form>
                    <List items={this.state.items} />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});