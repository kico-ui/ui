const SiteFooterDemo = () => {
  return (
    <div className="p-4">
      <div className="relative grid grid-cols-2 justify-items-start gap-4 space-y-3 py-10 md:grid-cols-4 lg:gap-8">
        <div className="hidden md:block">
          <div className="flex w-fit items-center justify-center">
            <span className="text-xs font-bold">Kico/Ui</span>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex w-fit items-center justify-center">
            <span className="text-sm font-bold">Kico/Ui</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <a href="#">
            <svg
              height="20"
              width="20"
              viewBox="0 0 438.549 438.549"
              className="dark:fill-white"
            >
              <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
            </svg>
          </a>

          <a href="#">
            <svg
              height="15"
              viewBox="0 0 1200 1227"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black dark:fill-white"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </div>

        <div>
          <h1 className="text-dark text-sm font-bold dark:text-white">
            Resources
          </h1>
          <ul className="mt-2 flex flex-col space-y-2">
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Learn
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Components
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Examples
            </a>
          </ul>
        </div>

        <div>
          <h1 className="text-dark text-sm font-bold dark:text-white">More</h1>
          <ul className="mt-2 flex flex-col space-y-2">
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Releases
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              GitHub
            </a>
          </ul>
        </div>

        <div className="hidden md:block">
          <h1 className="text-dark text-sm font-bold dark:text-white">
            About Kico
          </h1>
          <ul className="mt-2 flex flex-col space-y-2">
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              Open Source Software
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 transition-all hover:text-gray-600 dark:text-gray-300/60 dark:hover:text-white"
            >
              X
            </a>
          </ul>
        </div>

        <div className="col-span-2">
          <h1 className="text-dark text-sm font-bold dark:text-white">
            Contact
          </h1>
          <span className="mt-4 text-xs font-light text-gray-500 dark:text-gray-300/60">
            Stay updated on new releases and features, guides, and case studies.
          </span>
          <div className="mt-2 flex items-center justify-between rounded-full border">
            <input
              className="h-8 border-none bg-transparent pl-3 text-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="example@kicoui.com"
            />
            <button className="bg-dark h-8 w-fit rounded-full bg-black px-4 py-1 text-xs text-white dark:bg-white dark:text-black">
              Connect
            </button>
          </div>
        </div>

        <div className="col-span-1 hidden w-full items-center space-x-10 md:flex">
          <a href="#">
            <svg
              height="20"
              width="20"
              viewBox="0 0 438.549 438.549"
              className="dark:fill-white"
            >
              <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
            </svg>
          </a>

          <a href="#">
            <svg
              height="15"
              viewBox="0 0 1200 1227"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black dark:fill-white"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </div>

        <div className="flex items-center justify-center text-sm font-bold">
          <span>© 2024 Kico Ui, Inc.</span>
        </div>
      </div>
    </div>
  )
}

export default SiteFooterDemo
