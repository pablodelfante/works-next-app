import Link from 'next/link'
import BlobV2 from 'components/BlobV2'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="py-10">
            <ul className="grid grid-flow-row xl:grid-flow-col auto-cols-max | justify-between items-end gap-3">
                {/* REDES */}
                <li className="flex flex-col gap-3">
                    {/* GITHUB */}
                    <h4 className="block">Redes:</h4>
                    <Link href="https://github.com/pablodelfante">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='inline-flex mr-2'>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 44.13 45.88"
                            stroke="currentColor"
                            viewBox="0 0 389.03 123.87"
                            className="w-16 cursor-pointer"
                        >
                            <path d="M83.8,54.92H53.53a1.42,1.42,0,0,0-1.41,1.42v14.8a1.41,1.41,0,0,0,1.41,1.41H65.34V90.94s-2.65.9-10,.9c-8.65,0-20.73-3.16-20.73-29.72S47.21,32.05,59,32.05c10.22,0,14.62,1.8,17.43,2.67a1.42,1.42,0,0,0,1.69-1.39L81.52,19a1.34,1.34,0,0,0-.54-1.1c-1.14-.81-8.08-4.7-25.62-4.7-20.21,0-40.94,8.6-40.94,49.92s23.73,47.49,43.73,47.49c16.56,0,26.6-7.08,26.6-7.08a1.19,1.19,0,0,0,.46-1.07V56.34A1.42,1.42,0,0,0,83.8,54.92Z" />
                            <path d="M239.78,18.18a1.41,1.41,0,0,0-1.4-1.42h-17a1.42,1.42,0,0,0-1.41,1.42V51.12H193.36V18.18a1.41,1.41,0,0,0-1.4-1.42h-17a1.42,1.42,0,0,0-1.41,1.42v89.18a1.42,1.42,0,0,0,1.41,1.43h17a1.41,1.41,0,0,0,1.4-1.43V69.22h26.57l-.05,38.14a1.42,1.42,0,0,0,1.41,1.43h17.08a1.41,1.41,0,0,0,1.41-1.43Z" />
                            <path d="M116,29.89A11,11,0,1,0,105,41,11,11,0,0,0,116,29.89Z" />
                            <path d="M114.74,88.55V47.39A1.42,1.42,0,0,0,113.33,46h-17a1.63,1.63,0,0,0-1.48,1.59v59c0,1.73,1.08,2.24,2.48,2.24h15.31c1.68,0,2.09-.82,2.09-2.27Z" />
                            <path d="M304.55,46.1H287.64a1.42,1.42,0,0,0-1.41,1.42V91.25a19.13,19.13,0,0,1-10.39,3.14c-6.1,0-7.72-2.76-7.72-8.73V47.52a1.42,1.42,0,0,0-1.41-1.42H249.55a1.42,1.42,0,0,0-1.41,1.42v41c0,17.74,9.88,22.08,23.48,22.08,11.16,0,20.15-6.16,20.15-6.16s.43,3.24.62,3.63a1.51,1.51,0,0,0,1.25.77l10.92,0a1.42,1.42,0,0,0,1.41-1.42V47.52A1.42,1.42,0,0,0,304.55,46.1Z" />
                            <path d="M350.77,44.1a31.86,31.86,0,0,0-16.14,4.28V18.18a1.41,1.41,0,0,0-1.4-1.42H316.14a1.42,1.42,0,0,0-1.41,1.42v89.18a1.42,1.42,0,0,0,1.41,1.43H328a1.42,1.42,0,0,0,1.24-.76,27.09,27.09,0,0,0,.72-4.11s7,6.62,20.22,6.62c15.53,0,24.44-7.88,24.44-35.36S360.38,44.1,350.77,44.1ZM344.1,94.34a20.25,20.25,0,0,1-9.84-2.84V63.26A22.46,22.46,0,0,1,343,60.42c6.09-.54,11.95,1.3,11.95,15.83C355,91.56,352.31,94.59,344.1,94.34Z" />
                            <path d="M163.72,46H150.93V29.07c0-.64-.33-1-1.07-1H132.43c-.68,0-1,.3-1,.95V46.51s-8.74,2.11-9.33,2.28a1.42,1.42,0,0,0-1,1.36v11a1.42,1.42,0,0,0,1.41,1.43h8.94V88.92c0,19.6,13.74,21.52,23,21.52a38.81,38.81,0,0,0,10.14-1.67,1.3,1.3,0,0,0,.8-1.27l0-12.07A1.45,1.45,0,0,0,164,94c-.74,0-2.65.3-4.61.3-6.28,0-8.41-2.92-8.41-6.7V62.54h12.79a1.42,1.42,0,0,0,1.41-1.43V47.38A1.41,1.41,0,0,0,163.72,46Z" />
                        </svg>
                    </Link>
                    {/* LINKEDIN */}
                    <Link href="https://www.linkedin.com/in/pablodelfante/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 389.03 123.87" className="w-20 cursor-pointer">
                            <path d="M356.8,17.29l1.09.29A6.34,6.34,0,0,1,362.7,24v57.4c0,5.88,0,11.75,0,17.63a6.25,6.25,0,0,1-5,6.29,5.58,5.58,0,0,1-1.22.1H280.76a6.28,6.28,0,0,1-6.22-6.11c0-.16,0-.32,0-.49V24a6.39,6.39,0,0,1,4.79-6.41l1.26-.31ZM321.54,55.76c0-1.5,0-3,0-4.5,0-.7-.18-.95-.93-.94q-5.43.06-10.88,0c-.77,0-1,.24-1,1q0,20.13,0,40.27c0,.79.26,1,1,1,3.71,0,7.42,0,11.14,0,1.1,0,1.1,0,1.1-1.08,0-6.67,0-13.34,0-20a26.46,26.46,0,0,1,.34-4.17c.59-3.68,2.59-6.47,7.47-6.38,3.53.06,5.64,1.7,6.23,5.18a36.57,36.57,0,0,1,.49,5.63c.05,6.59,0,13.18,0,19.77,0,.82.2,1.09,1.05,1.08q5.57-.06,11.13,0c.78,0,1-.22,1-1,0-8.18.06-16.36-.07-24.54a35.79,35.79,0,0,0-1-7.63c-1.09-4.6-3.78-8-8.48-9.31a30.7,30.7,0,0,0-4.6-.79,14.38,14.38,0,0,0-7.42,1A15.4,15.4,0,0,0,321.54,55.76ZM300.75,71.47c0-6.73,0-13.45,0-20.17,0-.75-.2-1-1-1-3.77,0-7.53,0-11.3,0-.84,0-1.06.23-1.05,1.06q0,20.08,0,40.17c0,.86.3,1.07,1.1,1.06,3.71,0,7.42,0,11.13,0,1.08,0,1.08,0,1.08-1.12Zm1-34.43a7.65,7.65,0,0,0-15.3,0,7.65,7.65,0,1,0,15.3,0Z" />
                            <path d="M249.17,86.81l-.58.65a16.08,16.08,0,0,1-12.86,5.9,19.71,19.71,0,0,1-14.54-5.91,20,20,0,0,1-5.36-10.74,26.63,26.63,0,0,1,1.94-16.29c2.6-5.53,6.65-9.47,12.77-10.83A20,20,0,0,1,243.63,51a11.6,11.6,0,0,1,4,3.13c.15.19.32.36.63.71,0-.51.05-.82.05-1.13,0-7.41,0-14.82,0-22.24,0-.77.23-1,1-1,3.65,0,7.31,0,11,0,.77,0,1,.19,1,1q0,30,0,60c0,.69-.16,1-.91,1-3.36,0-6.71,0-10.07,0-.69,0-.9-.21-.87-.88,0-1.24,0-2.47,0-3.71,0-.29,0-.58,0-.87Zm-10.29-4.69c.63-.07,1.26-.1,1.88-.2a9.62,9.62,0,0,0,6.29-3.39,10.56,10.56,0,0,0,2.32-6.21c.24-3.5-.52-6.71-3.17-9.24a9.87,9.87,0,0,0-6.42-2.6c-3.22-.19-6.19.49-8.53,2.87-2.75,2.81-3.36,6.31-2.78,10C229.34,78.91,233.25,82.09,238.88,82.12Z" />
                            <path d="M140,71.72v1c0,6.26,0,12.52,0,18.78,0,.72-.17,1-.91.94-3.71,0-7.43,0-11.14,0-.66,0-.89-.17-.89-.87q0-30.07,0-60.13c0-.75.23-.93.94-.92,3.68,0,7.37,0,11,0,.78,0,1,.27,1,1q0,17.38,0,34.76v1.33c.45-.46.74-.72,1-1q6.66-7.68,13.32-15.39a1.79,1.79,0,0,1,1.54-.71c4.62,0,9.24,0,13.86,0h1a7.37,7.37,0,0,1-.42.61q-8,9.06-16,18.1a.9.9,0,0,0,0,1.39l15.53,20.89.62.89c-.42,0-.68,0-1,0-4.78,0-9.56,0-14.35,0a1.47,1.47,0,0,1-1.4-.75q-6.37-9.6-12.79-19.18c-.19-.28-.41-.55-.61-.83Z" />
                            <path d="M200.48,78.6l9.08,6.64c-1.24,1.15-2.35,2.33-3.61,3.31a22.18,22.18,0,0,1-13.38,4.85c-6.84.19-13-1.64-18-6.43a20,20,0,0,1-6.13-12.35A22.75,22.75,0,0,1,170.1,62c3-6.44,8.07-10.27,14.82-12a23.7,23.7,0,0,1,13.48.17c6.15,2,9.9,6.37,11.84,12.41a24.85,24.85,0,0,1,1.18,7.11c0,1.53.05,3.07.14,4.6.05.81-.23,1-1,1q-14,0-28,0c-.41,0-.81,0-1.21,0-.2,2,2,5.88,5.5,7.48A11.38,11.38,0,0,0,200.48,78.6Zm-19.3-12h16.68c.53,0,.83-.21.69-.73a15.35,15.35,0,0,0-1.14-3.55c-2.9-5-10.64-5.33-14.35-.65A8,8,0,0,0,181.18,66.6Z" />
                            <path d="M92,56.32a6.24,6.24,0,0,0,.55-.6,13.61,13.61,0,0,1,12.3-6.31,18.65,18.65,0,0,1,8.07,1.65c3.41,1.72,5.25,4.64,6.24,8.19a33.55,33.55,0,0,1,1,8.87V91.27c0,1.09,0,1.09-1.07,1.09H108.49c-1.14,0-1.14,0-1.14-1.11,0-6.67,0-13.34,0-20a27.86,27.86,0,0,0-.6-5.62c-.87-4-3.9-5.24-7.52-4.82-4.53.52-5.91,3.54-6.4,6.71a33.43,33.43,0,0,0-.34,5q-.06,9.42,0,18.86c0,.8-.22,1-1,1-3.68,0-7.37,0-11,0-.68,0-.89-.17-.89-.87q0-20.1,0-40.2c0-.63.15-.86.82-.85,3.6,0,7.21,0,10.81,0,.6,0,.83.15.81.79,0,1.34,0,2.69,0,4C91.94,55.53,92,55.8,92,56.32Z" />
                            <path d="M14.34,61.45V31.55c0-1.07,0-1.07,1.09-1.07,3.77,0,7.53,0,11.3,0,.84,0,1.06.23,1.06,1.07q0,23.58,0,47.18C27.77,80,27.77,80,29,80c7.67,0,15.34,0,23,0,.79,0,1,.21,1,1,0,3.51,0,7,0,10.54,0,.66-.16.9-.86.9q-18.48,0-36.95,0c-.79,0-.88-.3-.88-1Q14.36,76.44,14.34,61.45Z" />
                            <path d="M72.14,71.43c0,6.67,0,13.34,0,20,0,.7-.16.94-.91.94q-5.56-.06-11.13,0c-.75,0-.9-.24-.9-.94q0-20,0-40c0-.74.16-1,.95-1q5.52.06,11,0c.79,0,1,.26,1,1C72.13,58.09,72.14,64.76,72.14,71.43Z" />
                            <path d="M73.14,37a7.49,7.49,0,1,1-15,0,7.49,7.49,0,1,1,15,0Z" />
                            <path d="M372.85,106a5.92,5.92,0,0,1-5.92-6,6,6,0,1,1,5.92,6Zm0-.54a5.41,5.41,0,1,0-5.43-5.43A5.41,5.41,0,0,0,372.9,105.49Z" />
                            <path d="M375.14,103.34c-.26-.15-.6-.24-.77-.46a19,19,0,0,1-1.2-1.86.88.88,0,0,0-1.16-.48c-.23.11-.33.58-.4.9s0,.67,0,1a4.06,4.06,0,0,1-.37.83,2.65,2.65,0,0,1-.35-.87c0-1.2,0-2.41,0-3.61,0-2-.24-1.66,1.7-1.69.36,0,.72,0,1.07,0a1.63,1.63,0,0,1,1.76,1.39,1.68,1.68,0,0,1-1.25,1.94l-.47.14,1.63,2.59ZM372.7,100l0-.11a6.91,6.91,0,0,0,.91,0,1,1,0,0,0,.89-1.38,1.33,1.33,0,0,0-.81-.77,10.43,10.43,0,0,0-2,0s-.05,0-.05.06a10.56,10.56,0,0,0,0,1.87C371.72,99.85,372.35,99.89,372.7,100Z" />
                        </svg>
                    </Link>
                </li>

                <li className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <p className="">pablodelfantexp@gmail.com</p>
                </li>
            </ul>

            <div className="grid">
                <span className="w-max mx-auto flex gap-1">
                    &copy; {year} | Pablo Delfante
                    <BlobV2
                        blobConfig={{
                            color: 'hwb(243deg 30% 1%)',
                        }}
                        canvasStyles={{ width: '20px' }}
                    />
                </span>
            </div>
        </footer>
    )
}
