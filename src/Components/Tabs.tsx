import { ElementType, FC, ReactNode } from "react";
interface TabsProps {
  buttons: ReactNode;
  children: ReactNode;
  ContainerType:string|ElementType
}
export const Tabs: FC<TabsProps> = ({ buttons, children,ContainerType="menu" }) => {

    return (
    <>
      <ContainerType>{buttons}</ContainerType>
      {children}
      {}
    </>
  );
};
