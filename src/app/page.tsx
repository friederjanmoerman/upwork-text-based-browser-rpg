"use client"

import { TextInput } from "@/components/atoms/TextInput/TextInput"
import { PasswordInput } from "@/components/atoms/PasswordInput/PasswordInput"
import { ButtonWithIcon } from "@/components/atoms/ButtonWithIcon/ButtonWithIcon"

import { ChevronRight } from "@medusajs/icons"

export default function Home() {
  return (
    <>
      <TextInput placeholder="Username" />
      <PasswordInput />
      <ButtonWithIcon label="Sign In" icon={<ChevronRight />} onClick={() => console.log("Button clicked")} />
    </>
  )
}
