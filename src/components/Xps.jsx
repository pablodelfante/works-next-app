'use client'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'

const Xp = ({ xps }) => {
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

                    {about && <XpItem title="About">{(state) => <p className={state ? '' : 'line-clamp-3'}>{about}</p>}</XpItem>}

                    {responsabilities && (
                        <XpItem title="Responsabilities">
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {responsabilities.map((responsability, index) => (
                                        <li key={index} className={`${state ? '' : index > 2 ? 'hidden' : ''}`}>
                                            {responsability}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}

                    {skills && (
                        <XpItem title="Skills aquired">
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <div key={index} className={state ? '' : index > 2 ? 'hidden' : ''}>
                                            <Pill type="outline">{skill}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {accomplishments && (
                        <XpItem title="Collaboration">
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {accomplishments.map((accomplishment, index) => (
                                        <li key={index} className={state ? '' : index > 2 ? 'hidden' : ''}>
                                            {accomplishment}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}

                    {projects && (
                        <XpItem title="Projects">
                            {(state) => (
                                <div className="flex flex-wrap gap-2">
                                    {projects.map((project, index) => (
                                        <div key={index} className={state ? '' : index > 2 ? 'hidden' : ''}>
                                            <Pill>{project}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {collaboration && (
                        <XpItem title="Collaboration">
                            {(state) => (
                                <ul className="list-disc list-outside pl-4">
                                    {collaboration.map((collaboration, index) => (
                                        <li key={index} className={state ? '' : index > 2 ? 'hidden' : ''}>
                                            {collaboration}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </XpItem>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Xp
