"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ChallengeCard } from "../../../types/articleCard.types";

interface RootMeChallengeWebClientArticleCardProps {
  challenge: ChallengeCard;
  onClick: () => void;
}

export function RootMeChallengeWebClientArticleCard({
  challenge,
  onClick,
}: RootMeChallengeWebClientArticleCardProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
    onClick();
  };

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
        <CardHeader className="">
          <h3 className="text-2xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {challenge.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1"></CardContent>

        <CardFooter className="flex flex-col gap-4 pt-0">
          <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge
                key={challenge.difficulty}
                variant="secondary"
                className={`text-xs ${
                  challenge.difficulty === "Très Facile"
                    ? "bg-green-200 text-green-900"
                    : challenge.difficulty === "Facile"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {challenge.difficulty}
              </Badge>
            </div>
          </div>
          <div className="w-full">
            <Button onClick={handleClick} className="w-full" variant="default">
              Commencer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
