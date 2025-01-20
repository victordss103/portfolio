import Image from "next/image";
import APOD from "./apod_screen.webp";
import { ComponentPropsWithoutRef } from "react";

export const APOD_screen = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={APOD}
        width={props.size}
        height={props.size}
        alt="Screenshot de l'app APOD(Astronomy Picture of The Day) Nasa"
        className=""
      />
    </>
  );
};
