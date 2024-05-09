import { FC, useState } from "react";
import { EXAMPLES } from "../Shared/data";
import { TabButton } from "..";
import { Section } from "../Section.component";
import { Tabs } from "../Tabs";

export const Examples: FC = () => {
  const [tab, setTab] = useState("");

  function clickHandler(type: string) {
    setTab(type);
  }
  return (
    <>
      <Section id="examples" title="Examples">
        <Tabs
        ContainerType="menu"
          buttons={
            <>
              <TabButton
                isActive={tab == "components"}
                onClick={() => clickHandler("components")}
              >
                Component
              </TabButton>
              <TabButton
                isActive={tab == "jsx"}
                onClick={() => clickHandler("jsx")}
              >
                jsx
              </TabButton>
              <TabButton
                isActive={tab == "props"}
                onClick={() => clickHandler("props")}
              >
                Props
              </TabButton>
              <TabButton
                isActive={tab == "state"}
                onClick={() => clickHandler("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {" "}
          {!tab ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tab as keyof typeof EXAMPLES].title}</h3>
              <p> {EXAMPLES[tab as keyof typeof EXAMPLES].description}</p>
              <pre>
                <code> {EXAMPLES[tab as keyof typeof EXAMPLES].code}</code>
              </pre>
            </div>
          )}
         </Tabs>
      </Section>
    </>
  );
};
