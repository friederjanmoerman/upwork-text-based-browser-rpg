import { PasswordInput } from "@/components/atoms/PasswordInput/PasswordInput"
import { TextInput } from "@/components/atoms/TextInput/TextInput"

import { Container } from "@medusajs/ui"

export function CreateAccount() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-2">
        <TextInput placeholder="Username" />
        <TextInput placeholder="Email" />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Repeat Password" />
      </div>
    </Container>
  )
}
