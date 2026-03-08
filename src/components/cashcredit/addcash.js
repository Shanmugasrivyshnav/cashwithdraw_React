import { Component } from "react";

import CreditItem from "../credit/credititem";

import DenominationItem from "../denomination/denominate";

import "./addcash.css";

class CashCredit extends Component {
  state = { balance: 2000 };

  onCredit = (value) => {
    this.setState((prevState) => ({
      balance: prevState.balance + value,
    }));
  };

  render() {
    const { balance } = this.state;
    const { creditList } = this.props;
    const { denominationsList } = this.props;
    return (
      <div className="cashcreditContainer">
        <div className="profileContainer">
          <p className="profileimg">s</p>
          <h1 className="userName">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance-details">Your Balance</p>
          <div className="balance-details">
            <p className="number-balance">{balance}</p>
            <p className="curnery">In Rupees</p>
          </div>
          <div className="credit-container">
            <p className="creditHeading">Credit</p>
            <p className="money-credit">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div className="add-conatainer">
            <h1 className="add-cash">Add Cash</h1>
          </div>
          <ul className="add-list">
            {creditList.map((each) => (
              <CreditItem
                key={each.id}
                creditDetails={each}
                cashCredit={this.onCredit}
              />
            ))}
            {denominationsList.map((each) => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                cashWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default CashCredit;
