import Image from "next/image";

const techStack = ["React.js", "Zustand", "Next.js", "TailwindCss", "Motion", "Shadcn", "Figma"];

export const About = () => {
    return (
        <div className="w-full flex flex-col gap-3">

            <div className="flex flex-col md:flex-row gap-1 ">
                <div className="w-24 md:w-32 h-24 md:h-28 relative overflow-hidden rounded-full shadow-2xl shadow-accent/30">
                    <Image src={"/moana3.jpg"} fill alt={"moana"}
                        className="object-cover rounded-full" />
                </div>

                <div className="flex flex-col gap-1 md:gap-2 p-2 md:p-3">
                    <h1 className="text-xl md:text-2xl font-semibold">
                        daman<span className="md:hidden">preet kaur</span>
                    </h1>
                    <h2 className="text-base md:pr-20 text-neutral-600">a <span className="border-accent border-b border-dashed
                     font-bold">frontend developer</span> and <span className="border-accent border-b border-dashed
                     font-bold">design engineer </span>
                        who loves building interfaces that feel alive
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-6 my-6">
                <div className="flex items-start gap-2">
                    <div className="rounded-full bg-secondary size-2 animate-pulse shrink-0 mt-2" />
                    <p className="md:text-base md:pr-14 lg:pr-20 text-neutral-600">much like Moana listening to the ocean,i am drawn to exploring the web -
                        experimenting with motion, interaction,
                        and creative ideas that make interfaces feel engaging</p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                    <div className="flex items-start gap-2">
                        <div className="rounded-full bg-accent size-2 animate-pulse shrink-0 mt-2" />
                        <p className="text-bases md:pr-14 lg:pr-20 text-neutral-600 ">
                            technologies and tools i use to make interactive user interfaces
                        </p>
                    </div>

                    <div className="flex items-center flex-wrap gap-2 md:gap-3 pl-4">
                        {techStack.map((item) => (
                            <div key={item} className="text-sm text-neutral-700 bg-accent/8 border 
                            border-accent/30 font-semibold px-2 md:px-3 lg:px-4 py-1 rounded-lg">{item}</div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 bg-neutral-100 rounded-xl px-3 py-2 pl-3 flex flex-col gap-3">
                    <p className="md:text-base text-neutral-700">
                        Good design is actually a lot harder to notice than poor design,
                        because good designs fit our needs so well that the design is invisible.
                    </p>
                    <p className="text-right text-sm text-accent font-semibold italic">Don Norman</p>
                </div>
            </div>

        </div >
    );
}  