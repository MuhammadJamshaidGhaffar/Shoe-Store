import { display, fontSize } from "@mui/system";
import { useParams, Link } from "react-router-dom";

export default function ({ data }) {
  const { productId } = useParams();
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      {data.map(({ url, id, name, Price }) => (
        <div key={id} style={{ display: "inline-block" }}>
          <Link to={id}>
            <img
              src={url}
              style={{
                margin: "2rem",
                width: "30rem",
                height: "30rem",
                objectFit: "contain",
              }}
            />
          </Link>

          <p style={{ fontSize: "2rem", fontWeight: "600" }}>{name}</p>
        </div>
      ))}
    </div>
  );
}
