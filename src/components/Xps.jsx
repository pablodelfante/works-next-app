'use client'
import { useState } from 'react'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'
import { InformationCircleIcon, NewspaperIcon, UserPlusIcon, QuestionMarkCircleIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import Tooltip from 'components/Tooltip'

const Xps = ({ xps }) => {
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
                                            <>
                                                <li key={index} style={resolveHiddenClassName(showMore, index, itemsToShow)}>
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
                                                </li>
                                                {showMoreAboutProject && <li className="w-full">{extendedProject}</li>}
                                            </>
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
