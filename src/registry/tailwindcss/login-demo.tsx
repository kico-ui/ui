import LoginIcon from "@/components/icons/login-icon"

const LoginDemo = () => {
  return (
    <div className="relative flex-col items-center justify-center p-0 md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full lg:flex items-center justify-center border-r border-gray-500">
        <LoginIcon />
      </div>

      <div className="p-5 relative">
        <div className="mx-auto flex flex-col justify-center space-y-6 lg:w-[300px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-wider text-black dark:text-white">
              Login an account
            </h1>
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Enter your email address and password below to login your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                className="text-sm border border-gray-500 px-3 py-1 bg-transparent rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="text-sm border border-gray-500 bg-transparent px-3 py-1 rounded-lg outline-none"
              />
            </div>
            <button
              className="outline-none bg-black dark:bg-white text-white dark:text-black rounded-full w-full py-2 px-3 text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
              type="submit"
            >
              Login An Account
            </button>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="/sign-up"
              className="text-sm lg:text-xs text-gray-800 dark:text-white transition-all hover:text-gray-900 dark:hover:text-gray-300"
            >
              Don&apos;t have an acount?
            </a>
            <a
              href="/forgot-password"
              className="text-sm lg:text-xs text-gray-800 dark:text-white transition-all hover:text-gray-900 dark:hover:text-gray-300"
            >
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-500" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-black px-2 text-black dark:text-white">
                Or continue with
              </span>
            </div>
          </div>
          <button className="outline-none bg-transparent text-black dark:text-white rounded-md w-full py-2 px-3 text-sm border border-black dark:border-white transition-all">
            <div className="flex items-center justify-center space-x-3">
              <svg role="img" viewBox="0 0 24 24" height="10" width="10">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              <span>Google</span>
            </div>
          </button>
          <p className="px-4 text-center text-sm text-gray-800 dark:text-gray-300">
            By clicking continue, you agree to our
            <a
              href="/terms"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-600"
            >
              Terms of Service
            </a>
            and
            <a
              href="/policy"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-600"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginDemo
