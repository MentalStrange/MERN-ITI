const FrontEnd = ["HTML", "CSS", "JS", "React", "Tailwind", "Bootstrap"];
const BackEnd = ["NodeJS", "Python", "PHP", "ExpressJs", "Laravel"];
const Database = ["phpMyAdmin", "MYSQL", "MongoDB"];
const UI_tools = ["Git & GitHub", "Canva", " Figma", "Adobe Photoshop"];
export default function Skills() {
    return (
        <>
            <h1 className="text-center text-4xl pt-4 font-bold">My Skills</h1>
            <div className="bg-white py-24 sm:py-32" id="skills">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-4">
                    <ul role="list" className="">
                        <div className="text-center text-2xl font-bold mb-2 bg-gray-200 p-2 border-solid border-2 border-gray-700 p-2">
                            Front-End
                        </div>
                        {FrontEnd.map((skill) => (
                            <li key={skill} className="">
                                <div className="">
                                    <div className="text-indigo-600 text-lg p-1  font-bold">
                                        {skill}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul role="list" className="">
                        <div className="text-center text-2xl font-bold mb-2 bg-gray-200 p-2 border-solid border-2 border-gray-700 p-2">
                            Back-End
                        </div>
                        {BackEnd.map((skill) => (
                            <li key={skill} className="">
                                <div className="">
                                    <div className="text-indigo-600 text-lg p-1 font-bold">
                                        {skill}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul role="list" className="">
                        <div className="text-center text-2xl font-bold mb-2 bg-gray-200 p-2 border-solid border-2 border-gray-700 p-2">
                            Database
                        </div>
                        {Database.map((skill) => (
                            <li key={skill} className="">
                                <div className="flex items-center gap-x-2">
                                    <div className="text-indigo-600 text-lg p-1 text-center font-bold">
                                        {skill}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul role="list" className="">
                        <div className="text-center text-2xl font-bold mb-2 bg-gray-200 p-2 border-solid border-2 border-gray-700 p-2">
                            UI/UX & Tools
                        </div>
                        {UI_tools.map((skill) => (
                            <li key={skill} className="">
                                <div className="flex items-center gap-x-2">
                                    <div className="text-indigo-600 text-lg p-1 text-center font-bold">
                                        {skill}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
