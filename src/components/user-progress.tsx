import Image from "next/image";
import Link from "next/link";
import { InfinityIcon } from "lucide-react";

import { courses } from "@db/schema";

import { Button } from "./ui/button";

type UserProgressProps = {
  activeCourse: typeof courses.$inferSelect;
  heart: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  heart,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            height={32}
            width={32}
          />
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/icons/points.svg"
            alt="Points"
            className="mr-2"
            height={28}
            width={28}
          />

          {points}
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/icons/heart.svg"
            alt="Hearts"
            className="mr-2"
            height={22}
            width={22}
          />

          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            heart
          )}
        </Button>
      </Link>
    </div>
  );
};
