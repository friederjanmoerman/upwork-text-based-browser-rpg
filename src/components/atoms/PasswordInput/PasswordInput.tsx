import { Input } from "@medusajs/ui"

import { PasswordInputProps } from "./PasswordInput.props"

export function PasswordInput({ placeholder }: PasswordInputProps) {
  return (
    <div className="w-[250px]">
      <Input id="password" type="password" placeholder={placeholder} />
    </div>
  )
}
