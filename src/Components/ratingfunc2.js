export function calllRating(value) {
	if (value === 0 || value < 0) {
		return (
			<i className="fa-solid fa-star fa-lg" style={{ color: "#374151" }}></i>
		);
	} else {
		return (
			<i className="fa-regular fa-star fa-lg" style={{ color: "#374151" }}></i>
		);
	}
}
