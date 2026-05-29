import { Clock, MapPin, ShieldCheck, WifiOff } from "lucide-react";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const primaryStats = [
    {
        value: "<1",
        unit: "s",
        label: "GPS update interval",
        description:
            "Coordinates refresh every second using Kalman filtering to eliminate noise.",
        tag: { label: "Real-time", icon: Clock, variant: "green" },
    },
    {
        value: "5",
        unit: "m",
        label: "Tracking accuracy",
        description:
            "Sub-5m positioning maintained even in dense urban canyons with tall buildings.",
        tag: { label: "GPS precise", icon: MapPin, variant: "blue" },
    },
    {
        value: "100",
        unit: "%",
        label: "Offline capable",
        description:
            "Record, review, and analyse every run with zero internet connection required.",
        tag: { label: "Offline-first", icon: WifiOff, variant: "primary" },
    },
    {
        value: "0",
        unit: "%",
        label: "Data loss",
        description:
            "SQLite persists every run locally. No sync failure, no lost kilometres.",
        tag: { label: "Always saved", icon: ShieldCheck, variant: "green" },
    },
];

export default function Stats() {
    return (
        <section className="px-4 flex justify-center items-center">
            <div className="w-full max-w-7xl flex flex-col gap-6">
                <Column className="hidden">
                    <h1 className="text-base text-primary">By the numbers</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        Built for performance. Proven by runners.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Every number here is a product decision — not a
                        marketing claim.
                    </p>
                </Column>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden">
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
                                        <Badge className="hidden">
                                            <Row className="items-center">
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
