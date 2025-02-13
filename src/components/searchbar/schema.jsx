import { z } from "zod";

const schema = z.object({
  location: z.string().nonempty(),
  country: z.string().nonempty(),
  leaveDate: z
    .string()
    .refine((val) => new Date(val).getTime() >= new Date().getTime(), {
      message: "Non puoi prenotare un check-in nel passato",
    }),
  returnDate: z
    .string()
    .refine((val) => new Date(val).getTime() >= new Date().getTime(), {
      message: "Non puoi prenotare un check-out prima del check-in",
    }),
});

export default schema;
