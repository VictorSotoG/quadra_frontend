
import { z } from "zod";

/* Vehiculos */
export const carsSchema = z.object({
    id: z.number(),
    marca: z.string(),
    modelo: z.string(),
    color: z.string(),
    anio: z.number(),
    transmision: z.string(),
    tipo: z.string(),
    precio_por_dia: z.number(),
    seguroId: z.number(),
    imagen: z.string(),
    estado: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const adminCarSchema = z.array(
    carsSchema.pick({
        id: true,
        marca: true,
        modelo: true,
        color: true,
        anio: true,
        transmision: true,
        tipo: true,
        precio_por_dia: true,
        seguroId: true,
        imagen: true,
        estado: true,
        createdAt: true,
        updatedAt: true
    })
)

export type Car = z.infer<typeof carsSchema>;
export type CarFormData = Pick<Car, 'marca' | 'modelo' | 'color' | 'anio' | 'transmision' | 'tipo' | 'precio_por_dia' | 'seguroId' | 'imagen' | 'estado' | 'createdAt' | 'updatedAt'>

/* Insurances */
export const insuranceSchema = z.object({
    id: z.number(),
    tipo: z.string(),
    cobertura: z.string(),
    precio: z.number(),
    descripcion: z.string()
})

export const adminInsuranceSchema = z.array(
    insuranceSchema.pick({
        id: true,
        tipo: true,
        cobertura: true,
        precio: true,
        descripcion: true
    })
)

export type Insurance = z.infer<typeof insuranceSchema>
export type InsuranceFormData = Pick<Insurance, 'tipo' | 'cobertura' | 'precio' | 'descripcion'>


/* Branches Schema */
export const branchesSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const adminBranchSchema = z.array(
    branchesSchema.pick({
        id: true,
        nombre: true,
        direccion: true,
        telefono: true,
        createdAt: true,
        updatedAt: true
    })
)

export type Branch = z.infer<typeof branchesSchema>
export type BranchFormData = Pick<Branch, 'nombre' | 'direccion' | 'telefono'>