"use client"

import { Button } from "@medusajs/ui"
import { ButtonWithIconProps } from "./ButtonWithIcon.props"

export function ButtonWithIcon({ label, icon, onClick }: ButtonWithIconProps) {
  return (
    <Button onClick={onClick} className="w-full text-white">
      {label} {icon}
    </Button>
  )
}
