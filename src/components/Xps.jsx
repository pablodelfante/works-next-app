'use client'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'
import { InformationCircleIcon, NewspaperIcon, UserPlusIcon, ChartPieIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const Xps = ({ xps }) => {
    const itemsToShow = 3
    const resolveHiddenClassName = (showMoreActive, index, itemsToShow) => {
        return showMoreActive ? '' : index + 1 > itemsToShow ? 'hidden' : ''
    }
    return (
        <div className="grid gap-36">
            {xps.map(({ logo, title, date, about, responsibilities, skills, accomplishments, projects, collaboration }, index) => (
                <div key={index} className="grid gap-6">
                    {/* heading */}
                    <div className="flex items-center gap-3 translate-x-[-4rem]">
                        {/* line  */}
                        <div className="flex items-center">
                            <span className="flex justify-center items-center rounded-full w-3 aspect-square bg-gray-600 dark:bg-white">
                                <span className="block rounded-full w-2 aspect-square bg-white dark:bg-dark"></span>
                            </span>
                            <span className="block border-dashed border-t border-gray-400 dark:border-white w-10"></span>
                        </div>

                        <img className="w-12 aspect-square" width={50} height={50} src={logo} alt="" />

                        <div>
                            <h3 className="leading-6">{title}</h3>
                            <span className="font-thin">{date}</span>
                        </div>
                    </div>
                    {about && (
                        <XpItem icon={<InformationCircleIcon />} title="About">
                            {(state) => <p className={state ? '' : 'line-clamp-2'}>{about}</p>}
                        </XpItem>
                    )}
                    {/* TODO:
inspiration: https://codepen.io/prasannapegu/pen/JdyrZP */}
                    {responsibilities && (
                        <XpItem icon={<NewspaperIcon />} title="Responsibilities" disableShowMore={responsibilities.length <= itemsToShow}>
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {responsibilities.map((responsability, index) => (
                                        <li key={index} className={resolveHiddenClassName(state, index, itemsToShow)}>
                                            {responsability}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}
                    {skills && (
                        <XpItem icon={<UserPlusIcon />} title="Skills aquired" disableShowMore={skills.length <= itemsToShow}>
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <div key={index} className={resolveHiddenClassName(state, index, itemsToShow)}>
                                            <Pill type="outline">{skill}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}
                    {accomplishments && (
                        <XpItem
                            icon={<ChartPieIcon />}
                            title="Accomplishment and contributions"
                            disableShowMore={accomplishments.length <= itemsToShow}
                        >
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {accomplishments.map((accomplishment, index) => (
                                        <li key={index} className={resolveHiddenClassName(state, index, itemsToShow)}>
                                            {accomplishment}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}
                    {projects && (
                        <XpItem icon={<PresentationChartBarIcon />} title="Projects" disableShowMore={projects.length <= itemsToShow}>
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {projects.map((project, index) => (
                                        <div key={index} className={resolveHiddenClassName(state, index, itemsToShow)}>
                                            <Pill>{project}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Xps
