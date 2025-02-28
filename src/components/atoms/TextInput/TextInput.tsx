import { TextInputProps } from "./TextInput.props"
import { Input } from "@medusajs/ui"

export function TextInput({ placeholder }: TextInputProps) {
  return (
    <div className="w-[250px]">
      <Input placeholder={placeholder} />
    </div>
  )
}
