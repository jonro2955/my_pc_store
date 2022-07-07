import { useState } from "react";

const ImageViewer: React.FC<{ gallery: string[] }> = (props) => {
  const [imgNum, setImgNum] = useState<number>(0);
  return (
    <div className="col-12 col-md-5 text-center d-block position-relative border">

      <img src={props.gallery[imgNum]} className="img-fluid" alt="lightning1" />
    </div>
  );
};

export default ImageViewer;
