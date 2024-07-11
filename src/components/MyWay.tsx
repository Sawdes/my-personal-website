import MyWayItem from "./MyWayItem";

const myWayItems = [
  {
    diretion: "left",
    year: 2019,
    name: "Моё первое знакомство",
    text: `Меня всегда интересовало, как устроены программы и за счёт чего они работают. Свой путь я начал
с изучения основ вёрстки на HTML и CSS. В течение года я усердно работал над вёрсткой готовых шаблонов и
много практиковался.`,
  },
  {
    diretion: "right",
    year: 2020,
    name: "Мой первый язык програмирования",
    text: `Я постепенно начал изучать языки программирования, потому что без них далеко не уйдёшь.
Я не могу точно сказать, какой язык программирования был для меня первым, но определённо что-то более
серьёзное я написал на JS. Меня интересовала общая концепция работы компьютера и ОС, и я 
пытался познакомиться со всеми языками (C#, C++, Java, Python, Rust, Go). В течение этого года меня не 
особенно интересовал Frontend. Мне просто было интересно создавать программы для личных целей.`,
  },
  {
    diretion: "left",
    year: 2021,
    name: "Я узнал о современной разработке frontend(React)",
    text: `В течение этого года иногда забрасывал, ведь я не всегда мог тратить достаточное количество времени.`,
  },
  {
    diretion: "right",
    year: 2024,
    name: "Актульно",
    text: `Я активно изучаю Frontend и начал осваивать различные фреймворки и библиотеки,
чтобы в итоге создавать что-то серьёзное.`,
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
