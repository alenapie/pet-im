"use client";

import { IconButton } from "./shared/ui/IconButton";
import { Input } from "./shared/ui/Input";

export const TestComponent = () => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <IconButton icon="oppositeArrows" onClick={() => {}} color="primary" />
      {/* <Button variant="outlined" size="lg" onClick={() => {}}>
        <span>фильтры</span>
      </Button> */}
      <Input
        color="inputSpecial"
        fixedSize="fixedSize"
        placeholder="E-mail"
      ></Input>
    </div>
  );
};
