const addFontToHead = fontFamily => {
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
        "https://fonts.googleapis.com/css?family=" +
        fontFamily.replace(/\s+/g, "+") +
        ":" +
        "regular";
    head.appendChild(link);
};

export default addFontToHead;