import Image from "next/image";
import WoW_char from "./WoW_characters_by_name.webp";
import { ComponentPropsWithoutRef } from "react";

export const WoW_char_name = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={WoW_char}
        width={props.size}
        height={props.size}
        alt="Affichage de mes personnages trier par alphabétique de leur pseudonyme."
        className=""
      />
    </>
  );
};
