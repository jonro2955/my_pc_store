
const ImageViewer: React.FC<{ gallery: string[] }> = (props) => {
  return (
    <div className="col-12 col-md-6 text-center d-block position-relative">
      <img src={props.gallery[0]} className="img-fluid" alt="lightning1" />
    </div>
  );
};

export default ImageViewer;
