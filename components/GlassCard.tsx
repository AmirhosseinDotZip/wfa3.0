import React, { FC } from "react";
import Image from 'next/image'

interface GlassCardProps {
    className?: string;
    children?: React.ReactNode;
    imagePath: string;
    title: string;
}

const GlassCard: FC<GlassCardProps> = ({
    className,
    children,
    imagePath,
    title,
    ...props
}) => {
    return (
        <div className={`${className} user-none`}>
            <div className={`flex flex-col items-center justify-center bg-white shadow-lg rounded-3xl p-7 bg-clip-padding bg-opacity-10 border-2 border-gray-200 backdrop-blur-md`}>
                <h2 className="text-xl font-bold text-slate-400x text-slate-900  mb-4">{title}</h2>
                <div className="w-20 ">
                    <Image src={imagePath} width={500} height={500} alt="framework logo" className="user-none" />
                </div>
            </div>
        </div>
    );
};

export default GlassCard;
