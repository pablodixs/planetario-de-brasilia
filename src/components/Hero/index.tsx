export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="h-screen w-full absolute top-0 left-0 z-10 flex flex-col justify-between items-center py-8">
                <h1 className="text-neutral-100 text-[4rem] z-50 font-medium">
                    Uma viagem pelo espaço-tempo
                </h1>
            </div>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                muted
                autoPlay={true}
                loop
                src="https://videos.pexels.com/video-files/856857/856857-uhd_2732_1440_30fps.mp4"
            ></video>
        </section>
    )
}
