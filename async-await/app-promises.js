const users = [{
    id: 1,
    name: 'Jane',
    schoolId: 101
},
{
    id: 2,
    name: 'Jacob',
    schoolId: 432
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 432,
    grade: 99
}, {
    id: 3,
    schoolId: 101,
    grade: 67
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });
        if (user) {
            resolve(user);
        }
        else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
}

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if (grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a+b ) / grades.length;
        }
        return `${user.name} has a ${average}% in the class`;
    });
}

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    })
};


const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    let average = 0;
        if (grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a+b ) / grades.length;
        }
        return `${user.name} has a ${average}% in the class`;
};

getStatusAlt(1).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
})