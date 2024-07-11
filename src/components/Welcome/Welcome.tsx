import WelcomeItem from "./WelcomeItem";

export default function Welcome() {
  return (
    <div className="overflow">
      <WelcomeItem text={"Ну а теперь на русском"} />
      <WelcomeItem text={"Let's GO"} />
      <WelcomeItem text={"Нет, теперь точно на русском"} />
      <WelcomeItem text={"Да, мне 16"} />
      <WelcomeItem text={"Но я могу."} />
      <WelcomeItem text={"Спасибо."} />
    </div>
  );
}
