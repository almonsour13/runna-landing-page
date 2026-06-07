"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Column } from "../ui/Column";

const screenshots = [
    {
        title: "Home",
        description: "Your weekly progress at a glance",
        dark: "/app/home.png",
        light: "/app/home-light.png",
    },
    {
        title: "Record",
        description: "Live stats while you run",
        dark: "/app/record.png",
        light: "/app/record-light.png",
    },
    {
        title: "Activity",
        description: "Detailed post-run breakdown",
        dark: "/app/activity-details.png",
        light: "/app/activity-details-light.png",
    },
    {
        title: "Share Card",
        description: "Beautiful summary ready to share",
        dark: "/app/share-card.png",
        light: "/app/share-card-light.png",
    },
    {
        title: "Statistics",
        description: "Weekly, monthly and yearly trends",
        dark: "/app/statistics.png",
        light: "/app/statistics-light.png",
    },
    {
        title: "History",
        description: "Every run, all in one place",
        dark: "/app/history.png",
        light: "/app/history-light.png",
    },
];

const heading = {
    title: "App Preview",
    description: "See Runna in action",
    subDescription:
        "A clean, minimal interface designed to stay out of your way — so you can focus on the run.",
};

export default function Screenshots() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        screenshots.forEach(({ dark, light }) => {
            [dark, light].forEach((src) => {
                const img = new window.Image();
                img.src = src;
            });
        });
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";
    const { title, description, subDescription } = heading;

    return (
        <section
            id="screenshots"
            className="px-4 flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="w-full max-w-7xl flex flex-col gap-8">
                {/* Heading */}
                <Column>
                    <h1 className="text-base text-primary">{title}</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        {description}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {subDescription}
                    </p>
                </Column>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {screenshots.map((s) => (
                        <div
                            key={s.title}
                            className="flex-none snap-center flex flex-col gap-2"
                        >
                            <Image
                                src={isDark ? s.dark : s.light}
                                alt={s.title}
                                width={200}
                                height={400}
                                className="w-full object-contain drop-shadow-xl"
                            />
                            <Column className="gap-0.5 px-1">
                                <p className="text-sm font-medium">{s.title}</p>
                                <p className="text-xs text-muted-foreground">
                                    {s.description}
                                </p>
                            </Column>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
