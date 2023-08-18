const callouts = [
    {
        name: "FLFS 2023",
        description:
            "Alexandria University and the Egyptian Society of Animal Production created the portal, enhancing collaboration, schedule management, and networking in animal production.",
        imageSrc: "/Img/project-1.png",
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "https://flfs2023.com/",
    },
    {
        name: "Appointment Website",
        description:
            "The platform streamlines healthcare by enabling patients to conveniently schedule medical appointments online, leading to enhanced service efficiency and patient-centric care.",
        imageSrc: "/Img/project-2.png",
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "https://github.com/MentalStrange/Doctor-Website-ITI-Final-Project",
    },
    {
        name: "Clinic Management System",
        description:
            "The project creates a clinic system for seamless patient-doctor interaction. Patients choose doctors, send inquiries, access medical history; doctors manage records and appointments.",
        imageSrc: "/Img/project-3.png",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
];

export default function Project() {
    return (
        <div className="bg-gray-100" id="project">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
                <div className="text-center font-bold text-4xl pt-5">
                    My Projects
                </div>
                <div className="mx-auto max-w-2xl   lg:max-w-none ">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Projects
                    </h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div
                                key={callout.name}
                                className="group relative font-bold "
                            >
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="my-6 text-bold text-indigo-600 text-lg">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0 " />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    {callout.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
