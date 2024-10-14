import { useState } from "react";

const TicTacToe = () => {
    const [a00, setA00] = useState("");
    const [a01, setA01] = useState("");
    const [a02, setA02] = useState("");
    const [a10, setA10] = useState("");
    const [a11, setA11] = useState("");
    const [a12, setA12] = useState("");
    const [a20, setA20] = useState("");
    const [a21, setA21] = useState("");
    const [a22, setA22] = useState("");

    const [signChange, setSignChange] = useState(0);

    const restartGame = () => {
        setA00("");
        setA01("");
        setA02("");
        setA10("");
        setA11("");
        setA12("");
        setA20("");
        setA21("");
        setA22("");
    };

    const handleClick = () => {};
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "1rem",
                width: "100vw",
                height: "auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <button className="btn" onClick={() => setA00("X")}>
                        {" "}
                        {a00}{" "}
                    </button>
                    <button className="btn" onClick={() => setA01("X")}>
                        {" "}
                        {a01}{" "}
                    </button>
                    <button className="btn" onClick={() => setA02("X")}>
                        {" "}
                        {a02}{" "}
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <button className="btn" onClick={() => setA10("X")}>
                        {" "}
                        {a10}{" "}
                    </button>
                    <button className="btn" onClick={() => setA11("X")}>
                        {" "}
                        {a11}{" "}
                    </button>
                    <button className="btn" onClick={() => setA12("X")}>
                        {" "}
                        {a12}{" "}
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <button className="btn" onClick={() => setA20("X")}>
                        {" "}
                        {a20}{" "}
                    </button>
                    <button className="btn" onClick={() => setA21("X")}>
                        {" "}
                        {a21}{" "}
                    </button>
                    <button className="btn" onClick={() => setA22("X")}>
                        {" "}
                        {a22}{" "}
                    </button>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    // padding: "0px",
                    gap: ".01rem",
                }}
            >
                <div style={{ display: "flex", gap: "1rem" }}>
                    <span style={{}}>Next Player : 0</span>
                    <span
                        style={{
                            color: "GrayText",
                            background: "white",
                            borderRadius: "3px",
                            padding: "3px",
                            cursor: "pointer",
                        }}
                        onClick={restartGame}
                    >
                        Restart{" "}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: 0,
                        padding: 0,
                        boxSizing: "content-box",
                    }}
                >
                    <p> 1. </p>
                    <p
                        style={{
                            backgroundColor: "#9d6c82",
                            padding: ".5rem 2rem",
                            borderRadius: "3rem",
                        }}
                    >
                        {" "}
                        Start Game
                    </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p> 2. </p>
                    <p
                        style={{
                            backgroundColor: "#9d6c82",
                            padding: ".5rem 2.5rem",
                            borderRadius: "3rem",
                        }}
                    >
                        {" "}
                        Move #2
                    </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p> 3. </p>
                    <p
                        style={{
                            backgroundColor: "#9d6c82",
                            padding: ".5rem 2.5rem",
                            borderRadius: "3rem",
                        }}
                    >
                        {" "}
                        Move #3{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
