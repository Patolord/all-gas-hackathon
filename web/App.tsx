import { useMutation, useQuery } from "convex/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../convex/_generated/api";

export function App() {
  const count = useQuery(api.counter.get);
  const adjust = useMutation(api.counter.adjust);
  const isReady = count !== undefined;

  return (
    <main className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>A super basic shadcn/ui example, backed by Convex.</CardDescription>
        </CardHeader>
        <CardContent>
          {isReady ? (
            <p className="text-4xl font-semibold tabular-nums">{count}</p>
          ) : (
            <Skeleton className="h-10 w-16" />
          )}
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            variant="outline"
            disabled={!isReady}
            onClick={() => {
              void adjust({ amount: -1 });
            }}
          >
            Decrement
          </Button>
          <Button
            disabled={!isReady}
            onClick={() => {
              void adjust({ amount: 1 });
            }}
          >
            Increment
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
