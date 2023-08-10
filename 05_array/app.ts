const skills: string[] = ['Dev', 'DevOps', 'Test'];

for(const skill of skills) {
    console.log(skill)
}

console.log('------------------------')

const res = skills
    .filter((s: string) => s != 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)

console.log(res)