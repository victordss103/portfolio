
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="sm"/>
      <Projects/>
    </main>
  );
}
