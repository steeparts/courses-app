const courseGradeFormatter = grade => {
    const grades = grade.split(';');
    return grades.length === 1
        ? `${grades[0]} класс`
        : `${grades[0]}-${grades[grades.length - 1]} классы`;
};

export default courseGradeFormatter;
