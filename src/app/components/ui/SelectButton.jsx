import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"

export function SelectButton() {
    return (
      <Select>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Courses" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="banana">Courses</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }