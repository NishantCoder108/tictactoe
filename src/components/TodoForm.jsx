import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ handleItems = () => {} }) => {
    const [inputVal, setInputVal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("HandleSubmit");

        const itemsDetails = {
            id: Date.now(),
            text: inputVal,
            isCompleted: false,
        };
        handleItems(itemsDetails);
        console.log({ inputVal });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <button style={{ fontSize: ".8rem" }} type="submit">
                    Submit{" "}
                </button>
            </form>
        </div>
    );
};

export default TodoForm;

TodoForm.propTypes = {
    handleItems: PropTypes.func.isRequired,
};
