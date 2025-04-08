import { useQuery } from "@tanstack/react-query"
// import { getAllUsers } from "../../api/UsersAPI"

export default function UsersView() {

//   const { data } = useQuery({
//     queryKey: ['users'],
//     queryFn: getAllUsers
//   })

//   console.log(data)
  return (
    <div className='p-4 font-semibold text-xl'>Usuarios</div>
  )
}
