"use client";
import * as React from "react";
import { Section } from "./Section";
import MadScientist from './projects/MadScientist';
import MyTube from "./projects/MyTube";
import MyWarband from "./projects/MyWarband";
import Apod from "./projects/Apod";
import { Spacing } from "./Spacing";

export function Projects() {
  
  return (
    <Section className={"border-t-4 border-primary"}>
      <h2 className="font-caption text-3xl text-center text-primary font-bold mt-2">
        Mes projets
      </h2>
      <MyTube/>
      <Spacing size="sm"/>
      <MyWarband/>
      <Spacing size="sm"/>
      <Apod/>
      <Spacing size="sm"/>
      <MadScientist/>
      <Spacing size="sm"/>
    </Section>
  );
}
