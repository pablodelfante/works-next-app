'use client'
import { useEffect, useRef } from 'react'
import DrawBlob from 'blob-animated'
export default function Blob({ canvasStyles, blobConfig, getBlob = () => {} }) {
    const canvasRef = useRef(null)
    let Blob = () => {}
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            Blob = new DrawBlob({
                canvas,
                speed: 200,
                scramble: 0.1,
                color: '#ff66cc',
                ...blobConfig,
            })
            getBlob(Blob)
        }
    }, [])
    return (
        <canvas
            style={{
                width: '200px',
                ...canvasStyles,
            }}
            ref={canvasRef}
        />
    )
}
