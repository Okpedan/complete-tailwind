import Image from "next/image";
import Nav from "./nav";

export default function Home() {
  return (


    <main className="grid grid-cols-1 md:grid-cols-4 text-black-600 px-6 py-2 mx-4">
      <div className="col-span-1 md:flex md:justify-end">
        <Nav />
      </div>

      <div className="col-span-3">
        <main>
          <div className="p-2 flex justify-center md:justify-end text-red-600 ">
            <a
              href="#"
              className="btn md:border-red-600 md:border-2 hover:bg-red-600 hover:text-white"
            >
              Log in
            </a>
            <a
              href="#"
              className=" btn md:border-red-600 md:border-2 ml-4  hover:bg-red-600 hover:text-white"
            >
              Sign up
            </a>
          </div>

          <header className="font-bold text-3xl py-2">
            <h2>Aircrafts</h2>
            <h3 className="text-xl">For Ninjas</h3>
          </header>

          <div className="cols-span-3">
            <h4 className="text-xl my-4 border-b border-blue-500">
              All Aircrafts
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* cards go here */}
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <span>Boiler Plate</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <span>Boiler Plate</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>

                  <span>Boiler Plate</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <span>Boiler Plate</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <span>Boiler Plate</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="pic1.jpg"
                  alt="plane"
                  className="w-full h-32 object-cover sm:h-48"
                />
                <div className="m-2">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <span>Boiler Plate</span>
                </div>
              </div>
            </div>

            <h4>Most Popular</h4>

            <div>{/* cards go here */}</div>
          </div>

          <div className="flex justify-center">
            <div className="btn bg-red-500 text-black px-4 py-2 hover:bg-red-600 hover:text-white">
              Load more
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
