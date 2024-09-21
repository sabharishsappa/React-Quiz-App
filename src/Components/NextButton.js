function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const lastQuestion = index === numQuestions - 1;

  return lastQuestion ? (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    </div>
  ) : (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
