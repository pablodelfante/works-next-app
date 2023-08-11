'use client'
// import Client from 'components/client'
import Server from 'components/server'

function page() {
    console.log('client page')
    return (
        <div>
            page on app folder
            {/* <Client /> */}
            <Server />
        </div>
    )
}

export default page
