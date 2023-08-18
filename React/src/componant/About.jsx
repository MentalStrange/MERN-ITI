export default function About() {
    return (
        <section
            className="relative isolate overflow-hidden bg-white sm:py-32 "
            id="about"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="	">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            "Mixing pixels and passion, My projects groove to
                            the rhythm of innovation, creating a funky fusion of
                            code and creativity. 😄 😄 "
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto w-25 rounded-full"
                            src="/Img/Me1.jpg"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">
                                Mohamed Ramadan
                            </div>
                            <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-gray-900"
                            >
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">
                                Software Engineer
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
