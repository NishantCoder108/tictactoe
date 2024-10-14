import { useState } from "react";

const TictactoeByArr = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXSign, setXSign] = useState(false);

    const handleClick = (idx) => {
        console.log("Idx", idx);
        if (board[idx] !== "" || match(board)) return;

        const sliceArr = board.slice(0);
        console.log({ sliceArr });

        sliceArr[idx] = isXSign ? "0" : "X";

        setBoard(sliceArr);
        setXSign(!isXSign);
    };

    const restartGame = () => {
        return setBoard(Array(9).fill(""));
    };

    const match = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 3, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    };

    const winner = match(board);

    console.log({ winner });
    return (
        <>
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
                {[0, 1, 2].map((rowitem, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            flexDirection: "column",
                        }}
                    >
                        {[0, 1, 2].map((colitem, i) => {
                            const idx = rowitem * 3 + colitem;

                            return (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <button
                                        onClick={() => handleClick(idx)}
                                        className="btn"
                                    >
                                        {" "}
                                        {board[idx]}{" "}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                ))}

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

                {winner
                    ? `Winner: ${winner}`
                    : `Next Player: ${!isXSign ? "X" : "O"}`}
            </div>
        </>
    );
};

export default TictactoeByArr;
