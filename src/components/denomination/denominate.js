// Write your code here
import "./denominate.css";

const DenominationItem = (props) => {
  const { denominationDetails, cashWithdraw } = props;
  const { value } = denominationDetails;

  const onClickWithdraw = () => {
    cashWithdraw(value);
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
<button className = 'btn' type="button" >just for commit the day </button>
    </li>
  );
};
export default DenominationItem;
