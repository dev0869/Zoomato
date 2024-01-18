import AuthModel from "@/components/AuthModel";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
export const CartItems = JSON.parse(localStorage.getItem("carts")!);

export interface ProductType {
  quantity: number;
  customerId: number;
  restaurantID?: number | undefined;
  price?: number | undefined;
  menuItemName?: string | undefined;
  itemID?: number | undefined;
  description?: string | undefined;
  restaurantName?: string | undefined;
  availability?: boolean | undefined;
  photoUrl?: string | undefined;
  categoryName?: string | undefined;
}

interface CartProps {
  data: ProductType[];
}

export function Cart({ data }: CartProps) {
  const result = data.reduce(
    (accumulator: { [x: string]: ProductType }, current: ProductType) => {
      const { itemID, quantity, ...rest } = current;

      if (itemID !== undefined) {
        accumulator[itemID.toString()] = {
          ...accumulator[itemID.toString()],
          ...rest,
          quantity: (accumulator[itemID.toString()]?.quantity || 0) + quantity,
        };
      }

      return accumulator;
    },
    {}
  );

  const datas = Object.values(result);
  localStorage.setItem("carts", JSON.stringify(datas));

  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Cart</Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {CartItems.map(
              (
                ele: {
                  photoUrl: string | undefined;
                  menuItemName:
                    | string
                    | number
                    | boolean
                    | ReactElement<string | JSXElementConstructor<string>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  price:
                    | string
                    | number
                    | boolean
                    | ReactElement<string | JSXElementConstructor<string>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  categoryName:
                    | string
                    | number
                    | boolean
                    | ReactElement<
                        string,
                        string | JSXElementConstructor<string>
                      >
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  quantity:
                    | string
                    | number
                    | boolean
                    | ReactElement<string | JSXElementConstructor<string>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                id: Key | null | undefined
              ) => {
                return (
                  <li key={id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={ele.photoUrl}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{ele.menuItemName}</a>
                          </h3>
                          <p className="ml-4">${ele.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {ele.categoryName}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">{ele.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>

          <SheetFooter>
            <div className="border-t border-gray-200 flex flex-col justify-center mx-auto">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <AuthModel type={"CheckOut"} />
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
