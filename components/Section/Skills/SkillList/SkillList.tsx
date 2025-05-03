import SkillCard  from "@components/Section/Skills/SkillCard/SkillCard";

const MLCat = [
    {id : 0, name : "Python", level : "Intermediate", icon : "/assets/icons/pythonIcons.svg" },
    {id : 1, name : "TensorFlow", level : "Intermediate", icon : '/assets/icons/tensorflowIcons.svg'},
    {id : 2, name : "PyTorch", level : "Beginner ", icon : '/assets/icons/pytorchIcons.svg'}
]

const listOfSkill = {
    ML : MLCat
}

export default function SkillList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 lg:gap-10 px-10 lg:px-48 xl:px-48">
        {listOfSkill["ML"].map((items) => (
                <SkillCard 
                key={items.id}
                title={items.name} 
                level={items.level} 
                icon={items.icon}/>
        ))}

    </div>
  )
}
