export default async function PracticePage({ params }: { params: Promise<{ practiceid: string }> }) {
    // ⚠️ ВАЖНО: awaited params - это новое требование Next.js 15+
    const { practiceid } = await params;

    return (
        <main className="max-w-[1440px] mx-auto font-fredoka mb-6 ">
            <div className="text-center mt-20">
                <p className="text-2xl">Твой путь к свободному английскому</p>
                <p className="opacity-50 ">Проходи увлекательные квесты, проверяй знания в интерактивных тестах и прокачивай свой английский шаг за шагом.</p>
            </div>

            { practiceid === "1" && (
                <div className="flex gap-8 mt-10 ">
                    <div className="bg-[#E2E8EB] w-[240px] flex flex-col gap-4 rounded-xl">
                        <div className="bg-[#64C5F6] h-[70px] rounded-t-xl">
                            <p className="pl-3 pt-2">Уровень A0</p>
                            <p className="pl-3 pt-2">1 занятие</p>
                        </div>
                    </div>
                
                    <div className="bg-[#E2E8EB] w-[720px] pl-4 pt-2 rounded-xl">
                        <p className="ml-6">Урок 1: Знакомство и рассказ о себе (Уровень A0)</p>
                        <p className="opacity-50">Главная цель урока: Научиться строить базовые предложения о себе.</p>
                        <p>Шаг 1: Кто я? (I am / I + глагол)</p>
                        <p>В этом шаге мы учимся говорить о своих действиях и представляться.</p>
                        <p>Слово I (я) всегда пишется с большой буквы.
                            <br />Формула: I + Глагол (Я делаю что-то).
                            <br />I understand Я понимаю 
                            <br />I work Я работаю 
                            <br />I study Я учусь
                            <br />I am Alex Я Алекс
                        </p> 
                        <p className="ml-6">Шаг 2: Где я живу и откуда я (I live in / I am from)</p>
                        <p className="opacity-50">Учимся говорить о местоположении.</p>
                        <p>I live in — Я живу в (далее страна или город).
                            <br />I am from — Я из (далее страна).
                            <br />I live in Russia Я живу в России
                            <br />I live in Moscow Я живу в Москве
                            <br />I am from Russia Я из России
                        </p>
                        <p className="ml-6">Шаг 3: Языки (I speak / I learn)</p>
                        <p className="opacity-50">Учимся говорить, на каких языках мы говорим.</p>
                        <p>I speak — Я говорю на (далее язык).
                            <br />I learn — Я учу (далее язык).
                            <br />I speak English Я говорю по-английски
                            <br />I speak Russian Я говорю по-русски
                            <br />I learn English Я учу английский
                        </p>
                        <p>Шаг 4: Мои увлечения и планы (I like / I want to)</p>
                        <p className="opacity-50">Учимся говорить о хобби и желаниях.</p>
                        <p>I like — Мне нравится.
                            <br />I want to + глагол — Я хочу (что-то сделать).
                            <br />I like English Мне нравится английский
                            <br />I like traveling Мне нравится путешествовать
                            <br />I want to travel Я хочу путешествовать
                        </p>
                    </div>
                </div>
            )}
        </main>
    )
}