import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function Product({ data }) {
  const { productId } = useParams();
  let index = undefined;
  for (let i = 0; i < data.length; i++) {
    if (productId == data[i].id) {
      index = i;
      break;
    }
  }
  console.log(data);
  if (index == undefined) {
    //if product not found
    return <NotFound />;
  }
  return (
    <div
      style={{
        textAlign: "center",
        padding: "3rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "inline-block" }}>
        <img
          src={data[index].url}
          style={{
            margin: "2rem",
            width: "30rem",
            height: "30rem",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          paddingTop: "9rem",
          flexBasis: "307px",
          flexGrow: "1",
          maxWidth: "630px",
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "600" }}>
          {data[index].name}
        </p>
        <p style={{ fontSize: "2rem", fontWeight: "600" }}>
          Price : {"   "}
          <p
            style={{
              display: "inline-block",
              fontSize: "2rem",
              color: "red",
            }}
          >
            ${data[index].price}
          </p>
        </p>
        <p style={{ fontSize: "2rem", marginTop: "3rem" }}>
          {data[index].description}
        </p>
      </div>
    </div>
  );
}

export default Product;
