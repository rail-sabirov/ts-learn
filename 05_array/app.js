var skills = ['Dev', 'DevOps', 'Test'];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    console.log(skill);
}
console.log('------------------------');
var res = skills
    .filter(function (s) { return s != 'DevOps'; })
    .map(function (s) { return s + '! '; })
    .reduce(function (a, b) { return a + b; });
console.log(res);
