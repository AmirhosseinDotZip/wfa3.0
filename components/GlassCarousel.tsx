import { FC, useState } from "react";
import GlassCard from "./GlassCard";

interface GlassCarouselProps { }

const GlassCarousel: FC<GlassCarouselProps> = ({ }) => {
    const [cards, setCards] = useState([
        { id: 0, title: "angular", imagePath: "/fws/angular.svg" },

        { id: 1, title: "Laravel", imagePath: "/fws/laravel.svg" },
        { id: 2, title: "react", imagePath: "/fws/react.svg" },
        { id: 3, title: "next js", imagePath: "/fws/nextjs.svg" },
        { id: 4, title: "vue js", imagePath: "/fws/vuejs.svg" },
        { id: 5, title: "solid js", imagePath: "/fws/solidjs.svg" },
        { id: 6, title: "django", imagePath: "/fws/django.svg" },
        { id: 7, title: "spring", imagePath: "/fws/bootspring.svg" },
        { id: 8, title: "ruby", imagePath: "/fws/ruby.svg" },
        { id: 9, title: "flask", imagePath: "/fws/flask.svg" },

    ]);

    const [activeCardIndices, setActiveCardIndices] = useState([0, 1, 2, 3, 4]);

    function handlePrevClick() {
        const lastIndex = cards.length - 1;
        const nextIndices = activeCardIndices.map((index) =>
            index === 0 ? lastIndex : index - 1
        );
        setActiveCardIndices(nextIndices);
    }

    function handleNextClick() {
        const lastIndex = cards.length - 1;
        const nextIndices = activeCardIndices.map((index) =>
            index === lastIndex ? 0 : index + 1
        );
        setActiveCardIndices(nextIndices);
    }

    return (
        <div className="flex justify-between items-center gap-7">
            <svg
                className="h-12 select-none"
                fill="transparent"
                viewBox="0 0 24 24"
                stroke="white"
                onClick={handlePrevClick}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
            <div className="flex gap-7">
                {activeCardIndices.map((index) => (
                    <GlassCard
                        className="user-none"
                        key={cards[index].id}
                        title={cards[index].title}
                        imagePath={cards[index].imagePath}
                    />
                ))}
            </div>
            <svg
                className="h-12 select-none"
                fill="transparent"
                viewBox="0 0 24 24"
                stroke="white"
                onClick={handleNextClick}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
};

export default GlassCarousel;

// <div className="flex justify-between items-center">
//     <svg className="h-12" fill="transparent" viewBox="0 0 24 24" stroke="white">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//     </svg>
//     <div className="flex gap-7">
//         <GlassCard title="Laravel" imagePath="/laravel.svg" />
//         <GlassCard title="react" imagePath="/react.svg" />
//         <GlassCard title="next js" imagePath="/nextjs.svg" />
//         <GlassCard title="vue js" imagePath="/vuejs.svg" />
//         <GlassCard title="solid js" imagePath="/solidjs.svg" />
//     </div>
//     <svg className="h-12" fill="transparent" viewBox="0 0 24 24" stroke="white">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//     </svg>
// </div>
