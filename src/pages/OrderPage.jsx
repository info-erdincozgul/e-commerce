import { useState } from "react";
import Order from "../components/Order";
import PaymentType from "../components/OrderPayment";

export default function OrderPage() {
  const [isValid, setIsValid] = useState(false);
  const [addressId, setAddressId] = useState(false);

  const handleAddress = (clicked, id) => {
    setIsValid(clicked);
    setAddressId(id);
  };

  return (
    <>{isValid ? <PaymentType addressId = {addressId} /> : <Order handleAddress={handleAddress} />}</>
  );
}
