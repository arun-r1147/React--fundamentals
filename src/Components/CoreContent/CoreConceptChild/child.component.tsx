import { FC } from "react";
interface coreContentProps {
  image: string;
  title: string;
  description: string;
}

export const Child: FC<coreContentProps> = ({ description, image, title }) => {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
};
