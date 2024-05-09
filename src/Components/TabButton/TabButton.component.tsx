import { FC, MouseEventHandler, ReactNode } from "react";
interface TabButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}
export const TabButton: FC<TabButtonProps> = ({
  children,
  isActive,
  ...tabButtonProps
}) => {
  return (
    <>
      <li>
        <button className={isActive ? "active" : ""} {...tabButtonProps}>
          {children}
        </button>
      </li>
    </>
  );
};
