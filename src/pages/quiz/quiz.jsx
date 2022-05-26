import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderPage from "../../components/headerPage/headerPage";
import QuizAlternative from "../../components/quizAlternative/quizAlternative";
import IconButton from "../../components/button/iconButton";

import ArrowIcon from "../../assets/svg/arrow";
import RotateIcon from "../../assets/svg/rotate";

import quizStructure from "./quizStructure";

import "./quiz.css";

/**
 * Welcome to a confusing hell!
 * This code is a mess, but it works,
 * and I just found out that making this site was dropped as a requirement for the assignment
 * ... so priorities ¯\_(ツ)_/¯ I would never do this if this wasn't a school project
 */

const Quiz = () => {
    const [stage, setStage] = useState(0);
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const lastStage = quizStructure.length;

    const handleAlternativeClick = () => {
        setDisplayAnswer(true);
    };

    const handleNextClick = () => {
        setDisplayAnswer(false);
        if (stage !== lastStage) {
            setStage(stage + 1);
        }
    };

    const navigate = useNavigate();

    const handleRestartClick = () => {
        setStage(0);
        setScore(0);
    };

    const handleCompleteClick = () => {
        navigate("/course");
    };

    return (
        <div className="quiz">
            <HeaderPage useLink={false}>1.3.1 Quiz</HeaderPage>
            <main
                className={`quizMain p-top-25 p-bot-25 ${
                    stage === lastStage
                        ? "flex-justifyCenter"
                        : "flex-justifyStart"
                }`}
            >
                {stage !== lastStage ? (
                    <>
                        <h2 className="ff-heebo fs-large c-white fw-medium ta-center">
                            {displayAnswer
                                ? correctAnswer
                                    ? "Riktig svar!"
                                    : "Det var feil"
                                : quizStructure[stage].title}
                        </h2>
                        {quizStructure[stage].alternatives.map(
                            (alternative) => {
                                return (
                                    <QuizAlternative
                                        key={alternative.id}
                                        title={alternative.title}
                                        content={alternative.content}
                                        correct={alternative.correct}
                                        displayAnswer={displayAnswer}
                                        onClick={handleAlternativeClick}
                                        setCorrectAnswer={setCorrectAnswer}
                                        setScore={setScore}
                                        score={score}
                                    />
                                );
                            }
                        )}
                        {displayAnswer && (
                            <AnswerBox>{quizStructure[stage].answer}</AnswerBox>
                        )}
                        {displayAnswer && (
                            <IconButton onClick={handleNextClick}>
                                Neste
                            </IconButton>
                        )}
                    </>
                ) : (
                    <>
                        <h2 className="ta-center ff-heebo fw-medium c-white">{`${score}/${lastStage} riktige svar`}</h2>
                        <p className="ff-heebo fw-normal c-white">
                            Du kan enten ta quizen på nytt nå, eller gjøre det
                            senere
                        </p>
                        <div className="buttonContainer">
                            <IconButton
                                variant="secondary"
                                alignment="right"
                                icon={<RotateIcon />}
                                onClick={handleRestartClick}
                            >
                                Restart
                            </IconButton>
                            <IconButton
                                alignment="right"
                                icon={<ArrowIcon />}
                                onClick={handleCompleteClick}
                            >
                                Neste
                            </IconButton>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default Quiz;

const AnswerBox = ({ children }) => {
    return <p className="answerBox c-white ff-heebo">{children}</p>;
};
