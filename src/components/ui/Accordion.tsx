"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: string
}

export function Accordion({ items, className }: { items: AccordionItemProps[], className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-neutral-800">{item.question}</h3>
              <div
                className={cn(
                  "p-2 rounded-full bg-secondary/10 text-secondary transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="p-5 pt-0 text-neutral-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
