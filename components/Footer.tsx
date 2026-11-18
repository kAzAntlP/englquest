import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return(
        <div className="font-fredoka text-center justify-center mb-20">
            <div>
                <p>Ссылки на наши сот сети</p>
            </div>
            <div className="justify-center flex gap-2 mt-2">
                <Link href="">
                    <Image
                        src="/free-icon-telegram-logo-87413.png"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                    />
                </Link>
                <Link href="">
                    <Image
                        src="/free-icon-vk-1051359.png"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                    />
                </Link>
                <Link href="">
                    <Image
                        src="/free-icon-youtube-logo-87421.png"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                    />
                </Link>
            </div>
            <div className="mt-2">
                <p>2026 Все права защищены.</p>
            </div>
        </div>
    )
}