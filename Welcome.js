import { useNavigate } from "react-router-dom";
import ChatApp from "./ChatApp";
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg">
        <div className="content">
          <h2 style={{ color: "white", textAlign: "center", paddingTop: "20%" }}>
            Welcome
          </h2>
          <p style={{ color: "whitesmoke" }}>
            <b>Hello! Welcome to the app</b>
          </p>
          <p style={{ color: "whitesmoke", fontFamily: "cursive", fontSize: "larger" }}>
            Any query? Just click the link below
          </p>
        </div>
        <div>
          <button onClick={() => navigate("/email")}>Click me</button>
        </div>
      </div>

      {/* Chat Application on the Right */}
      <ChatApp />
    </>
  );
}
