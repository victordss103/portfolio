"use client"
import * as React from "react";
import { Section } from "./Section";

export function Project(){

  return (
    <Section
      className={"border-t-4 border-primary"}
    >
      <h2 className="font-caption text-3xl text-center text-primary font-bold mt-3">
        Mes projets{" "}
      </h2>
      <div className="text-center w-full grid grid-cols-3 gap-5 mt-3">
        <div className="col-span-2"></div>
        <div className="col-span-1"></div>
      </div>
    </Section>
  );
};
