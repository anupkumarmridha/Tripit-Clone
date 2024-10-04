import { useState, useEffect} from "react";
import backgroundImage from "../../assets/illu-homepage-video.svg";
import PlayBtn from "../../assets/assets_btn-play.svg";
const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showVideo ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showVideo]);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("video-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                setIsSectionVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handlePlayClick = () => setShowVideo(true);

    const handleCloseClick = () => {
        setShowVideo(false);
        if (!isSectionVisible) {
            document.getElementById("video-section")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <div
            id="video-section"
            className="relative w-full h-[457px] lg:bg-cover lg:bg-center md:bg-contain bg-contain"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:bg-none md:bg-opacity-0 bg-black bg-opacity-50">
                <h2 className="text-2xl font-normal tracking-wide md:text-black text-white mb-6">
                    Take a closer look
                </h2>
                <p className="md:text-xl text-sm font-light md:text-black text-white mb-8">
                    Experience what it's like to travel with the TripIt app.
                </p>

                {!showVideo && (
                    <img
                        src={PlayBtn}
                        alt="Play Button"
                        className="w-28 h-28 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                        onClick={handlePlayClick}
                    />
                )}

                {showVideo && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                        onClick={handleCloseClick}
                    >
                        <div
                            className="relative w-full max-w-6xl mx-auto p-4 aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/KRT2BBwHRIM"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                                style={{ maxHeight: "80vh" }}
                            ></iframe>
                            <button
                                onClick={handleCloseClick}
                                className="absolute -top-6 right-6 text-gray-500 hover:text-white text-2xl focus:outline-none"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoSection;