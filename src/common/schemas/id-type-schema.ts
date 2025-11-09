import {z} from "zod";

export const IdTypeSchema = z.string().nonempty().nonoptional()
