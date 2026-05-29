import {
    Activity,
    Clock,
    Database,
    Map,
    MapPin,
    Smartphone,
} from "lucide-react";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const heading = {
    title: "Features",
    description: "Everything you need to train smarter",
    subDescription:
        "From your first jog to marathon prep — Runna adapts to your pace, not the other way around.",
};

export const items = [
    {
        icon: MapPin,
        title: "Real-time GPS Tracking",
        description:
            "Kalman-filtered coordinates update every second. Sub-5m accuracy even in dense urban areas.",
        badge: null,
    },
    {
        icon: Activity,
        title: "Live Pace & Metrics",
        description:
            "Real-time pace, speed, distance, and calories — computed from moving segments only. No GPS drift noise.",
        badge: null,
    },
    {
        icon: Map,
        title: "Interactive Route Maps",
        description:
            "MapLibre-powered maps render your exact route during and after every activity.",
        badge: null,
    },
    {
        icon: Smartphone,
        title: "Background Tracking",
        description:
            "App backgrounded mid-run? No problem. Tracking continues seamlessly with battery-optimised GPS.",
        badge: null,
    },
    {
        icon: Clock,
        title: "Smart Scheduling",
        description:
            "Plan upcoming runs with push notification reminders so you never miss a workout.",
        badge: "New",
    },
    {
        icon: Database,
        title: "Offline-first Storage",
        description:
            "SQLite + Drizzle ORM keeps every run saved locally. No internet required to record or review.",
        badge: null,
    },
];

export default function Features() {
    const { title, description, subDescription } = heading;

    return (
        <section
            id="features"
            className="px-4 flex flex-col flex-1 justify-center items-center"
        >
            <div className="w-full max-w-7xl flex flex-col gap-8">
                <Column>
                    <h1 className="text-base text-primary">{title}</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        {description}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {subDescription}
                    </p>
                </Column>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {items.map(({ icon: Icon, title, description, badge }) => (
                        <Card key={title}>
                            <Column className="gap-3">
                                <Row className="items-center justify-between">
                                    <Card className="p-2 w-10 h-10 justify-center items-center aspect-square bg-muted">
                                        <Icon
                                            className="text-primary"
                                            size={20}
                                        />
                                    </Card>
                                </Row>
                                <Row className="items-center justify-between">
                                    <h3 className="text-base font-medium">
                                        {title}
                                    </h3>
                                    {badge && <Badge> {badge}</Badge>}
                                </Row>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                            </Column>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
