"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

export default function Hero() {
    const { theme } = useTheme();

    const isDark = theme === "dark";
    return (
        <div className="px-4 flex justify-center items-center">
            <div className="flex-1 w-full max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16 md:gap-8 md:items-center">
                    <Column className="flex-1 gap-6 justify-center">
                        <Column className="gap-2">
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
                    {/*  image have phone layer on it */}
                    <Row className="flex-1 md:justify-center md:items-end ">
                        <Image
                            src={
                                isDark ? "/app/home.png" : "/app/home-light.png"
                            }
                            alt="Home screen"
                            width={200}
                            height={200}
                            className="hidden md:flex w-44"
                        />
                        <Image
                            src={
                                isDark
                                    ? "/app/record.png"
                                    : "/app/record-light.png"
                            }
                            alt="Record screen"
                            width={200}
                            height={200}
                            className="w-full md:w-60"
                        />
                        <Image
                            src={
                                isDark
                                    ? "/app/activity-details.png"
                                    : "/app/activity-details-light.png"
                            }
                            alt="Activity details"
                            width={200}
                            height={200}
                            className="hidden md:flex w-44"
                        />
                    </Row>
                </div>
            </div>
        </div>
    );
}
