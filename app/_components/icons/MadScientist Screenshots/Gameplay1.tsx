import Image from "next/image";
import Gameplay from "./Gameplay1.webp";
import { ComponentPropsWithoutRef } from "react";

export const Gameplay1_MadScientist = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={Gameplay}
        width={props.size}
        height={props.size}
        alt="Screenshot d'un gameplay de Mad Scientist"
        className=""
      />
    </>
  );
};
