import React, { Component } from "react";
import "./styles.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      rrsp: 0,
      spouse_rrsp: 0,
      total: 10,
      Result: ""
    };
  }

  rrsp_changed = e => {
    this.setState({ rrsp: e.target.value });
  };

  spousal_rrsp_changed = e => {
    this.setState({ spouse_rrsp: e.target.value });
  };

  GetTotal = e => {
    return Number(this.state.rrsp) + Number(this.state.spouse_rrsp);
  };

  GetLabelColor = e => {
    return this.GetTotal() <= 100 ? "noerror" : "error";
  };

  GetResult = e => {
    var str = "";
    var isValid = this.GetTotal() <= 100;
    if (isValid) str = "Result is valid";
    else str = "Result is invalid";
    return str;
  };

  //(this.state.rrsp + this.state.spouse_rrsp)

  render() {
    return (
      <div className="App">
        <div class="width-100">
          <table clsss="table">
            <tr>
              <td>
                <b>Plan Name</b>
              </td>
              <td>
                <b>Member</b>
              </td>
              <td>
                <b>Employer</b>
              </td>
            </tr>
            <tr>
              <td>Registered retirement savings plan (RRSP)</td>
              <td>
                <input
                  type="text"
                  value={this.state.rrsp}
                  onChange={this.rrsp_changed}
                  // onChange="rrsp_changed"
                />
              </td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Spousal registered retirement savings plan (RRSPs)</td>
              <td>
                <input
                  type="text"
                  value={this.state.spouse_rrsp}
                  onChange={this.spousal_rrsp_changed}
                />
              </td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Total percent allocation</td>
              <td align="left">
                <span>{this.GetTotal()}%</span>
              </td>
              <td>100%</td>
            </tr>
            <tr>
              <td colspan="3">&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3">
                <label
                  className={this.GetLabelColor()}
                  class="alert alert-danger"
                >
                  {this.GetResult()}
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
