'use client'
import { useState } from 'react'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'
import { InformationCircleIcon, NewspaperIcon, UserPlusIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import Tooltip from 'components/Tooltip'

const Xps = () => {
    const xps = [
        {
            logo: '/img/experiences/vexels-logo.jpg',
            title: 'Frontend developer at Vexels SA',
            date: '2022 - today',
            about: 'Vexels is a graphic design platform that caters to a worldwide audience of creatives and merch sellers with high-quality graphic resources. I consider Vexels one of the best experiences that I have had.',
            responsibilities: [
                'Developed and maintained frontend applications.',
                'Improved SEO, performance, usability, maintainability, and scalability.',
                'Involved in the UX process, validating ideas, user flows, components, user targets, and technical approaches.',
                'Participated in product decisions, such as product vision, evaluating user experiences, product trends, and requirements.',
                'Enhanced agility and flexibility, unblocking tasks within the team.',
                'Shared best practices with the development team: clean code concepts, improved communication skills, motivated, and inspired.',
                'Facilitated smooth collaboration among the areas, the product, design, and development teams.',
            ],
            skills: [
                'Improved design patterns',
                'Enhanced readability',
                'Increased scalability',
                'Design thinking',
                'Canvas manipulation',
                'Critical thinking',
                'Improved presentation skills',
                'Creative solutions',
                'Synthetic & fast solutions',
                'Considered project targets',
            ],
            projects: [
                {
                    name: 'Designer',
                    icon: <InformationCircleIcon className="w-4" />,
                    render: () => (
                        <div className="grid gap-2 max-h-96 overflow-y-scroll py-4">
                            <p>
                                Designer is a web application that allows users to create designs using Vexels resources. It is a powerful tool that
                                enables users to create designs for their projects, such as social media posts, t-shirts, and more.
                            </p>
                            <p>
                                As a frontend developer, I participated and was responsible for improving the application's performance, usability for
                                users...
                            </p>
                            <p>Could you check more on the official website.</p>
                            <a className="underline" href="https://designer.vexels.com" target="_blank" rel="noopener noreferrer nofollow">
                                designer.vexels.com
                            </a>
                            <iframe
                                className="aspect-video w-full"
                                width="450"
                                height="250"
                                src="https://www.youtube.com/embed/OAFx-VI24ko?si=Bh7H5eQZ608XqCc6"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ),
                },
                {
                    name: 'Vexels platform',
                    render: null,
                },
                {
                    name: 'Back offices',
                    render: null,
                },
                {
                    name: 'Vexels Stores',
                    render: null,
                },
            ],
        },
        {
            logo: '/img/experiences/ort.jpg',
            date: '2022 - 2023',
            title: 'Professor at ORT University',
            about: 'With over 13,000 students, ORT is the most significant private university in Uruguay, chosen by those who seek the best option for studying in the country.',
            responsibilities: [
                'As a professor, I carried out the course of web design',
                'Shared knowledge in accordance with the course and provided students with skills for future performance in the field',
                'Presented educational challenges and facilitated learning',
                'Collaborated with other teachers and proposed educational and structural improvements to the course',
                'Created, proposed, and contributed to the development of materials, tests, and challenges in various evaluation stages',
            ],
            skills: [],
            projects: [],
        },
        {
            logo: '/img/experiences/studio.jpg',
            date: '2021 - 2022',
            title: 'Full stack developer at Studio 4D',
            about: 'Studio 4D offers different virtual reality experiences created through apps like Unreal Engine and served through web apps with services on the cloud such as AWS.',
            responsibilities: [
                'Migrated and implemented React in projects, defined frontend architecture.',
                'Maintained and added new features to a Node server project.',
                'Maintained communication between the Node server, Unreal Engine, and frontend application using technologies such as WebSockets and WebRTC.',
                'Managed Scrum flows, breaking down requirements, providing feedback.',
                'Separate the Node monolith and implement the first version of the React client, separating frontend and backend as different projects to facilitate scalability and maintenance.',
            ],
            skills: [
                'Node server',
                'CloudFront',
                'Route 53',
                'Lambda',
                'EC2',
                'DynamoDB',
                'S3',
                'WebRTC & WebSockets',
                'React experience',
                'UX flows',
                'Testing tools such as Cypress & Vitest',
                'Time management',
                'Creativity to solve problems',
            ],
            projects: [
                {
                    name: 'Frontend experiences',
                    render: null,
                },
                {
                    name: 'Interface experiences',
                    render: null,
                },
                {
                    name: 'Cirrus node server',
                    render: null,
                },
                {
                    name: 'Unreal Engine',
                    render: null,
                },
                {
                    name: 'Design project',
                    render: null,
                },
            ],
        },
    ]

    const itemsToShow = 3
    const resolveHiddenClassName = (showMoreActive, currentItemIndex, itemsToShow) => {
        return showMoreActive
            ? {
                  opacity: 1,
                  transition: 'opacity 0.5s ease-in-out',
              }
            : currentItemIndex + 1 > itemsToShow
            ? {
                  opacity: 0,
                  height: 0,
                  pointerEvents: 'none',
              }
            : {}
    }
    return (
        <div className="grid gap-36">
            {xps.map(({ logo, title, date, about, responsibilities, skills, projects }, index) => (
                <div key={index} className="grid gap-6">
                    {/* heading */}
                    <div className="flex items-center gap-3 translate-x-[-.1rem] lg:translate-x-[-4rem]">
                        {/* line  */}
                        <div className="items-center hidden lg:flex">
                            <span className="flex justify-center items-center rounded-full w-3 aspect-square bg-gray-600 dark:bg-white">
                                <span className="block rounded-full w-2 aspect-square bg-white dark:bg-dark"></span>
                            </span>
                            <span className="block border-dashed border-t border-gray-400 dark:border-white w-10"></span>
                        </div>

                        <img className="w-16 aspect-square" width={65} height={65} src={logo} alt={title} />

                        <div>
                            <h3 className="max-w-[12rem] text-lg leading-5">{title}</h3>
                            <span className="font-thin text-sm">{date}</span>
                        </div>
                    </div>
                    {about && (
                        <XpItem icon={<InformationCircleIcon />} title="About" disableShowMore>
                            {() => <p>{about}</p>}
                        </XpItem>
                    )}

                    {responsibilities && (
                        <XpItem icon={<NewspaperIcon />} title="Responsibilities" disableShowMore={responsibilities.length <= itemsToShow}>
                            {(showMore) => (
                                <ul className="list-outside pl-4 list-['✨'] select-none">
                                    {responsibilities.map((responsability, index) => (
                                        <li key={index} style={resolveHiddenClassName(showMore, index, itemsToShow)}>
                                            {responsability}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}
                    {skills && (
                        <XpItem icon={<UserPlusIcon />} title="Skills aquired" disableShowMore={skills.length <= itemsToShow}>
                            {(showMore) => (
                                <div className="flex flex-wrap gap-2 select-none">
                                    {skills.map((skill, index) => (
                                        <div key={index} style={resolveHiddenClassName(showMore, index, itemsToShow)}>
                                            <Pill type="outline">{skill}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}
                    {projects && (
                        <XpItem icon={<PresentationChartBarIcon />} title="Projects" disableShowMore={projects.length <= itemsToShow}>
                            {(showMore) => (
                                <ul className="flex flex-wrap gap-2 select-none">
                                    {projects.map((project, index) => {
                                        const [showMoreAboutProject, setShowMoreAboutProject] = useState(false)
                                        const [extendedProject, setExtendedProject] = useState(<></>)
                                        return (
                                            <li key={index}>
                                                <div key={index} style={resolveHiddenClassName(showMore, index, itemsToShow)}>
                                                    <Tooltip
                                                        content={project?.icon && <span className="w-max block p-2.5 px-4">click me! 😸⬇️</span>}
                                                    >
                                                        <Pill
                                                            onClick={() => {
                                                                if (!project?.name) return
                                                                setShowMoreAboutProject(!showMoreAboutProject)
                                                                setExtendedProject(project?.render())
                                                            }}
                                                        >
                                                            {project.name}
                                                            {project?.icon ? project?.icon : ''}
                                                        </Pill>
                                                    </Tooltip>
                                                </div>
                                                {showMoreAboutProject && <div key={index + 0.1}>{extendedProject}</div>}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </XpItem>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Xps
