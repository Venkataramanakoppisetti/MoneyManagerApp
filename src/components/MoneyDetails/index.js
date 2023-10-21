import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount} = props

  return (
    <div className="money-details-item">
      <div className="balance-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-image"
          alt="balance"
        />
        <div className="details-container">
          <p className="balance-details-text">Your Balance</p>
          <p className="balance-in-rupees" data-testid="balanceAmount">
            Rs{balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-image"
          alt="income"
        />
        <div className="details-container">
          <p className="balance-details-text">Your Income</p>
          <p className="balance-in-rupees" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenditure-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-image"
          alt="expenses"
        />
        <div className="details-container">
          <p className="balance-details-text" data-testid="expensesAmount">
            Your Expenses
          </p>
          <p data-testid="expensesAmount" className="balance-in-rupees">
            0
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
