import quizLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="Clipboard with a pen on each side" />
      <h1>React Quiz</h1>
    </header>
  );
}
