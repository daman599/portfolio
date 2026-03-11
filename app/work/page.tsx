import { figmaDesigns, componentVideos } from "@/lib/creative-work-data";
import Image from "next/image";

export default function Work() {
    return (
        <>
            <h2 className="text-base italic text-shadow text-shadow-[0_-1px_0_rgba(255,255,255,0.8),0_3px_6px_rgba(0,0,0,0.4)]">
                Some of my creative work......</h2>
            <div className="my-14 md:my-20">
                <h2 className="text-lg font-semibold">Components</h2>
                <p className="text-base text-neutral-600">Built some ui components while learning motion and tailwindcss.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                    {componentVideos.map((video) => (
                        <video key={video.path} src={video.path} autoPlay muted loop height={300} width={300} className="rounded-xl aspect-video border border-neutral-200" />
                    ))}
                </div>
            </div>

            <div className="my-16 md:my-24">
                <h2 className="text-lg font-semibold">Designs</h2>
                <p className="text-base text-neutral-600">Here are some hero sections which i have designed in figma.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                    {figmaDesigns.map((design) => (
                        <Image src={design.path} alt={"design"} height={300} width={300} className="rounded-xl" key={design.path} />
                    ))}
                </div>
            </div>
        </>
    );
}