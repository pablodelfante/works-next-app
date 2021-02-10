import {useRouter} from 'next/router';

export default function Work() {
    const router = useRouter();
    const {work} = router.query;
    console.log(work);
    return (
        <div>
            soy work
        </div>
    )
}
