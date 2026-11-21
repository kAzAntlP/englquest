"use client"; // ⚠️ Обязательно: разрешает использовать интерактивность (useState) в Next.js

import { useState } from "react";

// 1. НАШИ ДАННЫЕ (Колода карт)
// Мы берем фразы прямо из твоего старого текста, но теперь они структурированы
const flashcardsData = [
  { id: 1, en: "I understand", ru: "Я понимаю" },
  { id: 2, en: "I work", ru: "Я работаю" },
  { id: 3, en: "I live in Moscow", ru: "Я живу в Москве" },
  { id: 4, en: "I am from Russia", ru: "Я из России" },
  { id: 5, en: "I speak English", ru: "Я говорю по-английски" },
  { id: 6, en: "I like traveling", ru: "Мне нравится путешествовать" },
];

export default function PracticePage({ params }: { params: { practiceid: string } }) {
  // 2. НАША "ПАМЯТЬ" (Состояние)
  // currentIndex: какая карточка сейчас показывается (0 = первая)
  const [currentIndex, setCurrentIndex] = useState(0);
  // isFlipped: перевернута ли карточка (false = видим английский, true = видим русский)
  const [isFlipped, setIsFlipped] = useState(false);

  // Достаем текущую карточку из массива по номеру
  const currentCard = flashcardsData[currentIndex];

  // 3. ФУНКЦИИ-ДЕЙСТВИЯ
  const handleNext = () => {
    setIsFlipped(false); // Сначала возвращаем карточку в исходное положение
    // Переключаем на следующую. Если дошли до конца, % вернет нас к 0 (к первой)
    setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
  };

  // 4. ОТРИСОВКА (То, что видит пользователь)
  return (
    <main className="max-w-[1440px] mx-auto font-fredoka mb-6 px-4">
      <div className="text-center mt-20">
        <p className="text-2xl text-[#262C23]">Урок 1: Знакомство и рассказ о себе</p>
        <p className="opacity-50 mt-2 text-sm">Нажми на карточку, чтобы увидеть перевод</p>
      </div>

      {/* Сама карточка */}
      <div className="flex flex-col items-center mt-10 gap-6">
        <div 
          onClick={() => setIsFlipped(!isFlipped)} // ⚡ При клике меняем состояние на противоположное
          className="w-full max-w-md h-64 bg-[#64C5F6] rounded-2xl shadow-xl cursor-pointer flex items-center justify-center p-6 text-center transition-all duration-300 hover:scale-[1.02] active:scale-95 select-none"
        >
          <p className="text-3xl font-bold text-white">
            {/* ⚡ ТЕРНАРНЫЙ ОПЕРАТОР: если перевернута, покажи ru, иначе покажи en */}
            {isFlipped ? currentCard.ru : currentCard.en}
          </p>
        </div>

        {/* Кнопки управления */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev}
            className="px-6 py-3 bg-[#E2E8EB] text-[#262C23] rounded-xl font-medium hover:bg-[#d1d9dc] transition-colors"
          >
            ← Назад
          </button>
          
          <span className="px-4 py-3 text-[#262C23] opacity-50 font-medium">
            {currentIndex + 1} / {flashcardsData.length}
          </span>
          
          <button 
            onClick={handleNext}
            className="px-6 py-3 bg-[#262C23] text-white rounded-xl font-medium hover:opacity-80 transition-opacity"
          >
            Далее →
          </button>
        </div>
      </div>
    </main>
  );
}