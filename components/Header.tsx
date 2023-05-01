import { FC } from "react";
import Socials from "@/components/Socials";
import PsychTitle from "@/components/PsychTitle";
import Navbar from "@/components/Navbar";
import GlassCarousel from "./GlassCarousel";


const Header: FC = ({ }) => {
    return (
        <section className="flex h-screen flex-col items-center bg-center bg-cover" style={{ backgroundImage: bgURL }}>
            <Navbar />
            <PsychTitle className="mt-28 mx-auto " />
            <GlassCarousel />
            <Socials />
        </section>
    );
};

export default Header;

const bgURL =
    "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=807')";


{/* <Image className="w-2/4 opacity-95 " src="/carbon2.png" alt="" width={500} height={500} /> */ }


{/* <div className="flex justify-between items-center">
    <svg className="h-12" fill="transparent" viewBox="0 0 24 24" stroke="white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    <div className="flex gap-7">
        <GlassCard title="Laravel" imagePath="/laravel.svg" />
        <GlassCard title="react" imagePath="/react.svg" />
        <GlassCard title="next js" imagePath="/nextjs.svg" />
        <GlassCard title="vue js" imagePath="/vuejs.svg" />
        <GlassCard title="solid js" imagePath="/solidjs.svg" />
    </div>
    <svg className="h-12" fill="transparent" viewBox="0 0 24 24" stroke="white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
</div> */}