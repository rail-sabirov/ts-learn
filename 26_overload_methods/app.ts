{
    class User {
        skills: string[];

        addSkill(skillName: string): void;
        addSkill(skillNames: string[]): void;

        addSkill(skills: string | string[]): void {
            if (typeof skills === 'string') {
                this.skills.push(skills);
            }

            if (typeof skills === 'object' && Array.isArray(skills)) {
                this.skills.push(...skills)
            }
            
        }

    }
    
    // new User().addSkill()

    // Перегрузка функций в typescript
    function run(distance: string): string;
    function run(distance: number): number;
    function run(distance: string | number): string | number {
        if(typeof distance === 'string') {
            return 'It`s string';
        
        } else {
            return 1;
        }
    }
}