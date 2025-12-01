import Clients from "../components/Clients";
import ShopContent from "../components/ShopContent";
import ShopNav from "../components/ShopNav";
import { useDispatch } from "react-redux";
import useAxios, { METHODS } from "../hooks/useAxios";
import { useEffect } from "react";
import { setProductList } from "../store/actions/ProductAction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { loading, sendRequest: sendGetRequest } = useAxios({});

  const { categoryId } = useParams();
  

  useEffect(() => {
    sendGetRequest({
      url: `/products?category=${categoryId}&limit=12&offset=0`,
      method: METHODS.GET,
      callbackSuccess: (response) => {
        dispatch(setProductList(response.data));
      },
    });
  }, [categoryId]);
  return (
    <>
      <ShopNav />
      {loading ? loading : <ShopContent />}
      <Clients />
    </>
  );
}
