import { FC } from "react";
import { CORE_CONCEPTS } from "../Shared/data";
import { Child } from "./CoreConceptChild/child.component";
import { Section } from "../Section.component";

export const CoreContent: FC = () => {
  return (
    <>
      <Section id="core-concepts" title="Core Concepts">
       
        <ul>
          {CORE_CONCEPTS.map((content, index) => (
            <Child key={index} {...content} />
          ))}
        </ul>
      </Section>
    </>
  );
};
