import { NextResponse } from 'next/server'
import { getWorks } from 'connectors/findWorks'
export async function GET(req, res) {
    try {
        const works = await getWorks()
        return NextResponse.json(works)
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Can not get works' }, { status: 404 })
    }
}
