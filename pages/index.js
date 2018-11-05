import React from "react";
import * as superagent from "superagent";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const { db } = req;
      console.log(db);
      const list = await db
        .collection("Company")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      return { list };
    }

    const { list } = await superagent
      .get("http://localhost:3000/api")
      .then(res => res.body);
    return { list };
  }

  constructor() {
    super();
    this.state = { formData: { name: "", description: "" } };
  }

  setForm(prop) {
    return ev => {
      const state = this.state || {};
      const formData = state.formData || {};
      this.setState(
        Object.assign({}, state, {
          formData: Object.assign({}, formData, {
            [prop]: ev.target.value
          })
        })
      );
    };
  }

  isFormInvalid() {
    const state = this.state || {};
    const formData = state.formData || {};
    return !formData.name || !formData.description;
  }

  remove(_id) {
    return ev => {
      superagent
        .del(`http://localhost:3000/api/${_id}`)
        .then(() => {
          const state = this.state || {};
          const list = this.state.list || this.props.list || [];
          this.setState(
            Object.assign({}, state, {
              list: list.filter(company => company._id !== _id)
            })
          );
        })
        .catch(error => console.error(error.stack));
    };
  }

  add() {
    return ev => {
      ev.preventDefault();
      const state = this.state || {};
      const formData = state.formData || {};
      this.setState(
        Object.assign({}, this.state, {
          formData: { name: "", description: "" }
        })
      );

      superagent
        .post("http://localhost:3000/api", formData)
        .then(res => {
          const state = this.state || {};
          const list = this.state.list || this.props.list || [];
          this.setState(
            Object.assign({}, state, {
              list: [res.body.company].concat(list)
            })
          );
        })
        .catch(error => console.error(error.stack));
    };
  }

  render() {
    const list = this.state.list || this.props.list;
    const { formData } = this.state;
    return (
      <div id="container">
        <h1>New Company</h1>
        <div id="input-company">
          <form onSubmit={this.add()}>
            <input
              type="text"
              onChange={this.setForm("name")}
              value={formData.title}
              placeholder="Company Name"
            />
            <input
              type="text"
              onChange={this.setForm("description")}
              value={formData.author}
              placeholder="Description"
            />
            <button disabled={this.isFormInvalid()}>Add</button>
          </form>
        </div>
        <h1>Company List</h1>
        <div id="company-list">
          <ul>
            {list.map(company => (
              <div key={company._id}>
                <span className="remove" onClick={this.remove(company._id)}>
                  &times;
                </span>
                &nbsp;
                <span className="description">
                  <i>{company.name}</i>
                  <br />
                  Description: {company.description}
                </span>
              </div>
            ))}
          </ul>
        </div>
        <style jsx>{`
          div {
            font-family: "Helvetica", "sans-serif";
          }
          #container {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          h1 {
            color: #ccbc1d;
          }
          button {
            background-color: #ff257b;
            color: #ffffff;
            font-weight: bold;
            border: 0px;
            border-radius: 2px;
            padding: 5px;
            padding-left: 8px;
            padding-right: 8px;
            margin: 5px;
          }
          input {
            padding: 5px;
            border: 0px;
            background-color: #f0f0f0;
            margin: 5px;
          }
          .description {
            position: relative;
            top: -0.2em;
          }
          .remove {
            cursor: pointer;
            color: #ff257b;
            font-size: 1.5em;
          }
        `}</style>
      </div>
    );
  }
}
