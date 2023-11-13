const Box = (props) => {
  let flexBasis = "basis-1/2";
  let mxAuto = "";

  if (props.responsive) flexBasis = "basis-full min-[450px]:basis-1/2";
  if (props.center) mxAuto = "mx-auto";

  return (
    <div className={`box-border w-full ${flexBasis} mb-3 ${mxAuto}`}>
      <div className="box-content border-[1.5px] sm:mx-1 mx-0 border-gray-500 rounded">
        <div className={props.className ? props.className : "px-2 py-4"}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Box;
