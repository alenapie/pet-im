"use client";

import { Tabs } from "./shared/ui/Tabs";
import { IconButton } from "./shared/ui/IconButton";
import { Input } from "./shared/ui/Input";
import { useState } from "react";

export const TestComponent = () => {
  const [state, setState] = useState("0");
  return (
    <div>
      {/* <IconButton icon="oppositeArrows" onClick={() => {}} color="primary" />
      {/* <Button variant="outlined" size="lg" onClick={() => {}}>
        <span>фильтры</span>
      </Button> */}
      <Input placeholder="E-mail" onChange={() => {}} />
      {/* <RadioButton
        count={5}
        colors={["red", "green", "blue", "yellow", "purple"]}
      /> */}
      <Tabs
        tabs={[
          { title: "title 1", value: "1" },
          { title: "title 2", value: "2" },
          { title: "title 3", value: "3" },
        ]}
        onChange={(value) => setState(value)}
        active={state}
      />
    </div>
  );
};
