import { getWorksV2 } from "connectors/findWorksV2";


export default function test({works}) {
    return <>
    
    </>;
}


export async function getStaticProps() {
  const works = await getWorksV2();
  return { props: {works}}
}
