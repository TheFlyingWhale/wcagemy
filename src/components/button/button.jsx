import "./button.css";

const Button = ({ variant = "primary", children, type, onClick }) => {
    return (
        <button onClick={onClick} className={variant} type={type}>
            {children}
        </button>
    );
};

export default Button;
