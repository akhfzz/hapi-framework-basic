class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = 'ValidationError';
    }
}

const menghitungRata2 = (nilai) => {
    const exam = nilai.every(val => typeof val === 'number');
    if(!exam) throw new ValidationError('Nilai harus berupa angka')
    const sumVal = nilai.reduce((prev, cur) => prev+cur, 0);
    return sumVal/nilai.length
};

module.exports = menghitungRata2;