import SkillCard from "@components/Section/Skills/SkillCard/SkillCard";

const MLCat = [
  { name: "Python", level: "Intermediate", icon: "/assets/icons/pythonIcon.svg" },
  { name: "TensorFlow", level: "Intermediate", icon: '/assets/icons/tensorflowIcon.svg' },
  { name: "PyTorch", level: "Beginner", icon: '/assets/icons/pytorchIcon.svg' }
]
const FECat = [
  { name: "HTML", level: "Intermediate", icon: "/assets/icons/htmlIcon.svg" },
  { name: "CSS", level: "Intermediate", icon: "/assets/icons/cssIcon.svg" },
  { name: "Javascript", level: "Intermediate", icon: "/assets/icons/javascriptIcon.svg" },
  { name: "React", level: "Intermediate", icon: "/assets/icons/reactIcon.svg" },
  { name: "Bootstrap", level: "Beginner", icon: "/assets/icons/bootstrapIcon.svg" },
  { name: "Tailwind", level: "Intermediate", icon: "/assets/icons/tailwindIcon.svg" },
  { name: "Shadcn", level: "Beginner", icon: "/assets/icons/shadcnIcon.svg" },
]

const BECat = [
  { name: "Flask", level: "Intermediate", icon: "/assets/icons/flaskIcon.svg" },
  { name: "NodeJS", level: "Intermediate", icon: "/assets/icons/nodeIcon.svg" },
  { name: "BunJS", level: "Beginner", icon: "/assets/icons/bunIcon.svg" },
  { name: "Express", level: "Intermediate", icon: '/assets/icons/expressIcon.svg' },
  { name: "MySQL", level: "Intermediate", icon: '/assets/icons/mysqlIcon.svg' },
]

const FSCat = [
  { name: "NextJS", level: "Intermediate", icon: "/assets/icons/nextIcon.svg" },
  { name: "PHP", level: "Intermediate", icon: "/assets/icons/phpIcon.svg" },
  { name: "Laravel", level: "Intermediate", icon: '/assets/icons/laravelIcon.svg' },
  { name: "Django", level: "Beginner ", icon: '/assets/icons/djangoIcon.svg' }
]

const listOfSkill = {
  ML: MLCat,
  FE: FECat,
  BE: BECat,
  FS: FSCat,
  ALL: MLCat.concat(FECat, BECat, FSCat)
}

type skillListProps = {
  select: "ML" | "FE" | "BE" | "FS" | "ALL";
}
export default function SkillList(props: skillListProps) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 lg:gap-10 px-10 lg:px-48 xl:px-48">
      {!(props.select in listOfSkill) ? "" :

        (listOfSkill[`${props.select}`].map((items, index) => (
          <SkillCard
            key={index}
            title={items.name}
            level={items.level}
            icon={items.icon} />
        )))}
    </div>
  )
}
