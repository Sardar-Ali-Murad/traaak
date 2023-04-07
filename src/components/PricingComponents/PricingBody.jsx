import React from "react";
import "./index.css";
import swit from "../../assets/switch.png";
import { Pricing } from "./data";
import tick from "../../assets/tick.png";

const PricingBody = () => {
  return (
    <div className="pricingMain">
      <div className="pricingContent">
        <h1 className="PriHeadMain">
          Morbi tempor sit amet tellus nec iaculis.
        </h1>
        <p className="preHeadPara">
          Nam ut consequat elit. Ut feugiat ex sit amet viverra lobortis. Donec
          arcu dolor, bibendum non massa in, fermentum mollis libero.
        </p>
        <div className="pricingBiling">
          <p>Bill Monthly</p>
          <img src={swit} />
          <p>Bill Anually</p>
        </div>
      </div>
      <div className="pricingCards">
        {Pricing.map((item) => {
          return (
            <div className="pricingCard">
              <div className="pricingCardFlexFirst">
                <div>
                  <h1 className="pricingCardHead">{item.head}</h1>
                  <p className="pricingCardPara">{item.para}</p>
                </div>
                <div className="pricingAmountFlex">
                  <h1 className="pricingCardAmount">{item.amount}</h1>
                  <p className="pricingCardTime">{item.time}</p>
                </div>
              </div>



              <div className="pricingLine"></div>

              <div>
                {item.content.map((text) => {
                  return (
                    <div className="pricingTickFlex">
                      <div className="PritickBox">
                        <img src={tick} />
                      </div>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>

              <button className={`${item.dark?"activeBtnPricing":"pricingBtn"}`}>{item.btn}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingBody;
