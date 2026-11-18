
export default function PracticePage({ params }: { params: { practiceid: string}}) {

    const PracticePage = params.practiceid;

    return (
        <main className="max-w-[1440px] mx-auto font-fredoka mb-6 ">
            <div className="text-center mt-20">
                <p className="text-2xl">Твой путь к свободному английскому</p>
                <p className="opacity-50 ">Проходи увлекательные квесты, проверяй знания в интерактивных тестах и прокачивай свой английский шаг за шагом.</p>
            </div>

            { PracticePage === "1" && (

                <div className="flex gap-8 mt-10 ">
                    <div className="bg-[#E2E8EB] w-[240px] flex flex-col gap-4 rounded-xl">
                        <div className="bg-[#64C5F6] h-[70px] rounded-t-xl">
                            <p className="pl-3 pt-2">Уровень A0</p>
                            <p className="pl-3 pt-2">1 занятие</p>
                        </div>
                    </div>
                
                    <div className="bg-[#E2E8EB] w-[720px] pl-4 pt-2 rounded-xl">
                        <p className="ml-6">Урок 1: Знакомство и рассказ о себе (Уровень A0)</p>
                        <p className="opacity-50">Главная цель урока: Научиться строить базовые предложения о себе (кто я, где живу, что люблю, на каких языках говорю).</p>
                        <p>Шаг 1: Кто я? (I am / I + глагол)</p>
                        <p>В этом шаге мы учимся говорить о своих действиях и представляться.Мини-теория (для экрана):</p>
                        <p>Слово I (я) всегда пишется с большой буквы.
                            <br />Формула: I + Глагол (Я делаю что-то).
                            <br />Формула: I am + Имя (Я — Алекс).
                            <br />I understand Я понимаю 
                            <br />I see Я вижу 
                            <br />I work Я работаю 
                            <br />I study Я учусь
                            <br />I am Alex Я Алекс
                            <br />My name is... Меня зовут...
                            <br />I understand you Я понимаю тебя
                            <br />I see you Я вижу тебя
                            <br />Шаг 2: Где я живу и откуда я (I live in / I am from)</p>
                        <p className="ml-6">Шаг 2: Где я живу и откуда я (I live in / I am from)</p>
                        <p className="opacity-50">Учимся говорить о местоположении.Мини-теория:</p>
                        <p>I live in — Я живу в (далее страна или город).
                            <br />I am from (или кратко I'm from) — Я из (далее страна).
                            <br />Важно: предлог in переводится как «в», а from — как «из».
                            <br />EnglishRussianI live in Russia Я живу в России
                            <br />I live in Moscow Я живу в Москве
                            <br />I live in London Я живу в Лондоне
                            <br />I live in America Я живу в Америке
                            <br />I live in New York Я живу в Нью-Йорке
                            <br />I am from Russia Я из России
                            <br />I am from England Я из Англии</p> 
                            <p className="ml-6">Шаг 3: Языки (I speak / I learn)</p>
                        <p className="opacity-50">Учимся говорить, на каких языках мы говорим или которые изучаем. Мини-теория (для экрана):</p>
                        <p>I speak — Я говорю на (далее язык).
                            <br />I learn — Я учу (далее язык).
                            <br />Важно: Названия языков всегда пишутся с большой буквы (English, Russian). Предлог «на» или «по» в английском не используется.
                            <br />Слово and (и) помогает соединить два языка.
                            <br />EnglishRussianI speak English Я говорю по-английски
                            <br />I speak Russian Я говорю по-русски
                            <br />I speak Spanish Я говорю по-испански
                            <br />I speak German Я говорю по-немецки 
                            <br />I speak French Я говорю по-французски 
                            <br />I speak Italian Я говорю по-итальянски 
                            <br />I speak English and Russian Я говорю по-английски и по-русски 
                            <br />I learn English Я учу английский 
                            <br />I learn English online Я учу английский онлайн</p>
                        <p>Шаг 4: Мои увлечения и планы (I like / I want to)</p>
                        <p className="opacity-50">Самая важная часть для общения. Учимся говорить о хобби и желаниях.Мини-теория (для экрана):</p>
                        <p>I like — Мне нравится (дословно: Я люблю).
                            <br />I like it — Мне нравится это.
                            <br />I really like — Мне очень нравится (слово very перед глаголом не ставится!).
                            <br />I like it very much — Мне это очень сильно нравится.
                            <br />I want to + глагол — Я хочу (что-то сделать).
                            <br />I like + глагол с -ing — Мне нравится (что-то делать). Например: I like traveling (Мне нравится путешествовать).
                            <br />I like English Мне нравится английский
                            <br />I like sport Мне нравится спорт
                            <br />I like music Мне нравится музыка
                            <br />I like it Мне нравится это 
                            <br />I really like it Мне это очень нравится
                            <br />I like it very much Мне это очень сильно нравится
                            <br />I like traveling Мне нравится путешествовать
                            <br />I want to travel Я хочу путешествовать
                            <br />I want to go to America Я хочу поехать в Америку
                            <br />I want to visit this country Я хочу посетить эту страну</p>
                    </div>
                </div>
            )}
        </main>
    )
}