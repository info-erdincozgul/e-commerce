import { LayoutGrid, ListChecks } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import { useData } from "../hooks/useData";
import { useDispatch } from "react-redux";
import useAxios, { METHODS } from "../hooks/useAxios";
import { useState, useEffect } from "react";
import { setProductList } from "../store/actions/ProductAction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ShopContent() {
  let productData = useData("product");
  let productsInfo = productData?.productList?.products || [];
  const totalProducts = productData?.productList?.total || 0;
  const [sorting, setSorting] = useState("Popularity");
  const [sortingType, setSortingType] = useState("price:asc");
  const [filterValue, setFilterValue] = useState("");
  const [offset, setOffSet] = useState(0);
  const limit = 12;
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const { loading, sendRequest: sendGetRequest } = useAxios({});

  const totalPages = Math.ceil(totalProducts / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const sortingSubmit = (value, label) => {
    setSorting(label);
    setSortingType(value);

    sendGetRequest({
      url: `/products?category=${categoryId}&sort=${value}&filter=${filterValue}&limit=${limit}&offset=${offset}`,
      method: METHODS.GET,
      callbackSuccess: (response) => {
        dispatch(setProductList(response.data));
      },
    });
  };

  const offSetSubmit = (newOffset) => {
    setOffSet(newOffset);

    sendGetRequest({
      url: `/products?category=${categoryId}&sort=${sortingType}&filter=${filterValue}&limit=${limit}&offset=${newOffset}`,
      method: METHODS.GET,
      callbackSuccess: (response) => {
        dispatch(setProductList(response.data));
      },
    });
  };

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * limit;
    offSetSubmit(newOffset);
  };

  const handleFirst = () => {
    handlePageChange(1);
  };

  const handleLast = () => {
    handlePageChange(totalPages);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  useEffect(() => {
    if (filterValue === "") return;

    const timeoutId = setTimeout(() => {
      sendGetRequest({
        url: `/products?category=${categoryId}&sort=${sortingType}&filter=${filterValue}&limit=${limit}&offset=${offset}`,
        method: METHODS.GET,
        callbackSuccess: (response) => {
          dispatch(setProductList(response.data));
        },
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filterValue]);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const sortOptions = [
    { value: "price:asc", label: "Price: Low to High" },
    { value: "price:desc", label: "Price: High to Low" },
    { value: "rating:asc", label: "Rating: Low to High" },
    { value: "rating:desc", label: "Rating: High to Low" },
  ];

  return (
    <>
      <section className="flex flex-col items-center my-12 font-[Montserrat,sans-serif] gap-y-12 sm:w-7/10 sm:mx-auto">
        <div className="flex flex-col items-center gap-y-4 font-bold text-doveGray sm:flex-row sm:w-full sm:justify-between">
          <span>
            Showing {productsInfo.length} of {totalProducts} results
          </span>
          <div className="flex flex-row items-center gap-x-2">
            <span>Views:</span>
            <LayoutGrid className="border rounded-xs py-3 px-3 w-10 h-10 border-mercury text-ebonyClay cursor-pointer" />
            <ListChecks className="border rounded-xs py-3 px-3 w-10 h-10 border-mercury text-ebonyClay cursor-pointer" />
          </div>
          <div className="flex gap-x-2">
            <Menu as="div" className="relative inline-block sm:w-4/7">
              <MenuButton className="inline-flex w-full text-doveGray justify-center font-medium hover:bg-white/20 border-2 border-mercury py-4 px-6 items-center rounded-sm">
                {sorting}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-8 text-ebonyClay"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right border-mercury border-2 rounded-md bg-white outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value}>
                      <button
                        onClick={() =>
                          sortingSubmit(option.value, option.label)
                        }
                        className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden w-full text-left"
                      >
                        {option.label}
                      </button>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            <input
              value={filterValue}
              onChange={handleFilterChange}
              placeholder="Filter"
              type="text"
              className="py-4 px-4 bg-pictonBlue text-white rounded-sm w-[100px] placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12 ">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <span>Products loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="sm:hidden">
              {productsInfo.slice(0, 4).map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>

            <div className="hidden sm:flex sm:flex-wrap sm:w-full sm:items-center">
              {productsInfo.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>

            <div className="hidden sm:flex sm:flex-wrap sm:w-full sm:items-center">
              {productsInfo == "" || productsInfo == null ? <span className="text-2xl">No products found</span> : null}
            </div>
          </div>
        )}

        <div className="font-bold my-12">
          <button
            onClick={handleFirst}
            disabled={currentPage === 1}
            className={`border-1 border-silver rounded-tl-md rounded-bl-md py-8 px-6 ${
              currentPage === 1
                ? "bg-concrete text-silver cursor-not-allowed"
                : "bg-white text-pictonBlue hover:bg-pictonBlue hover:text-white"
            }`}
          >
            First
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`border-1 border-silver py-8 px-6 ${
                pageNum === currentPage
                  ? "bg-pictonBlue text-white"
                  : "bg-white text-pictonBlue hover:bg-pictonBlue hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={handleLast}
            disabled={currentPage === totalPages}
            className={`border-1 border-silver rounded-tr-md rounded-br-md py-8 px-6 ${
              currentPage === totalPages
                ? "bg-concrete text-silver cursor-not-allowed"
                : "bg-white text-pictonBlue hover:bg-pictonBlue hover:text-white"
            }`}
          >
            Last
          </button>
        </div>
      </section>
    </>
  );
}
