import { Building, CalendarDays, ExternalLink, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16 p-4 max-w-sm m-auto">
      <h1 className="font-bold">Solheim Datamus og Kanskje Andre Ting</h1>
      <p className="flex items-center text-xs gap-1">
        <Building className="h-4 w-4 opacity-100" />
        <span className="text-gray-500">org nr:</span> 929 447 603
      </p>
      <p className="flex items-center text-xs gap-1">
        <Mail className="h-4 w-4 opacity-100" />
        <span className="text-gray-500">epost:</span>{" "}
        <a href="mailto:solheim@datamus.no" className="font-semibold">
          solheim@datamus.no
        </a>
      </p>

      <Card className="w-80 mt-16">
        <CardContent className="flex justify-between space-x-4 py-4">
          <Avatar>
            <AvatarImage src="https://duckmouse.no/static/3a4f604e993d030c6838e4d6ef6e9498/e7bd5/dm-qual.webp" />
            <AvatarFallback>🐤</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <a href="https://duckmouse.no" className="hover:underline">
                duckmouse.no
              </a>
            </h4>
            <p className="text-sm">
              salg av verdens beste datamus laget sammen med{" "}
              <a
                href="https://gergus.no"
                className="hover:underline font-semibold"
              >
                gerhard
              </a>
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                oktober 2022
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
