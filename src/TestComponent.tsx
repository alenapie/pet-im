"use client";

import { Button } from "shared/ui";
import Image from "next/image";
import arrow from "icons/opposite-arrows.svg";

export const TestComponent = () => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <Button variant="outlined" size="lg" onClick={() => {}}>
        <Image src={arrow} alt="3424" />
        <span>klsjdlksj</span>
      </Button>
    </div>
  );
};
