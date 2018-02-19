import React from 'react';
import Wrapper from "../../../hoc/Wrapper";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
          {igKey}
        </span>: {props.ingredients[igKey]}
      </li>
    ));

  return (
    <Wrapper>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price} KGS</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      {/*<a href="/checkout">Continue</a>*/}
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Wrapper>
  );
};

export default OrderSummary;