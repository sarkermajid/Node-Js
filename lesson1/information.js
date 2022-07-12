const getName = () => {
    return 'Sarker Majid';
}

const getAge = () => {
    return '25';
}

const getProfession = () => {
    return 'Software Engineer';
}

const getCompany = 'BDTiger IT';

// exports.getName = getName;
// exports.getAge = getAge;
// exports.getProfession = getProfession;
// exports.getCompany = getCompany;

// ektsathe onk guli module export korar niom
module.exports = {
    getName,
    getAge,
    getProfession,
    getCompany,
}