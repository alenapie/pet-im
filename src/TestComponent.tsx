"use client";

import { Button } from "./shared";
import { IconSize } from "./shared/icons";
import { IconButton } from "./shared/ui/IconButton";
import { Input } from "./shared/ui/Input";
import { RadioButton } from "./shared/ui/RadioButton";
import { Circle } from "./shared/ui/RadioButton/Circle";
import { Rating } from "./shared/ui/Rating";

export const TestComponent = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* <IconButton icon="oppositeArrows" onClick={() => {}} color="primary" /> */}

      <Input placeholder="E-mail" onChange={() => {}} />
      <Rating rating={3.5} max={5} />
      <RadioButton
        values={["#1C7161", "#CBEC00", "#498D81", "#DADADA", "#000000"]}
      />
      <RadioButton
        colored
        values={["#1C7161", "#CBEC00", "#498D81", "#DADADA", "#000000"]}
      />
      <IconButton color="primary" icon="filter" onClick={() => {}} />
      <IconButton color="secondary" icon="filter" onClick={() => {}} />

      <Button variant="outlined" size="md" onClick={() => {}}>
        <span>фильтры</span>
      </Button>
    </div>
  );
};
