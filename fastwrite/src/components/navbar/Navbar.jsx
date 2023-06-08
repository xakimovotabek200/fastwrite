import Link from "next/link";

function Navbar() {
  return (
    <>
      <div>
        <div>
          <div className="container mx-auto flex justify-around items-center w-[90%]">
            <Link href={"/"}>
              <p className="text-gray-800 font-bold text-3xl pb-2">
                Turbo<span className="text-blue-600">Type</span>
              </p>
            </Link>

            <div className="hidden md:flex gap-6 mt-[15px]">
              <Link
                href={"/"}
                className="text-gray-600 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-gray-600 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
              >
                About
              </Link>
              <Link
                href={"/"}
                className="text-gray-600 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Bog
              </Link>
              <Link
                href={"/"}
                className="text-gray-600 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href={"login/signin"}>
                <button class="mr-[20px] md:block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-8 rounded">
                  Sign in
                </button>
              </Link>
              <div className="md:hidden mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-menu-2"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              </div>
              <Link href={"login/signin"}>
                <button className="hidden md:block uppercase mx-auto shadow bg-indigo-500 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-8 rounded">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
