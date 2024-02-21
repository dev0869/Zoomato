import { z } from "zod";

export const LoginSchemas = z.object({
  userName: z.string().min(3, "UserName Atleast 3 Characters"),
  password: z.string().min(6, "Password Atleast 6 Characters"),
});

export type LoginInferSchema = z.infer<typeof LoginSchemas>;

export const RegisterSchemas = z.object({
  emailId: z.string().email(),
  userName: z.string().min(3, "UserName Atleast 3 Characters"),
  mobileNo: z.string().min(10, "Mobile Number Atleast 10 Characters"),
  password: z.string().min(6, "Password Atleast 6 Characters"),
  userId: z.number().optional(),
  role: z.string().optional(),
  restaurantId: z.number().optional(),
});
export type RegisterSchemaType = z.infer<typeof RegisterSchemas>;

export const RestaurantSchema = z.object({
  restaurantID: z.number().optional(),
  name: z.string().min(3, "Restraurant Name Be Must"),
  cuisineType: z.string().min(3, "Type Name Be Must"),
  address: z.string().min(2, "Enter Adress Please"),
  contactNo: z
    .string()
    .min(10, "Enter Valid Number")
    .max(10, "Enter Valid Number"),
  openingHours: z.string().min(2, "Enter Opening Hours"),
});
export type RestaurantSchemaType = z.infer<typeof RestaurantSchema>;

export type checkoutType = {
  userId: number;
  totalAmount: number;
  restaurantId: number;
  deliveryAddress: string;
};
