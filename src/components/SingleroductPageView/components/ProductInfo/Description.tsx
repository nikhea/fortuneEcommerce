import parse from "html-react-parser";

const Description = ({ description }: any) => {
  return <div>{parse(description)}</div>;
};

export default Description;
