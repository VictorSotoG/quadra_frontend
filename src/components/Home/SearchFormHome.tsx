import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  pickupLocation: string;
  dropOffDifferent: boolean;
  dropOffLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropOffDate: string;
  dropOffTime: string;
  residence: string;
};

export default function SearchFormHome() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      pickupLocation: "",
      dropOffDifferent: false,
      dropOffLocation: "",
      pickupDate: "",
      pickupTime: "",
      dropOffDate: "",
      dropOffTime: "",
      residence: "México",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Formulario enviado:", data);
    // Aquí puedes manejar la búsqueda o envío de datos
  };

  // Observar si la casilla de "Devolución en otra ubicación" está marcada
  const dropOffDifferentWatch = watch("dropOffDifferent");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md md:max-w-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        {/* Campo: Lugar de recogida */}
        <div className="border border-gray-300 flex gap-2 rounded-md p-3 flex-col grid-cols-2 items-center">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Recogida</label>
            <input
              type="text"
              placeholder="Buscar destinos"
              className="border border-gray-300 rounded-md px-2 py-1 w-52 text-center"
              {...register("pickupLocation", { required: true })}
            />
            {errors.pickupLocation && (
              <span className="text-red-500 text-sm">
                Por favor ingresa un lugar de recogida
              </span>
            )}
          </div>

          {/* Checkbox: Devolución en otra ubicación */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <input
              type="checkbox"
              id="dropOffDifferent"
              {...register("dropOffDifferent")}
              className="cursor-pointer"
            />
            <label htmlFor="dropOffDifferent" className="cursor-pointer">
              Devolución en otra ubicación
            </label>
          </div>
          {/* Campo: Lugar de devolución (aparece solo si dropOffDifferent está marcado) */}
          {dropOffDifferentWatch && (
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Devolución</label>
              <input
                type="text"
                placeholder="Buscar destinos"
                className="border border-gray-300 rounded-md px-2 py-1 w-52 text-center"
                {...register("dropOffLocation", { required: dropOffDifferentWatch })}
              />
              {errors.dropOffLocation && (
                <span className="text-red-500 text-sm">
                  Por favor ingresa un lugar de devolución
                </span>
              )}
            </div>
          )}
        </div>

        {/* Campo: Fecha de recogida */}
        <div className="border border-gray-300 flex justify-between rounded-md p-3 gap-2 items-center">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Fecha de recogida</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1 w-56 xl:w-full text-center"
              {...register("pickupDate", { required: true })}
            />
            {errors.pickupDate && (
              <span className="text-red-500 text-sm">
                Por favor ingresa la fecha de recogida
              </span>
            )}
          </div>

          {/* Campo: Hora de recogida */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Hora</label>
            <input
              type="time"
              className="border border-gray-300 rounded-md px-2 py-1 w-24"
              {...register("pickupTime", { required: true })}
            />
            {errors.pickupTime && (
              <span className="text-red-500 text-sm">
                Por favor ingresa la hora de recogida
              </span>
            )}
          </div>
        </div>

        {/* Campo: Fecha de devolución */}
        <div className="border border-gray-300 flex justify-between rounded-md p-3 gap-2 items-center">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Fecha de devolución</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1 w-56 text-center xl:w-full"
              {...register("dropOffDate", { required: true })}
            />
            {errors.dropOffDate && (
              <span className="text-red-500 text-sm">
                Por favor ingresa la fecha de devolución
              </span>
            )}
          </div>

          {/* Campo: Hora de devolución */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Hora</label>
            <input
              type="time"
              className="border border-gray-300 rounded-md px-2 py-1 w-24"
              {...register("dropOffTime", { required: true })}
            />
            {errors.dropOffTime && (
              <span className="text-red-500 text-sm">
                Por favor ingresa la hora de devolución
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {/* Campo: Residencia */}
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Residencia</label>
          <select
            className="border border-gray-300 rounded-md px-2 py-1"
            {...register("residence")}
          >
            <option value="México">México</option>
            <option value="España">España</option>
            <option value="Argentina">Argentina</option>
            <option value="Colombia">Colombia</option>
            {/* Agrega más opciones si lo deseas */}
          </select>
        </div>
        
        {/* Botón de búsqueda */}
        <div className="mt-4 md:mt-0">
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white px-10 py-2 w-full h-full rounded-md transition-colors duration-500 font-semibold"
          >
            Buscar
          </button>
        </div>

      </div>
    </form>
  );
}
