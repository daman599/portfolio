import Lottie from "lottie-react";
import movingBoatAnimation from "@/moana.json";

export const LoaderAnimation = () => {
    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen">
            <Lottie animationData={movingBoatAnimation} />
        </div>
    );
}