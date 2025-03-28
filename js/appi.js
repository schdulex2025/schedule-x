document.addEventListener("DOMContentLoaded", function () {
    // Retrieve selected section from localStorage (e.g., "secA")
    const selectedSection = localStorage.getItem("selectedSection") // Default to "secA" if not set
    const jsonFileName = `${selectedSection}.json`; // Construct file name dynamically

    fetch(jsonFileName) // Fetch JSON file dynamically
        .then(response => response.json()) // Convert response to JSON
        .then(jsonData => {
            // Get current day (e.g., "Monday", "Tuesday", etc.)
            const today = new Date().toLocaleString('en-US', { weekday: 'long' });

            // Get today's class schedule from JSON
            const todaySchedule = jsonData[today] || {};

            // Mapping JSON class keys to corresponding HTML IDs
            const classMappings = [
                { key: "cls1", classId: "classnameOne", teacherId: "techerOne" },
                { key: "cls2", classId: "classnameTwo", teacherId: "techerTwo" },
                { key: "cls3", classId: "classnameThree", teacherId: "techerThree" },
                { key: "cls4", classId: "classnameFour", teacherId: "techerFour" },
                { key: "cls5", classId: "classnameFive", teacherId: "techerFive" },
                { key: "cls6", classId: "classnameSix", teacherId: "techerSix" }
            ];

            // Loop through the mappings and update the HTML content
            classMappings.forEach(({ key, classId, teacherId }) => {
                let classElement = document.getElementById(classId);
                let teacherElement = document.getElementById(teacherId);

                if (classElement && teacherElement) {
                    let classInfo = todaySchedule[key] || { subject: "NO CLASS", teacher: "-X-" };
                    classElement.textContent = classInfo.subject || "NO CLASS";
                    teacherElement.textContent = classInfo.teacher || "-X-";
                }
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
