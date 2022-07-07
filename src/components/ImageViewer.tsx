import { useState } from "react";

const ImageViewer: React.FC<{ gallery: string[] }> = (props) => {
  const [imgNum, setImgNum] = useState<any>(0);

  const myMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setImgNum(e.currentTarget.dataset.num);
    let images = document.querySelectorAll(".imgSelect");
    images.forEach((img) => {
      if (img.getAttribute("data-num") === e.currentTarget.dataset.num) {
        img.classList.add("border-warning");
      } else {
        img.classList.remove("border-warning");
      }
    });
  };

  return (
    <div className="col-12 col-md-5 text-center d-block position-relative ">
      <img src={props.gallery[imgNum]} className="img-fluid" alt="lightning1" />
      <div className="d-flex gap-3 justify-content-center">
        <img
          src={props.gallery[0]}
          className="img-fluid imgSelect border rounded border-warning"
          width="50"
          alt="lightning1"
          data-num="0"
          onMouseEnter={myMouseEnter}
        />
        <img
          src={props.gallery[1]}
          className="img-fluid imgSelect border rounded "
          width="50"
          alt="lightning1"
          data-num="1"
          onMouseEnter={myMouseEnter}
        />
        <img
          src={props.gallery[2]}
          className="img-fluid imgSelect border rounded "
          width="50"
          alt="lightning1"
          data-num="2"
          onMouseEnter={myMouseEnter}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
