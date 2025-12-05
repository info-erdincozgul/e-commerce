import { useState } from "react";
import Order from "../components/Order";
import PaymentType from "../components/OrderPayment";

export default function OrderPage() {
  const [isValid, setIsValid] = useState(false);

  const handleAddress = (data) => {
    setIsValid(data);
  };
  return (
    <>
      {isValid ? (
        <PaymentType />
      ) : (
        <Order handleAddress={handleAddress} />
      )}
    </>
  );
}
