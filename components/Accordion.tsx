"use client";

import { useState } from "react";
import { cn } from "@/utils";
import PlusIcon from "@/icons/plus.svg";
import MinusIcon from "@/icons/minus.svg";

interface FAQData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQData[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-600 dark:text-cyan-400">
        Frequently asked questions
      </h2>
      <div>
        {items.map((item, index) => (
          <div
            className={cn(
              "border-b border-gray-300 dark:border-gray-600 pr-4",
              { "border-t": index === 0 }
            )}
            key={index}
          >
            <button
              className="flex w-full items-center justify-between py-5 text-left"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100 pr-5 md:pr-0">
                {item.question}
              </span>
              <div className="flex items-center justify-center text-gray-900 dark:text-gray-100">
                {openIndex === index ? (
                  <MinusIcon className="h-6 w-6" />
                ) : (
                  <PlusIcon className="h-6 w-6" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pb-5 md:pr-10 pr-0 text-gray-600 dark:text-gray-300">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
