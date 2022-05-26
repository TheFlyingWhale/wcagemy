import "./quizAlternative.css";

const QuizAlternative = ({
    title,
    content,
    displayAnswer,
    correct,
    onClick,
    setCorrectAnswer,
    setScore,
    score,
}) => {
    const classes = `quizAlternative ${
        displayAnswer && (correct ? "correct" : "incorrect")
    }`;

    const handleClick = () => {
        correct && setScore(score + 1);
        setCorrectAnswer(correct);
        onClick();
    };

    return (
        <div className={classes} onClick={handleClick}>
            <h3 className="ff-overpass c-blueDarker">{title}</h3>
            <p className="ff-heebo c-blueDarker">{content}</p>
        </div>
    );
};

export default QuizAlternative;
