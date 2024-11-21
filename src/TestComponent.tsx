"use client";

import { IconButton } from "./shared/ui/IconButton";
import { Input } from "./shared/ui/Input";
import { Rating } from "./shared/ui/Rating";

export const TestComponent = () => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <IconButton icon="oppositeArrows" onClick={() => {}} color="primary" />
      {/* <Button variant="outlined" size="lg" onClick={() => {}}>
        <span>фильтры</span>
      </Button> */}
      {/* <Input onChange={() => {}} placeholder="E-mail" color="secondary" /> */}
      {/* <div style={{ display: "flex" }}>
        <Rating rating={3.7} max={5} height={100} width={100} />
      </div> */}
    </div>
  );
};
