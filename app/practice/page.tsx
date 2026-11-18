import Link from "next/link"
import Image from "next/image"

export default function Practice() {
    return (
        <main className="max-w-[1440px] mx-auto font-fredoka mb-6 ">
            <div className="text-center mt-20">
                <p className="text-2xl">Твой путь к свободному английскому</p>
                <p className="opacity-50 ">Проходи увлекательные квесты, проверяй знания в интерактивных тестах и прокачивай свой английский шаг за шагом.</p>
            </div>

            <div className="mt-10">
                <div className="bg-[#64C5F6] rounded-t-xl">
                    <p className="pl-4">Уровень A0</p>
                </div>

                <div className="bg-[#E2E8EB] rounded-b-xl p-6 flex gap-6 justify-around ">
                    <Link href="/practice/1">
                        <div className="bg-[#E2E8EB] w-[200px] h-[100px] rounded-xl border hover:opacity-50 transition-opacity">
                            <div className="bg-[#C4E3F3] w-[198px] h-[72px] rounded-xl flex items-center justify-center">
                                    <Image
                                    src="/free-icon-translate-3884472.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    />
                            </div>
                            <p className="pl-4">1 занятие</p>
                        </div>
                    </Link>

                    <div className="bg-[#E2E8EB] w-[200px] h-[100px] rounded-xl border hover:opacity-50 transition-opacity">
                        <div className="bg-[#C4E3F3] w-[198px] h-[72px] rounded-xl flex items-center justify-center">
                            <Image
                            src="/free-icon-translate-3884472.png"
                            alt=""
                            width={40}
                            height={40}
                            />
                        </div>
                        <p className="pl-4">2 занятие</p>
                    </div>

                    <div className="bg-[#E2E8EB] w-[200px] h-[100px] rounded-xl border hover:opacity-50 transition-opacity">
                        <div className="bg-[#C4E3F3] w-[198px] h-[72px] rounded-xl flex items-center justify-center">
                            <Image
                            src="/free-icon-translate-3884472.png"
                            alt=""
                            width={40}
                            height={40}
                            />
                        </div>
                        <p className="pl-4">3 занятие</p>
                    </div>

                    <div className="bg-[#E2E8EB] w-[200px] h-[100px] rounded-xl border hover:opacity-50 transition-opacity">
                        <div className="bg-[#C4E3F3] w-[198px] h-[72px] rounded-xl flex items-center justify-center">
                            <Image
                            src="/free-icon-translate-3884472.png"
                            alt=""
                            width={40}
                            height={40}
                            />
                        </div>
                        <p className="pl-4">4 занятие</p>
                    </div> 
                </div>
            </div>
        </main>
    )
}