"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    useEffect(() => {
        const images = [
            "/app/home.png",
            "/app/home-light.png",
            "/app/record.png",
            "/app/record-light.png",
            "/app/activity-details.png",
            "/app/activity-details-light.png",
        ];

        images.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    const mounted = useMemo(() => true, []);

    if (!mounted) return null;

    return (
        <div className="px-4 flex justify-center items-center">
            <div className="flex-1 w-full max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16 md:gap-8 md:items-center">
                    <Column className="flex-1 gap-6 justify-center">
                        <Column className="gap-2">
                            <div className="w-fit">
                                <Card className="px-3 h-7 items-center flex flex-row gap-1.5 bg-primary/10 border-primary/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs text-primary font-medium">
                                        Now available on Android
                                    </span>
                                </Card>
                            </div>
                            <h1 className="text-5xl md:text-6xl leading-tight">
                                Track Your{" "}
                                <span className="text-primary">Activity</span>.
                                Feel{" "}
                                <span className="text-primary">Better</span>.
                            </h1>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                                Track every kilometer, hit your personal bests,
                                and stay consistent — one run at a time. Fully
                                offline, no account needed.
                            </p>
                        </Column>
                        <Column className="gap-3">
                            <Row className="gap-2">
                                <Link href="#download">
                                    <Card className="px-4 h-10 items-center bg-primary text-white font-medium text-sm gap-2">
                                        Get on Android
                                    </Card>
                                </Link>
                                <Link href="#how-it-works">
                                    <Card className="px-4 h-10 items-center text-sm">
                                        How it works
                                    </Card>
                                </Link>
                            </Row>
                            <p className="text-xs text-muted-foreground">
                                iOS version coming soon · Free & open source
                            </p>
                        </Column>
                    </Column>
                    <Row className="flex-1 md:justify-center md:items-end ">
                        <Image
                            src={
                                isDark ? "/app/home.png" : "/app/home-light.png"
                            }
                            alt="Home screen"
                            width={800}
                            height={800}
                            className="hidden md:flex w-44"
                        />
                        <Image
                            src={
                                isDark
                                    ? "/app/record.png"
                                    : "/app/record-light.png"
                            }
                            alt="Record screen"
                            width={800}
                            height={800}
                            className="w-full md:w-60"
                        />
                        <Image
                            src={
                                isDark
                                    ? "/app/activity-details.png"
                                    : "/app/activity-details-light.png"
                            }
                            alt="Activity details"
                            width={800}
                            height={800}
                            className="hidden md:flex w-44"
                        />
                    </Row>
                </div>
            </div>
        </div>
    );
}
