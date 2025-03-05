import { Input } from "@medusajs/ui"

export function PasswordInput() {
  return (
    <div className="w-[250px]">
      <Input id="password" type="password" defaultValue="password" />
    </div>
  )
}
