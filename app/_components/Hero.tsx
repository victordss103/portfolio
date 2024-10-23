import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border px-1 py-0.5 hover:bg-accent/70 transition-colors rounded-sm",
        className
      )}
      {...props}
    />
  );
};
export const Hero = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-start">
        <div className="flex-[3] text-center">
          <h2 className="font-caption text-3xl text-primary font-bold">
            Victor DE SOUSA
          </h2>
          <h3 className="font-caption text-2xl text-primary">
            Développeur Web Full Stack
          </h3>
          <p className="text-base">
            Je m'appelle Victor De Sousa, je suis Suisse et j'habite à Genève.
            Passionné d'astronomie et de jeux vidéo, j'ai décidé de me lancer
            dans le monde du développement, monde qui comporte les attributs
            principaux des mes deux passions
            <br />
            <br />
            La créativité et l'imagination procurée par l'immensité de l'espace
            est sans doute une bonne comparaison de la multitude de possiblité
            en terme développement.
            <br />
            <br />
            Quant aux jeux vidéos, ce sont tout simplement des millions de code
            et c'est un plaisir pour moi de me demander et surtout, de
            comprendre, comment une méchanique de jeu a pu être mise en place.
          </p>
        </div>
        <div className="flex-[2]">
          <img
            src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
            className="w-full h-auto max-w-xs py-10 px-5"
            alt="Victor"
          />
        </div>
      </Section>
    </>
  );
};
