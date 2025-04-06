import { Description } from "@headlessui/react";
import { z } from "zod";

/* Insurances */
export const insuranceSchema = z.object({
    id: z.number(),
    tipo: z.string(),
    cobertura: z.string(),
    precio: z.number(),
    descripcion: z.string()
})

export type Insurance = z.infer<typeof insuranceSchema>
export type InsuranceFormData = Pick<Insurance, 'tipo' | 'cobertura' | 'precio' | 'descripcion'>