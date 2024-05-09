import { FC } from "react";
import { CoreContent, Header } from "./Components";
import { Examples } from "./Components/Examples/Examples.component";

export const App: FC = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Time to get started!</h2>
        </main>
        <CoreContent />
        <Examples />
      </div>
    </>
  );
};
