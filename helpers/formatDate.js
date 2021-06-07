const formatDate = (date) => {
    var published_at = new Date(`${date}`);
    var options = { year: "numeric", month: "long", day: "numeric" };

    return published_at.toLocaleDateString("es-ES", options);
}

export default formatDate;