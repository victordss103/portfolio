import Image from "next/image";
import title_screen from "./Title_screen.webp";
import { ComponentPropsWithoutRef } from "react";

export const Title_screen_MadScientist = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={title_screen}
        width={props.size}
        height={props.size}
        alt="Ecran d'accueil de Mad Scientist"
        className=""
      />
    </>
  );
};
