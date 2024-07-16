// adapted from https://github.com/jakobhoeg/shadcn-chat, MIT License

import { Message } from "ai/react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import Markdown from "markdown-to-jsx";
import { AnimatePresence, motion } from "framer-motion";

interface ChatListProps {
  messages?: Message[];
}

const messageVariant = cva("p-3 rounded-2xl md:max-w-3/4", {
  variants: {
    variant: {
      user: "bg-accent-foreground text-accent rounded-br-none",
      ai: "bg-accent text-accent-foreground rounded-bl-none",
    },
  },
});

export function ChatList({ messages }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messagesContainerRef}
      className="w-full flex-1 overflow-y-auto overflow-x-hidden flex flex-col rounded-md border max-w-5xl"
    >
      <AnimatePresence>
        {messages?.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.1 },
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: messages.indexOf(message) * 0.05 + 0.2,
              },
            }}
            style={{
              originX: 0.5,
              originY: 0.5,
            }}
            className={cn(
              "flex flex-col gap-2 p-4 prose-sm prose-p:m-0 prose-ol:ps-0.5 prose-ul:ps-1",
              message.role === "user" ? "items-end" : "items-start"
            )}
          >
            <Markdown
              className={cn(
                messageVariant({
                  variant: message.role === "user" ? "user" : "ai",
                })
              )}
            >
              {message.content}
            </Markdown>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
