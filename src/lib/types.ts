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
