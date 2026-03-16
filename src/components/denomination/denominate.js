// Write your code here
import "./denominate.css";

const DenominationItem = (props) => {
  const { denominationDetails, cashWithdraw } = props;
  const { value } = denominationDetails;

  const onClickWithdraw = () => {
    cashWithdraw(value + 1);
  };

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickWithdraw}
      >
        {value}
      </button>
    </li>
  );
};
export default DenominationItem;
