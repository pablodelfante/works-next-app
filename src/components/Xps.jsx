'use client'
import XpItem from 'components/XpItem'

const Xp = ({ xps }) => {
    return (
        <div className="grid gap-8">
            {xps.map(({ title, about, responsabilities }, index) => (
                <div key={index} className="grid gap-2">
                    <h3>{title}</h3>
                    <XpItem title="About">{(state) => <p className={state ? '' : 'line-clamp-3'}>{about}</p>}</XpItem>

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
                </div>
            ))}
        </div>
    )
}

export default Xp
