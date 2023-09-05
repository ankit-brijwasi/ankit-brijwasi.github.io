const Box = (props) => {
  return (
    <div className="box-border basis-1/2 w-full max-w-[346px] mb-3 border-[1.5px] border-gray-500 rounded">
      <div className="box-content">
        <div className={props.className ? props.className : "px-2 py-4"}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Box;
