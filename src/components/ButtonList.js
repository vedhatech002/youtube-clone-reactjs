import Button from "./Button";

const list = [
  "All",
  "JavaScript",
  "Coding",
  "Ecommerce",
  "Web",
  "Tamil cinema",
  "News",
  "Live",
  "Music",
  "Watched",
  "PlayList",
];

const ButtonList = () => {
  return (
    <div className="flex gap-3">
      {list.map((btnName) => (
        <Button name={btnName} key={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
