import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Wallet.css";
import Slider from "react-input-slider";
import Logo from "../../store/logo/alpha.png";

function Wallet() {
  // tab option state
  const [isTabActive, setTabActive] = useState(true);

  const [getStakeValue, setStakeValue] = useState(0);
  const [getFlexAmount, setFlexAmount] = useState(0);
  const [getWeeksValue, setWeeksValue] = useState({ x: 0, xmax: 52 });

  const flexible = () => {
    setTabActive(false);
  };
  const locked = () => {
    setTabActive(true);
  };
  const stackeAmount = (e) => {
    setStakeValue(e.target.value);
  };
  const flexAmount = (e) => {
    setFlexAmount(e.target.value);
  };

  const data = 1 + (1 / 52) * getWeeksValue.x;

  // APR value
  let apr;
  if (getWeeksValue.x <= 2) {
    apr = 80;
  } else {
    apr = 80 + ((getWeeksValue.x - 2) * (190 - 80)) / 50;
  }
  return (
    <div className="wallet-box">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row className="align-items-center">
              <Col lg={8} className="order-2 order-lg-1 mt-5 mt-lg-0">
                <div className="wallet-content">
                  <div className="wallet-tab">
                    <ul className="d-flex">
                      <li>
                        <button
                          onClick={flexible}
                          className={
                            isTabActive ? "btn w-100 active" : "btn w-100"
                          }
                        >
                          Flexible
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={locked}
                          className={
                            isTabActive ? "btn w-100" : "btn w-100 active"
                          }
                        >
                          Locked
                        </button>
                      </li>
                    </ul>
                  </div>
                  {isTabActive ? (
                    <div className="locked-content pt-4">
                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li>
                          Lock for: <b id="lock">{getWeeksValue.x} weeks</b>
                        </li>
                        <li>
                          Weight: <b>{data.toFixed(2)}</b>
                        </li>
                      </ul>
                      <div>
                        <Slider
                          className="my-4"
                          id="sliders"
                          axis="x"
                          x={getWeeksValue.x}
                          onChange={({ x }) =>
                            setWeeksValue((getWeeksValue) => ({
                              ...getWeeksValue,
                              x,
                            }))
                          }
                          step="1"
                          xmax={52}
                          styles={{
                            track: {
                              backgroundColor: "#696969",
                            },
                            active: {
                              backgroundColor: "#28272D",
                            },
                            thumb: {
                              width: 20,
                              height: 20,
                            },
                            disabled: {
                              opacity: 0.5,
                            },
                          }}
                        />
                      </div>

                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li>Amount</li>
                        <li>
                          <span onClick = {window.bal}>Balance:</span> <span id="flexiblebal" >0.0</span>
                        </li>
                      </ul>
                      <Form className="my-4">
                        <Form.Control
                          onChange={stackeAmount}
                          id="flex_amount"
                          type="number"
                          min="0"
                          value={getStakeValue}
                          placeholder="Enter amount to stake"
                          required
                        />
                      </Form>
                      <p>
                        Est. APR: <span>{apr}%</span>
                      </p>
                      <div className="flexible-bottom-content text-center mt-4">
                        <p>
                          Be aware that there are always risks associated with
                          staking contracts.You assume all responsibility.
                        </p>
                      </div>
                      <button className="btn w-100 mt-5" id="approve" onClick={window.approve}>Approve</button>
                      <button className="btn w-100 mt-5" onClick={window.claim} id="rewrds" style={{ display: "none" }}>Claim Rewards</button>
                    </div>
                  ) : (
                    <div className="flexible-content pt-4">
                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li style={{ display: "none" }}>
                          Lock for: <b id="lock" > 0 weeks </b>
                        </li>
                        <li>Amount</li>
                        <li>
                         <span onClick = {window.bal}>Balance:</span> <span id="flexiblebal" >0.0</span>
                        </li>
                      </ul>
                      <Form className="my-4">
                        <Form.Control
                          onChange={flexAmount}
                          min="0"
                          id="flex_amount"
                          type="number"
                          value={getFlexAmount}
                          placeholder="Enter amount to stake"
                          required
                        />
                      </Form>
                      <p>
                        Est. APR: <span>{apr} %</span>
                      </p>
                      <div className="flexible-bottom-content text-center mt-4">
                        <p>
                          Be aware that there are always risks associated with
                          staking contracts.You assume all responsibility.
                        </p>
                      </div>
                      <button className="btn w-100 mt-5" onClick={window.approve} id="approve">Approve</button>
                      <button className="btn w-100 mt-5" onClick={window.claim} id="rewrds" style={{ display: "none" }}>Claim Rewards</button>
                    </div>
                  )}
                </div>
                <button className="btn w-100 mt-5" id="unstaketable" onClick={window.unstake} style={{ color: "#000000", backgroundColor: "#696969", display: "none" }}>View Stats</button>
                <Col className="order-2 order-lg-1 mt-5">
                  <div className="wallet-content1">
                    <h4 style={{color: "white" ,fontSize: "23px"}}>Your Stats</h4>
                    <div id="showtable" style={{ overflow: "auto", height: "400px" }}>
                      <table class="table table-sm table-bordered mb-0 mt-4" id="tabs">
                        <thead>
                          <tr >
                            {/* <th style={{ color: "white",textAlign:"center"}}>Id </th> */}
                            <th style={{ color: "white", textAlign: "center" , fontSize: "15px"}}>StakeTime</th>
                            <th style={{ color: "white", textAlign: "center" , fontSize: "15px"}}>StakeAmt</th>
                            <th style={{ color: "white", textAlign: "center" , fontSize: "15px"}}>UnLockTime</th>
                            <th style={{ color: "white", textAlign: "center" , fontSize: "15px"}}>Action</th>
                          </tr>
                        </thead>
                        <tbody id="recived" style={{ color: "white", textAlign: "center" , fontSize: "14px" }}>
                          <tr><td colspan='4' align='center'>No stake yet</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col lg={4} className="order-1 order-lg-2">
                <div className="banner-img">
                  <img src={Logo} alt="" />
                </div>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Wallet;
