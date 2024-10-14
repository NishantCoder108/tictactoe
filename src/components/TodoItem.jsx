import PropTypes from "prop-types";
const TodoItem = ({
    idx,
    index,
    text,
    isCompleted,
    removeItem,
    handleComplete,
}) => {
    return (
        <div>
            <span
                style={{
                    textDecoration: ` ${isCompleted && "line-through"}`,
                    color: ` ${isCompleted ? "green" : "black"}`,
                }}
            >
                {" "}
                {index + 1}. {text}{" "}
            </span>
            <button
                onClick={() => handleComplete(idx)}
                style={{ fontSize: ".8rem" }}
            >
                {!isCompleted ? "✅" : "Completed"}{" "}
            </button>
            <button
                style={{ fontSize: ".8rem" }}
                onClick={() => removeItem(idx)}
            >
                {" "}
                ❌{" "}
            </button>
        </div>
    );
};

export default TodoItem;

TodoItem.propTypes = {
    idx: PropTypes.number,
    index: PropTypes.number,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeItem: PropTypes.object,
    handleComplete: PropTypes.func,
};
