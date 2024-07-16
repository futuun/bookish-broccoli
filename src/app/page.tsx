'use client';

import { useChat } from 'ai/react';
import React from "react";
import dedent from "dedent";
import { SendHorizontal } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconGitHub } from "@/components/ui/icons";
import { ChatList } from '@/components/ui/chat-list';
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  const initialMessage = {
    id: 'unq',
    role: 'assistant' as const,
    content: dedent`
      Hello! I'm Bookish Broccoli, your helpful assistant. I can answer questions about Michał \
      Mokijewski based on his CV. Ask me anything!
    `,
  }

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-between lg:p-24 p-4 space-y-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
        <h4 className="text-sm font-medium leading-none">
          Bookish Broccoli AI
        </h4>
        <div className="flex items-end justify-center space-x-2">
          <a
            target="_blank"
            href="https://github.com/futuun/bookish-broccoli/"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 md:w-auto p-0 md:p-4"
            )}
          >
            <IconGitHub />
            <span className="hidden ml-2 md:flex">GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>

      <ChatList messages={[initialMessage, ...messages]} />

      <form className="flex w-full max-w-5xl items-center space-x-2" onSubmit={handleSubmit}>
        <Input placeholder="Aa" className="flex w-full text-md" value={input} onChange={handleInputChange} required disabled={isLoading} />
        <Button variant="link" size="icon" type="submit">
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </form>
    </main>
  );
}
