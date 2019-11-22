export default ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
    </>
  );
};
