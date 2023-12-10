import React, { useState } from "react";
import "./MyWallet.css"; // Importing the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

function BalancePage() {
  const [balance, setBalance] = useState(1000); // Example starting balance
  const [amountToAdd, setAmountToAdd] = useState("");

  const handleInputChange = (e) => {
    setAmountToAdd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmountToAdd = parseFloat(amountToAdd);
    if (!isNaN(numAmountToAdd) && numAmountToAdd > 0) {
      setBalance(balance + numAmountToAdd);
      setAmountToAdd(""); // Reset input field after adding
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div className="balance-page text-center ">
      <div className="row">
        <div className="balance-section  col-5">
          <img
            src="/assets/images/e-wallet.png"
            alt="Wallet Icon"
            className="balance-img"
          />
          <div className="balance-display">
            <h4>
              Số dư: <span>${balance.toFixed(2)}</span>
            </h4>
          </div>
        </div>

        <div className="add-balance-section col">
                    <h3 className="mt-5 mb-3">Nhập số tiền cần nạp:</h3>
                    <form onSubmit={handleSubmit} className="add-balance-form">
                        <div className="input-group mb-3">
                            <input
                                type="number"
                                value={amountToAdd}
                                onChange={handleInputChange}
                                placeholder="Nhập số tiền"
                                min={0}
                                className="form-control"
                            />
                        <span className="input-group-text">
              {" "}
              VNĐ 
            </span>
          
                        </div>
                        <button type="submit">Nạp</button>
                    </form>
                </div>
      </div>
      <div className="row">
        <hr className="bg-dark my-3 "/>
                <div className="col">
                    <p>Ngân hàng hỗ trợ:</p>
                    <div className="icon-group d-flex justify-content-between">
                    <FontAwesomeIcon icon={faPaypal} size="2x" style={{ color: '#0070ba' }} />
                        <FontAwesomeIcon icon={faCreditCard} size="2x" style={{ color: '#000' }} />
                        <FontAwesomeIcon icon={faCcMastercard} size="2x" style={{ color: '#ff5f00' }} />
                    </div>
                </div>
            </div>
    </div>
  );
}

export default BalancePage;
