import { LayoutGrid, ListChecks } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";

export default function ShopContent() {
  return (
    <>
      <section className="flex flex-col items-center my-12 font-[Montserrat,sans-serif] gap-y-12 sm:w-7/10 sm:mx-auto">
        <div className="flex flex-col items-center gap-y-4 font-bold text-doveGray sm:flex-row sm:w-full sm:justify-between">
          <span>Showing all 12 results</span>
          <div className="flex flex-row items-center gap-x-2">
            <span>Views:</span>
            <LayoutGrid className="border rounded-xs py-3 px-3 w-10 h-10 border-mercury text-ebonyClay" />
            <ListChecks className="border rounded-xs py-3 px-3 w-10 h-10 border-mercury text-ebonyClay" />
          </div>
          <div className="flex gap-x-2">
            <Menu as="div" className="relative inline-block">
              <MenuButton className="inline-flex w-full text-doveGray justify-center font-medium hover:bg-white/20 border-2 border-mercury py-4 px-6 items-center rounded-sm">
                Popularity
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
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden">
                      Menu 1
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden"
                    >
                      Menu 2
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden"
                    >
                      Menu 3
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <button className="py-4 px-6 bg-pictonBlue text-white rounded-sm">
              Filter
            </button>
          </div>
        </div>
        <div>
          <div className="sm:flex sm:gap-x-12 sm:w-9/10 sm:mx-auto">
            <ProductCard index="1" />
            <ProductCard index="2" />
            <ProductCard index="3" />
            <ProductCard index="4" />
          </div>
          <div className="hidden sm:flex sm:gap-x-12 sm:w-9/10 sm:mx-auto">
            <ProductCard index="1" />
            <ProductCard index="2" />
            <ProductCard index="3" />
            <ProductCard index="4" />
          </div>
          <div className="hidden sm:flex sm:gap-x-12 sm:w-9/10 sm:mx-auto">
            <ProductCard index="1" />
            <ProductCard index="2" />
            <ProductCard index="3" />
            <ProductCard index="4" />
          </div>
        </div>
        <div className="font-bold my-12">
          <button className="border-1 border-silver bg-concrete rounded-tl-md rounded-bl-md text-silver py-8 px-6">
            First
          </button>
          <button className="border-1 border-silver text-pictonBlue py-8 px-6">
            1
          </button>
          <button className="border-1 border-silver bg-pictonBlue text-white py-8 px-6">
            2
          </button>
          <button className="border-1 border-silver text-pictonBlue py-8 px-6">
            3
          </button>
          <button className="border-1 border-silver rounded-tr-md rounded-br-md text-pictonBlue py-8 px-6">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
