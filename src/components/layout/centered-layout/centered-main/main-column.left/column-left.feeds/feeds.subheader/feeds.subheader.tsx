import { DividerDot } from "@/components";

interface FeedsSubHeaderProps {
  name: string;
  index: number;
  length: number;
}

const FeedsSubHeader = ({ name, index, length }: FeedsSubHeaderProps) => {
  return (
    <>
      <text
        key={`webtoon_subheader_${index}`}
        style={{
          fontWeight: index % 3 === 0 ? 800 : 500,
        }}
      >
        {name}
      </text>
      {index !== length - 1 &&
        (index % 3 === 2 ? (
          <span
            style={{
              color: "rgb(8,8,8,0.5)",
            }}
          >
            |
          </span>
        ) : (
          <DividerDot />
        ))}
    </>
  );
};

export default FeedsSubHeader;
