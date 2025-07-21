type HeadingPartProps = {
  title: string;
  subtitle: string;
};

function HeadingPart({ title, subtitle }: HeadingPartProps) {
  return (
    <>
      <h1 className="section-title text-center">{title}</h1>
      <p className="section-subtitle text-center">
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
