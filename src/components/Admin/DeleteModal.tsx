import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckPasswordForm } from '../../types'
import ErrorMessage from '../ErrorMessage'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { deleteInsurance } from '../../api/InsurancesAPI'
import { deleteBranch } from '../../api/BranchesAPI'
import { deleteCar } from '../../api/CarsAPI'
import { deleteUser } from '../../api/UsersAPI'
import { deleteReservation } from '../../api/ReservationsAPI'

type DeleteModalProps = {
    viewName: string;
}

export default function DeleteModal( { viewName }: DeleteModalProps) {

    const initialValues : CheckPasswordForm = {
        password: ''
    }

    const navigate = useNavigate()

    // Obtener id a eliminar
    const queryParams = new URLSearchParams(location.search);
    const deleteId = +queryParams.get('delete')!;
    const show = deleteId ? true : false

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues})

    // const checkUserPasswordMutation = useMutation({
    //     mutationFn: checkPassword,
    //     onError: (error) => toast.error(error.message)
    // })

    // Función para determinar el método de eliminación según la vista actual
    const getDeleteMethod = () => {
        if (location.pathname.includes('/admin/cars')) {
            return deleteCar; 
        }
        if (location.pathname.includes('/admin/insurances')) {
            return deleteInsurance; 
        }
        if (location.pathname.includes('/admin/users')) {
            return deleteUser; 
        }

        // Agregar logica para que reciba un id de mongo

        // if (location.pathname.includes('/admin/reservations')) {
        //     return deleteReservation; 
        // }
        if (location.pathname.includes('/admin/branches')) {
            return deleteBranch; 
        }
       
        
        // Agregar más rutas y métodos según sea necesario
        return null;
    };

    // Mutación para eliminar el registro
    const deleteMutation = useMutation({
        mutationFn: async () => {
            const deleteMethod = getDeleteMethod();
            if (!deleteMethod) throw new Error('No se pudo determinar el método de eliminación para esta vista.');

            // Ejecutar el método de eliminación con el ID
            return deleteMethod(deleteId);
        },
        onSuccess: () => {
            toast.success(`${viewName} eliminado/a correctamente.`);
            navigate(location.pathname, { replace: true }); // Eliminar el parámetro "delete" de la URL
        },
        onError: (error: any) => {
            toast.error(error.message || 'Hubo un error al eliminar el registro.');
        },
    });

    // Manejar el envío del formulario
    const handleForm = async (formData: CheckPasswordForm) => {
        if (!deleteId) {
            toast.error('No se encontró el ID para eliminar.');
            return;
        }
        // Aquí podrías validar la contraseña antes de proceder
        deleteMutation.mutate();
    };

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">

                                <Dialog.Title
                                    as="h3"
                                    className="font-black text-4xl  my-5"
                                >Eliminar {viewName} </Dialog.Title>

                                <p className="text-xl font-bold">Confirma la eliminación del {viewName} {''}
                                    <span className="text-sky-600">colocando tu password</span>
                                </p>

                                <form
                                    className="mt-10 space-y-5"
                                    onSubmit={handleSubmit(handleForm)}
                                    noValidate
                                >

                                    <div className="flex flex-col gap-3">
                                        <label
                                            className="font-normal text-2xl"
                                            htmlFor="password"
                                        >Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password Inicio de Sesión"
                                            className="w-full p-3  border-gray-300 border"
                                            {...register("password", {
                                                required: "El password es obligatorio",
                                            })}
                                        />
                                        {errors.password && (
                                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                                        )}
                                    </div>

                                    <input
                                        type="submit"
                                        className=" bg-sky-600 hover:bg-sky-700 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer"
                                        value={`Eliminar ${viewName}`}
                                    />
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
