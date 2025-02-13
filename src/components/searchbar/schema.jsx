import { z } from "zod";

const schema = z.object({
  location: z.string().nonempty(),
  country: z.string().nonempty(),
  leaveDate: z.string(),
  returnDate: z.string(),
});

export default schema;
