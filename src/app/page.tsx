import { SendHorizontal } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconGitHub } from "@/components/ui/icons";
import { Message } from "@/components/ui/message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between lg:p-24 p-4 space-y-2">
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

      <ScrollArea className="flex w-full h-full max-w-5xl rounded-md border p-4">
        <div className="grid gap-2">
          <Message variant="ai">Ask me anything!</Message>
          <Message variant="user">test msg</Message>
        </div>
      </ScrollArea>

      <div className="flex w-full max-w-5xl items-center space-x-2">
        <Input placeholder="Aa" className="flex w-full" />
        <Button variant="link" size="icon">
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </main>
  );
}
