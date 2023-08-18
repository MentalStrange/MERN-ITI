export default function Contact() {
    return (
        <div className=" py-5 sm:py-32 bg-gray-100" id="contact">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Contact Me
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                        <h1 className="text-center font-bold text-2xl">
                            Send Me an Email
                        </h1>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                className="space-y-6"
                                action="#"
                                method="POST"
                            >
                                <div>
                                    <label
                                        htmlFor="Name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="add"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="add"
                                            name="add"
                                            type="text"
                                            autoComplete="add"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-[20rem] lg:max-w-md lg:flex-shrink-0 ">
                        <img
                            src="/Img/Me2.jpg"
                            alt=""
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
