import { CheckCircle, Footprints, Play, TrendingUp, User } from "lucide-react";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const heading = {
    title: "How it works",
    description: "From zero to tracking in seconds",
    subDescription: "No complicated setup. Just open the app and run.",
};
const items = [
    {
        step: "01",
        title: "Set Up Your Profile",
        description:
            "Complete the guided onboarding in under 2 minutes. Enter your name, goals, and preferences — Runna personalizes the experience from day one.",
        icon: User,
    },
    {
        step: "02",
        title: "Plan or Start Immediately",
        description:
            "Schedule a future run or tap 'Start Activity' right now. Runna locks onto GPS and begins tracking instantly.",
        icon: Play,
    },
    {
        step: "03",
        title: "Run Freely",
        description:
            "Pocket your phone. Runna tracks in the background with live notifications showing your pace and distance without draining your battery.",
        icon: Footprints,
    },
    {
        step: "04",
        title: "Review Your Results",
        description:
            "After stopping, get a full activity summary with your route map, distance, duration, pace, and calories — saved automatically.",
        icon: CheckCircle,
    },
    {
        step: "05",
        title: "Track Your Progress",
        description:
            "Explore your history, compare weekly patterns, and watch your performance improve over time through visual stats and trend reports.",
        icon: TrendingUp,
    },
];

export default function HowItWorks() {
    const { title, description, subDescription } = heading;
    return (
        <div
            id="how-it-works"
            className="px-4 flex flex-col flex-1 justify-center items-center "
        >
            <div className="w-full max-w-7xl flex flex-col gap-8">
                <Column>
                    <h1 className="text-base text-primary ">{title}</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        {description}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {subDescription}
                    </p>
                </Column>
                <div className="flex flex-wrap gap-2">
                    {items.map(({ icon: Icon, step, title, description }) => (
                        <Card key={title} className="flex-1 min-w-56">
                            <Column className="gap-4">
                                <Row className="items-center justify-between">
                                    <Card className="p-2 w-10 h-10 justify-center items-center aspect-square bg-muted">
                                        <Icon
                                            className="text-primary"
                                            size={20}
                                        />
                                    </Card>
                                    <h1 className="text-4xl text-muted-foreground font-medium">
                                        {step}
                                    </h1>
                                </Row>
                                <Row className="items-center">
                                    <h1 className="text-base font-medium">
                                        {title}
                                    </h1>
                                </Row>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                            </Column>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
