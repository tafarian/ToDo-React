import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

document.addEventListener('DOMContentLoaded', function(){


    class List extends React.Component {

        handleDoneClick = () => {
            if ( typeof this.props.onDone === 'function' ){
                this.props.onDone(this.props.title);
            }
        };

        handleRemoveClick = () => {
            if ( typeof this.props.onRemove === 'function' ){
                this.props.onRemove(this.props.title);
            }
        };

        render() {

            return (
                <ul>
                    {
                        this.props.items.map((item, index) => <li key={index}>
                            <i className="fas fa-times"
                               onClick={this.handleRemoveClick}></i>
                            <i className="fas fa-check"
                               onClick={this.handleDoneClick}></i>
                            {item}
                        </li>)
                    }
                </ul>
            )
        }
    }

    class App extends React.Component {
        state = {
            term: '',
            items: [],
        };

        onChange = (event) => {
            this.setState({ term: event.target.value });
        };

        onSubmit = (event) => {
            event.preventDefault();
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        };

        handleItemDone = (e) => {
            console.log("DONE")
        };

        handleItemRemove = (e) => {
            console.log("REMOVE")
        };

        render() {
            return (
                <div>
                    <form className="App" onSubmit={this.onSubmit}>
                        <input value={this.state.term} onChange={this.onChange} />
                        <button>Submit</button>
                    </form>
                    <List items={this.state.items}
                          onDone={this.handleItemDone}
                          onRemove={this.handleItemRemove}/>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});