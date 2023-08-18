import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
    {
        name: "",
        description:
            "I'm wielding a formidable grade of 3.16. But wait, there's more to this tale!As a full-stack sorcerer, I masterfully wield the arcane arts of PHP and Python, conjuring captivating web experiences that leave users spellbound. My command over SQL empowers me to tame and harness the mystical powers of databases, ensuring seamless interactions with my creations.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "",
        description:
            "Yet, my quest for knowledge extends far beyond ordinary realms. Deep within, a passion for machine learning burns brighter than a supernova. With each passing day, I venture into the uncharted territories of AI, seeking to unveil its secrets and harness its potential for the betterment of humanity.",
        icon: LockClosedIcon,
    },
    {
        name: "",
        description:
            "So, whether you're a tech titan, a visionary startup, or a wizardry-inclined organization, let's connect and create wonders that will leave a lasting mark on the tapestry of technology. Join me, and let our shared magic illuminate the path to a spellbinding tomorrow!",
        icon: ServerIcon,
    },
];

export default function Homedes() {
    return (
        <div className="overflow-hidden bg-gray-100 py-24 sm:py-32" id="home">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-2xl font-semibold leading-7 text-indigo-600">
                                Hey there,
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                I'm Mohamed Ramadan
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                <span className="text-indigo-600 font-bold">
                                    {" "}
                                    WECOME TO MY PORTFOLIO{" "}
                                </span>
                                <br />- Currently on the lookout for full-stack
                                roles or engaging internships in the realm of
                                software engineering. Join me as I bridge
                                creativity and technology to craft digital
                                experiences that inspire.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="/Img/Me2.jpg"
                        alt="Product screenshot"
                        className="lg:w-[48rem] lg:max-w-[30rem] lg:max-h-[50rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0  sm:w-[20rem]"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    );
}
