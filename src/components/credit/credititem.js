import "./credititem.css";

const CreditItem = (props) => {
  const { creditDetails, cashCredit } = props;
  const { value } = creditDetails;

  const onClickCredit = () => {
    cashCredit(value);
  };

  return (
    <li className="credit-item">
      <button type="button" className="credit-button" onClick={onClickCredit}>
        {value}
      </button>
    </li>
  );
};
export default CreditItem;
