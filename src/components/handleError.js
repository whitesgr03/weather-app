"use strict";

const handleError = (() => {
    const api = (error) => {
        if (error.message === "Failed to fetch") {
            alert(error.message);
        }
        console.log(error);
    };

    return {
        api,
    };
})();

export { handleError };
