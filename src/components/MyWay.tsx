import MyWayItem from "./MyWayItem";

const myWayItems = [
  {
    diretion: "left",
    year: 2019,
    name: "Моё первое знакомство",
    text: `Меня всегда интересовало как устроены программы и за счёт чего они работают. Начинал я свой путь 
с обычной верстки HTML CSS. В течении этого года я усердно старался верстать готовые шаблоны
и практиковался.`,
  },
  {
    diretion: "right",
    year: 2020,
    name: "Мой первый язык програмирования",
    text: `Я Потихоньку начал переходить на языки програмирования, ведь далеко на
обычной верстки не уйдешь. Я не могу сказать точно какой язык
програмирования для меня был первый, но определенно что-то чуть более
серьёзное я написал на JS. Меня инетересовала общая концепция работы
компьютера и ОС, я пытался познакомиться со всеми языками(из них
которые: C#, C++, Java, Python, Rust, Go). В течении этого года меня
не особо интересовал Frontend. Мне просто было интересно создавать
программы для личных целей.`,
  },
  {
    diretion: "left",
    year: 2021,
    name: "Я узнал о современной разработке frontend(React)",
    text: `В течении этого года иногда забрасывал, ведь я не всегда мог тратить
достаточное количество времени.`,
  },
  {
    diretion: "right",
    year: 2024,
    name: "Пора начинать",
    text: `Я активно
угулубился во Frontend и начал изучать все актуальные фреймворки и
библиотеки, чтобы наконец создавать что-серьёзное`,
  },
];

export default function MyWay() {
  return (
    <ul className="overflow-x-hidden homepage-myWay timeline timeline-snap-icon max-md:timeline-compact timeline-vertical container mx-auto py-6">
      {myWayItems.map((item) => {
        return (
          <MyWayItem
            direction={item.diretion}
            year={item.year}
            name={item.name}
            text={item.text}
          />
        );
      })}
    </ul>
  );
}
