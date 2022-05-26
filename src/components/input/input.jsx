import "./input.css";

const TextInput = ({
    label,
    name,
    type,
    value,
    setValue,
    error,
    setError,
    required = false,
}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
        if (error) {
            setError(false);
        }
    };

    return (
        <label>
            {label}
            <input
                className={error ? "error" : ""}
                onChange={handleChange}
                type={type}
                name={name}
                placeholder={label}
                value={value}
                required={required}
            />
        </label>
    );
};

export default TextInput;
