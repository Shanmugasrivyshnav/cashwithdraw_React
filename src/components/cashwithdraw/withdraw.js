import { Component } from "react";

import DenominationItem from "../denomination/denominate";

import CreditItem from "../credit/credititem";

import "./withdraw.css";

class CashWithdrawal extends Component {
  state = { balance: 2000 };

  onWithdraw = (value) => {
    this.setState((prevState) => ({
      balance: prevState.balance - value,
    }));
  };
  onCredit = (value) => {
    this.setState((prevState) => ({
      balance: prevState.balance + value,
    }));
  };

  render() {
    const { balance } = this.state;
    const { denominationsList } = this.props;
    const { creditList } = this.props;

    return (
      <div className="cashwithdrawContainer">
        <div className="profileContainer">
          <p className="profileimg">s</p>
          <h1 className="userName">Sarah Willams</h1>
        </div>
        <div className="balance-container">
          <p className="balance-details">Your Balance</p>
          <div className="balance-details">
            <p className="number-balance">{balance}</p>
            <p className="curnery">In Rupees</p>
          </div>
          <div className="withdraw-container">
            <p className="withdrawHeading">Withdraw</p>
            <p className="money-withdraw">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations-list">
            {denominationsList.map((each) => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                cashWithdraw={this.onWithdraw}
              />
            ))}
            {creditList.map((credit) => (
              <CreditItem
                key={creditList.id}
                creditDetails={credit}
                cashCredit={this.onCredit}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default CashWithdrawal;
