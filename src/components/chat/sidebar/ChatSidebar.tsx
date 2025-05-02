import Link from "next/link";
import React from "react";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
import Github from "../../misc/Github";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from "./buttons/CurrentModel";

type Props = {};

export default function ChatSidebar({}: Props) {
  const { clearConversations } = useOpenAI();

  return (
    <div className="left-0 top-0 h-full max-h-screen flex-col bg-primary text-primary">
      <div className="flex h-full flex-col items-stretch p-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-secondary/70"
        >
          <MdAdd />
          New chat
        </Link>

        <Conversations />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2">
          <div className="flex flex-col gap-y-2 border-b border-white/10">
            <CurrentModel />
            <ApiKey />
          </div>
          <ButtonContainer onClick={clearConversations}>
            <MdDeleteOutline />
            Clear Conversations
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
}
