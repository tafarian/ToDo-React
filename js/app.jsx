import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

document.addEventListener('DOMContentLoaded', function(){


    class ToDoItem extends React.Component {

        handleRemoveClick = () => {
            if ( typeof this.props.onRemove === 'function' ){
                this.props.onRemove(this.props.title);
            }
        };

        render() {

            return (
                <li className="box">
                    <i className="fas fa-times"
                       onClick={this.handleRemoveClick}
                       style={{marginRight: "10px"}}></i>
                    <span className="toDo">{this.props.title}</span>
                </li>
            )
        }
    }

    class ToDoList extends React.Component {
        state = {
            term: '',
            items: [],
        };

        onChange = (event) => {
            this.setState({
                term: event.target.value
            });
        };

        onSubmit = (event) => {
            event.preventDefault();
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        };

        handleItemRemove = (title) => {
            const newItems = this.state.items.filter(item => {
                return item !== title;
            });
            this.setState({
                items: newItems
            });
        };

        render() {
            const items = this.state.items.map((item, id) => {
                return <ToDoItem
                    key={ this.id }
                    title={item}
                    onRemove={this.handleItemRemove}/>
            });

            return (
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.term} onChange={this.onChange} />
                        <button>Send</button>
                    </form>
                    <ul>
                        {items}
                    </ul>
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {

            return <ToDoList/>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});