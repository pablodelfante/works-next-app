'use client'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'

const Xps = ({ xps }) => {
    const itemsToShow = 3
    const itemsToShowOnPIlls = 4
    return (
        <div className="grid gap-12">
            {xps.map(({ title, about, responsabilities, skills, accomplishments, projects, collaboration }, index) => (
                <div key={index} className="grid gap-6">
                    <div>
                        <h3>{title}</h3>

                        {/* line  */}
                        <div className="flex items-center ml-[-1.5em]">
                            <span className="block rounded-full w-4 aspect-square bg-white"></span>
                            <span className="block border-dashed border-t border-white w-40"></span>
                        </div>
                    </div>

                    {about && <XpItem title="About">{(state) => <p className={state ? '' : 'line-clamp-2'}>{about}</p>}</XpItem>}

                    {responsabilities && (
                        <XpItem title="Responsabilities" disableShowMore={responsabilities.length <= itemsToShow}>
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {responsabilities.map((responsability, index) => (
                                        <li key={index} className={`${state ? '' : index + 1 > itemsToShow ? 'hidden' : ''}`}>
                                            {responsability}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}

                    {skills && (
                        <XpItem title="Skills aquired" disableShowMore={skills.length <= itemsToShow}>
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <div key={index} className={state ? '' : index + 1 > itemsToShowOnPIlls ? 'hidden' : ''}>
                                            <Pill type="outline">{skill}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {accomplishments && (
                        <XpItem title="Accomplishment and contributions" disableShowMore={accomplishments.length <= itemsToShow}>
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {accomplishments.map((accomplishment, index) => (
                                        <li key={index} className={state ? '' : index + 1 > itemsToShow ? 'hidden' : ''}>
                                            {accomplishment}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}

                    {projects && (
                        <XpItem title="Projects" disableShowMore={projects.length <= itemsToShow}>
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {projects.map((project, index) => (
                                        <div key={index} className={state ? '' : index + 1 > itemsToShowOnPIlls ? 'hidden' : ''}>
                                            <Pill>{project}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {collaboration && (
                        <>
                            <XpItem title="Collaboration" disableShowMore={collaboration.length <= itemsToShow}>
                                {(state) => (
                                    <ul className="list-disc list-outside pl-4">
                                        {collaboration.map((collaboration, index) => (
                                            <li key={index} className={state ? '' : index + 1 > itemsToShow ? 'hidden' : ''}>
                                                {collaboration}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </XpItem>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Xps
