import React, { Component } from "react";
import { Input, Form, FormGroup } from "reactstrap";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputitem: "",

      textbox: false,
      items: [],
      textkey: "",
      searchkey: "",
      persons: [
        {
          id: 1,
          name: "jamshy",
          place: "qwe",
        },
        {
          id: 2,
          name: "abc",
          place: "qwer",
        },
        {
          id: 3,
          name: "abcd",
          place: "qwert",
        },
        {
          id: 4,
          name: "abcde",
          place: "qwerty",
        },
      ],
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.inputitem],
      inputitem: "",
    });
  };

  handleClose = (key) => {
    // const allitem = this.state.items;
    // allitem.splice(key,1);

    this.setState({
      items: this.state.items.filter((item) => item !== this.state.items[key]),
    });
  };

  handleEdit = (event, key) => {
    event.preventDefault();
    const items = this.state.items;
    items[key] = this.state.inputitem;

    this.setState({
      items: items,
      inputitem: "",
      textbox: false,
      textkey: "",
    });
    console.log(items);
  };

  addTextbox = (key) => {
    this.setState({
      textbox: true,
      textkey: key,
    });
  };

  handleSearch = (event) => {
    this.setState({
      searchkey: event.target.value,
    });
  };

  render() {
    var persons = this.state.items;
    let sub = this.state.searchkey.trim().toLowerCase();
    if (sub.length > 0) {
      persons = persons.filter((val) => val.toLowerCase().match(sub));
    }

    return (
      <div>
        <h3>Todo</h3>
        <hr />
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="inputitem"
                id="inputitem"
                value={this.state.inputitem}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="searchkey"
                id="searchkey"
                value={this.state.searchkey}
                onChange={this.handleSearch}
              />
            </FormGroup>
          </Form>
          <ul>
            {persons.map((item, index) => {
              return (
                <li key={index}>
                  {item}{" "}
                  <span
                    className="fa fa-edit fa-lg"
                    onClick={() => this.addTextbox(index)}
                  >
                    {this.state.textbox && this.state.textkey === index ? (
                      <Form onSubmit={(event) => this.handleEdit(event, index)}>
                        <Input
                          type="text"
                          name="inputitem"
                          id="inputitem"
                          value={this.state.inputitem}
                          onChange={this.handleChange}
                        ></Input>
                      </Form>
                    ) : null}
                  </span>
                  <span
                    className="fa fa-close fa-lg"
                    onClick={() => this.handleClose(index)}
                  ></span>
                </li>
              );
            })}
          </ul>
          {/* <ul>
            {persons.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Todo;
