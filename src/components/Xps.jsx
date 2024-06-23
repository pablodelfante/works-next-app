'use client'
import XpItem from 'components/XpItem'
import Pill from 'components/Pill'

const Xp = ({ xps }) => {
    return (
        <div className="grid gap-8">
            {xps.map(({ title, about, responsabilities, skills, projects }, index) => (
                <div key={index} className="grid gap-2">
                    <h3>{title}</h3>
                    <XpItem title="About">{(state) => <p className={state ? '' : 'line-clamp-3'}>{about}</p>}</XpItem>

                    {responsabilities && (
                        <XpItem title="Responsabilities">
                            {(state) => (
                                <div>
                                    {responsabilities.map((responsability, index) => (
                                        <div key={index} className={state ? '' : index > 3 ? 'hidden' : ''}>
                                            {responsability}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {skills && (
                        <XpItem title="Skills aquired">
                            {(state) => (
                                <div className="grid grid-cols-4 gap-2">
                                    {skills.map((skill, index) => (
                                        <div key={index} className={state ? '' : index > 3 ? 'hidden' : ''}>
                                            <Pill type="outline">{skill}</Pill>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </XpItem>
                    )}

                    {projects && (
                        <XpItem title="Skills aquired">
                            {(state) => (
                                <div className="grid grid-cols-4 gap-2">
                                    {projects.map((project, index) => (
                                        <div key={index} className={state ? '' : index > 3 ? 'hidden' : ''}>
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

export default Xp
