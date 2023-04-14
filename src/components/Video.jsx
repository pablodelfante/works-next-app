export default function Video({ src }) {
    return (
        <div style={{ aspectRatio: '16/9' }}>
            <iframe
                className="w-full h-full"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
