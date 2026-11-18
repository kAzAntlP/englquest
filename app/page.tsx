import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-w-1440 mx-auto font-fredoka">
      <div className="mt-30 text-center text-[#262C23]" >
        <p className="text-xl">Твой английский. Новый уровень.</p>
        <p className="text-9xl  mt-4">EngIQuest</p>
        <p className="text-1xl mt-4">Интерактивная платформа для тех, кто хочет учить слова без скуки.</p>
      </div>

      <div className="mt-30">

        <p className="text-center text-2xl">Почему EngIQuest</p>

        <div className="flex gap-6 justify-center">

          <div className="bg-[#E2E8EB]  h-[100px] w-[170px] rounded-xl p-2 mt-8 text-center">
            <div className="flex">
              <Image
                src="/free-icon-news.png"
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <p className="text-2xs pl-2 pt-1">Учи слова системно</p>
            </div>
              <div>
                <p className="opacity-50 text-2xs pt-3">Наш алгоритм повторений (Spaced Repetition) поможет не забывать выученное</p>
              </div>
          </div>

          <div className="bg-[#E2E8EB]  h-[100px] w-[170px] rounded-xl p-2 mt-8 text-center">
            <div className="flex">
              <Image
                src="/free-icon-headset-684840.png"
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <p className="text-2xs pl-2 pt-1">Слушай и запоминай</p>
            </div>
              <div>
                <p className="opacity-50 text-2xs pt-3">Каждое слово озвучено носителем языка британский или американский акцент</p>
              </div>
          </div>

          <div className="bg-[#E2E8EB]  h-[100px] w-[170px] rounded-xl p-2 mt-8 text-center">
            <div className="flex">
              <Image
                src="/free-icon-snapchat-3884580.png"
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <p className="text-2xs pl-2 pt-1">Твой личный словарь</p>
            </div>
              <div>
                <p className="opacity-50 text-2xs pt-3">Добавляй новые слова и формируй свой список для изучения</p>
              </div>
          </div>
        </div>
      </div>

      <div className="mt-30 mb-20">
        <p className="text-center">Уже несколько десятков тысяч пользователей получили результат!</p>
        <p className="text-center opacity-50 text-2xs">Мы ежедневно получаем десятки положительных отзывов и рады, что такое количество наших пользователей уже получили результат</p>

        <div className="flex gap-6 justify-center">
          <div className="h-[260px] w-[160px] bg-[#E2E8EB] p-2 rounded-xl mt-10">
            <div className="flex">
              <div className="">
                <Image
                  src="/free-icon-snapchat-3884580.png"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <p className="text-2xs ml-2 mt-0.5">Алексей</p>
            </div>
            <div>
              <p className="text-2xs opacity-50 mt-1">Раньше учил слова хаотично, и они быстро вылетали из головы. В EngQuest классно работает система повторений:
                приложение само подсовывает слова, которые я начал забывать. За два месяца ежедневных квестов по 15 минут мой 
                словарный запас вырос так, что я начал спокойно читать документацию и смотреть сериалы в оригинале
              </p>
            </div>
          </div>

          <div className="h-[260px] w-[160px] bg-[#E2E8EB] p-2 rounded-xl mt-10">
            <div className="flex">
              <div className="">
                <Image
                  src="/free-icon-snapchat-3884580.png"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <p className="text-2xs ml-2 mt-0.5">Мария, студентка</p>
            </div>
            <div>
              <p className="text-2xs opacity-50 mt-1">Ненавижу скучную зубрежку, но EngQuest реально затягивает. 
                Каждый день захожу, чтобы забрать ежедневный бонус и пройти новый уровень. Учить слова в формате карточек и квестов — это кайф. 
                За 3 месяца прокачала английский с A2 до B1, и теперь даже подготовка к экзамену в универе дается гораздо легче
              </p>
            </div>
          </div>

          <div className="h-[260px] w-[160px] bg-[#E2E8EB] p-2 rounded-xl mt-10">
            <div className="flex">
              <div className="">
                <Image
                  src="/free-icon-snapchat-3884580.png"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <p className="text-2xs ml-2 mt-0.5">Дмитрий</p>
            </div>
            <div>
              <p className="text-2xs opacity-50 mt-1">Постоянно работаю с зарубежными заказчиками, нужно держать язык в тонусе. 
                В EngQuest удобно, что можно добавлять свои слова в личный словарь прямо во время переписки, а потом учить их по карточкам. 
                Озвучка носителями — отдельный плюс. Идешь по улице, слушаешь произношение, запоминаешь. Очень помогает перед созвонами
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
