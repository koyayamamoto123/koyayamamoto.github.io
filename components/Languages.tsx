import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";

export default function Languages() {
  return (
    <Card className="border border-border rounded-sm shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-serif">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base">English (Fluent)</p>
        <p className="text-base">Japanese (Native)</p>
        <p className="text-base">Italian (Basic)</p>
      </CardContent>
    </Card>
  );
}
