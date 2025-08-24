import { Carousel } from "@mantine/carousel";
import { IconUserCircle } from "@tabler/icons-react";
import { Stories } from "../Data/Data";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const SuccessStories = () => {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    return (
        <div className="flex-col pb-15 px-10">
            <div className="text-4xl font-bold items-center place-self-center pb-15">
                Success Stories
            </div>
            <div className="flex items-center justify-center">
                <Carousel
                    slideSize="30%"
                    slideGap="50"
                    emblaOptions={{
                        loop: true,
                        dragFree: true,
                        align: 'center'
                    }}
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                    className="max-w-400 w-full" 
                >
                    {Stories.map((story, index) => (
                        <Carousel.Slide key={index}>
                            <div className="h-full p-4 justify-between  backdrop-blur-md shadow-2xl border-slate-600 shadow-slate-500">
                                <div className="text-slate-950 text-lg font-semibold flex items-center relative pb-2">
                                    <div className="justify-center w-14 h-14 text-slate-50 rounded-full bg-slate-700 p-2"><IconUserCircle width={40} height={40} /></div>
                                    <div className="pl-2">{story.name}
                                        <div className="text-slate-600 font-medium">{story.destinatin}</div>
                                    </div>
                                </div>
                                <div className="pl-2 w-md">
                                    <div>{story.text}</div>
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>


            </div>
        </div>
    );
}
export default SuccessStories;