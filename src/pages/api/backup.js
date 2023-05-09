import { getWorks } from 'connectors/findWorks'
export default async function handler(req, res) {
    try {
        const works = await getWorks()
        res.status(200).json(works)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error on try to get works' })
    }
}
