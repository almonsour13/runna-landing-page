import { Clock, MapPin, ShieldCheck, WifiOff } from "lucide-react";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const primaryStats = [
    {
        value: "5",
        unit: "s",
        label: "GPS update interval",
        description:
            "Coordinates update every 5 seconds with a minimum 5m displacement threshold, using a Kalman filter with velocity prediction to smooth your route.",
        tag: { label: "Real-time", icon: Clock, variant: "green" },
    },
    {
        value: "15",
        unit: "m",
        label: "Accuracy threshold",
        description:
            "Readings wider than 15m radius are dropped instantly. A multi-layer filter checks speed, jitter, and max displacement before any point is accepted.",
        tag: { label: "GPS precise", icon: MapPin, variant: "blue" },
    },
    {
        value: "100",
        unit: "%",
        label: "Offline capable",
        description:
            "Record, review, and analyse every run with zero internet required. All data lives in a local SQLite database on your device.",
        tag: { label: "Offline-first", icon: WifiOff, variant: "primary" },
    },
    {
        value: "0",
        unit: "%",
        label: "Data loss",
        description:
            "Every run is persisted locally with background tracking active even when the app is minimised, handed off seamlessly between foreground and background.",
        tag: { label: "Always saved", icon: ShieldCheck, variant: "green" },
    },
];
export default function Stats() {
    return (
        <section className="px-4 flex justify-center items-center">
            <div className="w-full max-w-7xl flex flex-col gap-6">
                <Column>
                    <h1 className="text-base text-primary">By the numbers</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        Built for performance. Proven by runners.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Every number here is a product decision — not a
                        marketing claim.
                    </p>
                </Column>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {primaryStats.map(
                        ({ value, unit, label, description, tag }) => {
                            const TagIcon = tag.icon;
                            return (
                                <Card key={label}>
                                    <Column>
                                        <div className="flex items-end gap-0.5">
                                            <span className="text-3xl font-semibold tracking-tight">
                                                {value}
                                            </span>
                                            <span className="text-sm font-medium mb-1">
                                                {unit}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium">
                                            {label}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {description}
                                        </p>
                                        <Badge>
                                            <Row className="items-center gap-1">
                                                <TagIcon size={10} />
                                                {tag.label}
                                            </Row>
                                        </Badge>
                                    </Column>
                                </Card>
                            );
                        },
                    )}
                </div>
            </div>
        </section>
    );
}
