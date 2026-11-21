import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white text-[#262C23]">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between mt-4">
                <p className="font-fredoka text-3xl">EnglQuest</p>
                <nav className="flex gap-4">
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="/">Главная</Link>
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="/practice">Практика</Link>
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="/cards">Карточки</Link>
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="#">Словарь</Link>
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="#">Настройки</Link>
                    <Link className="font-fredoka hover:opacity-50 transition-opacity" href="#">Профиль</Link>
                </nav>
            </div>
        </header>
    );
}
