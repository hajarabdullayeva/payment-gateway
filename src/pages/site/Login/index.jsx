import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../../schema/formSchema'
import './Login.css'
const textInputClassName =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const formSubmitHandler = (data) => {
    console.log(data)
  }

  return (
    <div className="app__login">
      <div className="app__login__form">
        <h1>LOGIN FORM</h1>

        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          className="w-full register-form"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              {...register('email')}
              type="text"
              name="email"
              id="email"
              className={textInputClassName}
              placeholder="test@test.com"
            />
            {errors.email ? (
              <span className="text-red-900">{errors.email.message}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              {...register('password')}
              type="password"
              name="password"
              id="password"
              className={textInputClassName}
            />
            {errors.password ? (
              <span className="text-red-900">{errors.password.message}</span>
            ) : (
              <></>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
