
import { z } from "zod";

/* Vehiculos */
export const carSchema = z.object({
    id: z.number(),
    marca: z.string(),
    modelo: z.string(),
    color: z.string(),
    anio: z.number(),
    transmision: z.string(),
    puertas: z.number(),
    asientos: z.number(),
    clima: z.boolean(),
    tipo: z.string(),
    precio_por_dia: z.number(),
    seguro: z.object({
        id: z.number(),
        tipo: z.string(),
        cobertura: z.string(),
        precio: z.number(),
        descripcion: z.string()
    }),
    imagen: z.string(),
    estado: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const adminCarSchema = z.array(
    carSchema.pick({
        id: true,
        marca: true,
        modelo: true,
        color: true,
        anio: true,
        transmision: true,
        puertas: true,
        asientos: true,
        clima: true,
        tipo: true,
        precio_por_dia: true,
        seguro: true,
        imagen: true,
        estado: true,
        createdAt: true,
        updatedAt: true
    })
)

export type Car = z.infer<typeof carSchema>;
export type CarFormData = Pick<Car, 'marca' | 'modelo' | 'color' | 'anio' | 'transmision' | 'tipo' | 'precio_por_dia' | 'seguro' | 'imagen' | 'estado' | 'createdAt' | 'updatedAt'>

/* Insurances */
export const insuranceSchema = z.object({
    id: z.number(),
    tipo: z.string(),
    cobertura: z.string(),
    precio: z.number(),
    descripcion: z.string()
})

export const adminInsurancesSchema = z.array(
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


/* Users Schema */
export const userSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    apellido: z.string(),
    email: z.string(),
    role: z.string(),
    imagen: z.string(),
    confirmado: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
});

export const adminUsersSchema = z.array(
    userSchema.pick({
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        role: true,
        imagen: true,
        confirmado: true,
        createdAt: true,
        updatedAt: true
    })
)

export type User = z.infer<typeof userSchema>;
export type UserFormData = Pick<User, 'nombre' | 'apellido' | 'email' | 'role' | 'imagen' | 'confirmado'>


/* Branches Schema */
export const branchSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const adminBranchSchema = z.array(
    branchSchema.pick({
        id: true,
        nombre: true,
        direccion: true,
        telefono: true,
        createdAt: true,
        updatedAt: true
    })
)

export type Branch = z.infer<typeof branchSchema>
export type BranchFormData = Pick<Branch, 'nombre' | 'direccion' | 'telefono'>


export const reservationSchema = z.object({
    _id: z.string(),
    nombre: z.string(),
    email: z.string(),
    telefono: z.string(),
    vehiculo_id: z.number(),
    fecha_inicio: z.string(),
    fecha_fin: z.string(),
    estado: z.string(),
    alquiler : z.object({
        monto: z.number(),
        metodo_pago: z.string(),
        estado: z.string()
    }),
    vehiculo: z.object({
        id: z.number(),
        marca: z.string(),
        modelo: z.string(),
        color: z.string(),
        anio: z.number(),
        transmision: z.string(),
        tipo: z.string(),
        puertas: z.number(),
        asientos: z.number(),
        clima: z.boolean(),
        precio_por_dia: z.number(),
        seguro: z.object({
            id: z.number(),
            tipo: z.string(),
            cobertura: z.string(),
            precio: z.number(),
            descripcion: z.string()
        }),
        imagen: z.string(),
        estado: z.string(),
        createdAt: z.string(),
        updatedAt: z.string()
    }),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const adminReservationSchema = z.array(
    reservationSchema.pick({
        _id: true,
        nombre: true,
        email: true,
        telefono: true,
        vehiculo_id: true,
        fecha_inicio: true,
        fecha_fin: true,
        estado: true,
        alquiler: true,
        createdAt: true,
        updatedAt: true
    })
)

export type Reservation = z.infer<typeof reservationSchema>
export type ReservationFormDataType = Pick<Reservation, 'nombre' | 'email' | 'telefono' | 'vehiculo_id' | 'fecha_inicio' | 'fecha_fin' >