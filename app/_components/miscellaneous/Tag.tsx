import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Tag =(props: PropsWithChildren<{text?:string,cn?:string,colspan?:string}>) =>{
    return <span className={cn(props.colspan? props.colspan:"col-span-1","rounded-md bg-primary dark:text-black light:text-white text-white",props.cn)}>{props.text}</span>
}





