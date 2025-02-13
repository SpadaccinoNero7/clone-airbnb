import { z } from "zod";

const schema = z.object({
  leaveDate: z.string().nonempty(),
  returnDate: z.string().nonempty(),
});

export default schema;
