import { SpanPrice, Overlay } from "../../pages/catalog/styleCatalog";
import Tops from "../../assets/tops.png";

const ImagesTopsCatalog = () => {
  return (
    <div>
      <Overlay className="overlay">
        <button>add to bag</button>
      </Overlay>
      <img src={Tops} alt="photo" />
      <SpanPrice>33$</SpanPrice>
    </div>
  );
};

export default ImagesTopsCatalog;
