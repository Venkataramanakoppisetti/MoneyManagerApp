import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {id, title, amount, type} = transactionDetails

  const onClickDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="table-row-text">{title}</p>
      <p className="table-row-text">{amount}</p>
      <p className="table-row-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onClickDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
