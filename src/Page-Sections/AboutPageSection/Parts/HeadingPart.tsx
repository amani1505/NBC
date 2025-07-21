type HeadingPartProps = {
  title: string;
  subtitle: string;
};

function HeadingPart({ title, subtitle }: HeadingPartProps) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal text-nbc-dark-950 ">
        {title}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-center  mx-auto  leading-relaxed sm:leading-relaxed lg:leading-loose text-[#4B5563] ">
        {subtitle.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </>
  );
}

export default HeadingPart;