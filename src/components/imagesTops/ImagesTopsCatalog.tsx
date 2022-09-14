import { SpanPrice, Overlay } from "../../pages/catalog/styleCatalog";
import Tops from "../../assets/tops.png";

const ImagesTopsCatalog = (props: any) => {
  return (
    <div>
      <Overlay className="overlay">
        <button>add to bag</button>
      </Overlay>
      <img src={props.img[0].url} alt="photo" />
      <SpanPrice>{props.price}$</SpanPrice>
    </div>
  );
};

export default ImagesTopsCatalog;
