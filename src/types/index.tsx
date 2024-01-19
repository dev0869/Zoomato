export interface CategoryProps {
  categoryId: number;
  categoryName: string;
  photoUrl: string;
}

export interface ProductTypeProps {
  availability: boolean;
  categoryName: string;
  description: string;
  itemID: number;
  menuItemName: string;
  photoUrl: string;
  price: number;
  restaurantID: number;
  restaurantName: string;
  type: string;
}

export interface CheckoutProps {
  userId: number | undefined;
  totalAmount: number | undefined;
  restaurantId: number | undefined;
  deliveryAddress?: string;
}
export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

export type LocartionProps = {
  a: number;
  b: number;
};
