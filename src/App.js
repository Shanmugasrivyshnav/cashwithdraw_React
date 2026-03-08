import CashWithdrawal from "./components/cashwithdraw/withdraw";

import CashCredit from "./components/cashcredit/addcash";

import "./App.css";

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];
const creditList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];
const App = () => (
  <CashWithdrawal
    denominationsList={denominationsList}
    creditList={creditList}
  />
);
export default App;
