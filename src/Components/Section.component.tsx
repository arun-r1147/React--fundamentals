import { FC, ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id: string;
}
export const Section: FC<SectionProps> = ({ ...sectionProps }) => {
  return (
    <>
      <section id={sectionProps.id}>
        <h2>{sectionProps.title}</h2>
        {sectionProps.children}
       
      </section>
    </>
  );
};
