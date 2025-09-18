"use client";

import { useEffect, useRef } from "react";
import { TERMINAL_SEQUENCES } from "@/components/TerminalSequences";

const PROMPT_LINE_CLASS = "mt-4 flex items-start gap-2";
const PROMPT_SYMBOL_CLASS = "text-white/80";
const COMMAND_WRAPPER_CLASS = "inline-flex items-center gap-1 font-bold";
const CURSOR_CLASS = "inline-block w-[0.7ch] animate-pulse";
const OUTPUT_CONTAINER_CLASS = "ml-6 mt-2 space-y-1";
const OUTPUT_LINE_CLASS = "whitespace-pre-wrap font-normal";

export default function TerminalPreview() {
  const logRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLPreElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const logEl = logRef.current;
    const scrollEl = scrollRef.current;
    if (!logEl || !scrollEl) return;

    const sequence =
      TERMINAL_SEQUENCES[Math.floor(Math.random() * TERMINAL_SEQUENCES.length)];

    const scrollToBottom = () => {
      window.setTimeout(() => {
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }, 16);
    };

    const flashLogo = () => {
      const logo = logoRef.current;
      if (!logo) return;
      logo.classList.remove("flash");
      // Force reflow to retrigger animation
      void logo.offsetWidth;
      window.setTimeout(() => logo.classList.add("flash"), 120);
    };

    const typeText = (
      target: HTMLElement,
      text: string,
      onComplete: () => void
    ) => {
      let index = 0;
      const tick = () => {
        target.textContent = text.slice(0, index);
        index += 1;
        if (index <= text.length) {
          const delay = index < 4 ? 160 : 36 + Math.random() * 80;
          window.setTimeout(tick, delay);
        } else {
          onComplete();
        }
      };
      tick();
    };

    const renderOutputs = (
      container: HTMLElement,
      lines: string[],
      done: () => void,
      lineIndex = 0
    ) => {
      if (lineIndex >= lines.length) {
        done();
        return;
      }
      const line = lines[lineIndex];
      const lineEl = document.createElement("div");
      lineEl.className = OUTPUT_LINE_CLASS;
      lineEl.textContent = line.length ? line : " ";
      container.appendChild(lineEl);
      scrollToBottom();
      const delay = line.trim().length === 0 ? 90 : 140 + Math.random() * 80;
      window.setTimeout(() => {
        renderOutputs(container, lines, done, lineIndex + 1);
      }, delay);
    };

    const runCommand = (commandIndex: number) => {
      if (commandIndex >= sequence.commands.length) {
        const idleWrapper = document.createElement("div");
        idleWrapper.className = PROMPT_LINE_CLASS;
        const prompt = document.createElement("span");
        prompt.className = PROMPT_SYMBOL_CLASS;
        prompt.textContent = "> ";
        const cursor = document.createElement("span");
        cursor.className = CURSOR_CLASS;
        cursor.textContent = "_";
        idleWrapper.appendChild(prompt);
        idleWrapper.appendChild(cursor);
        logEl.appendChild(idleWrapper);
        scrollToBottom();
        return;
      }

      const command = sequence.commands[commandIndex];
      const wrapper = document.createElement("div");
      wrapper.className = PROMPT_LINE_CLASS;

      const prompt = document.createElement("span");
      prompt.className = PROMPT_SYMBOL_CLASS;
      prompt.textContent = "> ";

      const commandWrapper = document.createElement("span");
      commandWrapper.className = COMMAND_WRAPPER_CLASS;

      const typedSpan = document.createElement("span");
      typedSpan.className = "font-bold";
      const cursor = document.createElement("span");
      cursor.className = CURSOR_CLASS;
      cursor.textContent = "_";

      commandWrapper.appendChild(typedSpan);
      commandWrapper.appendChild(cursor);
      wrapper.appendChild(prompt);
      wrapper.appendChild(commandWrapper);

      logEl.appendChild(wrapper);
      scrollToBottom();

      typeText(typedSpan, command.input, () => {
        cursor.style.opacity = "0";
        flashLogo();

        const outputContainer = document.createElement("div");
        outputContainer.className = OUTPUT_CONTAINER_CLASS;
        logEl.appendChild(outputContainer);
        scrollToBottom();

        renderOutputs(outputContainer, command.output, () => {
          const spacer = document.createElement("div");
          spacer.textContent = " ";
          logEl.appendChild(spacer);
          scrollToBottom();
          window.setTimeout(() => runCommand(commandIndex + 1), 600);
        });
      });
    };

    window.setTimeout(() => runCommand(0), 400);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full">
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)",
          }}
        />
        <div
          ref={scrollRef}
          className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden p-6 text-[clamp(12px,1.5vw,18px)] font-mono leading-relaxed text-[#39ff14] scroll-smooth"
          style={{
            textShadow:
              "0 0 5px rgba(57,255,20,0.7), 0 0 15px rgba(57,255,20,0.4)",
          }}
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <pre
              ref={logoRef}
              aria-hidden
              className="select-none whitespace-pre text-center leading-[1.1] sm:text-left"
            >
{String.raw`     _                       _           _   
    / \   _ __  _ __  ___| |__   ___ | |_ 
   / _ \ | '_ \| '_ \/ __| '_ \ / _ \| __|
  / ___ \| |_) | |_) \__ \ | | | (_) | |_ 
 /_/   \_\ .__/| .__/|___/_| |_|\___/ \__|
         |_|   |_|                          `}
            </pre>
            <img
              src="/monitor-icon.png"
              alt="App Shot monitor icon"
              width={128}
              height={128}
              className="h-20 w-20 shrink-0"
            />
          </div>
          <div ref={logRef} aria-live="polite" />
        </div>
      </div>
      <style jsx>{`
        .flash {
          filter: brightness(1.15) saturate(1.2);
        }
      `}</style>
    </div>
  );
}
