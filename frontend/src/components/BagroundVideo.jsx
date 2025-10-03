const BackgroundVideo = ({ title = "Movie" }) => {
    const useVideo = true;
    const youtubeId = "a6VVrAZUnsc"; 
    const backdropPath = "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI.jpg"; 

    return (
        <div className="relative w-full h-[70vh]">
            <div className="absolute inset-0 w-full h-full">
                {useVideo ? (
                    <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}`}
                        title={`${title} Trailer`}
                        style={{ border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img src={backdropPath} alt={title} className="w-full h-full object-cover" />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>
        </div>
    );
};

export default BackgroundVideo;
