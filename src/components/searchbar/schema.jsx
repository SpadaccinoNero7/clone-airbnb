import { z } from "zod";

const schema = z.object({
  location: z.string().nonempty(),
  country: z.string().nonempty(),
  leaveDate: z.string().refine((val) => new Date(val).getTime() >= new Date(), {
    message: "Non puoi prenotare un check-in nel passato",
  }),
  returnDate: z.string().refine((val) => new Date(val) >= leaveDate, {
    message: "Non puoi prenotare un check-out prima del check-in",
    //convertire in timestamp e vedere se è maggiore di leaveDate
  }),
});

export default schema;
