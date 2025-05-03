import { 
    Card,
    CardDescription,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import Image from "next/image";


type skillCardProps = {
    title : string;
    level : string;
    icon :  string
}

export default function SkillCard(props : skillCardProps) {
  return (
    <Card className="flex p-4 gap-2">
            < Image 
            className="w-8 h-8 md:w-16 md:h-16 lg:24 lg:24"
            src={props.icon} 
            width={0} 
            height={0} 
            alt={props.title}/>
        <CardContent className="flex flex-col justify-center">
            <CardTitle className="text-sm md:text-lg">
                {props.title}
            </CardTitle>
            <CardDescription className="text-xs md:text-sm">
                {props.level}
            </CardDescription>

        </CardContent>

    </Card>
  )
}
