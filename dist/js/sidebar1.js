$(".sidebar-control").click(function () {
    if (localStorage.getItem("sidebar-value") === null) {
        localStorage.setItem("sidebar-value", "sidebar-collapse");
    }
    else {
        if (localStorage.getItem("sidebar-value") == "sidebar-collapse") {
            localStorage.setItem("sidebar-value", "sidebar-open");
        }
        else {
            localStorage.setItem("sidebar-value", "sidebar-collapse");
        }
    }
    // console.log(localStorage.getItem("sidebar-value"));
});


if (localStorage.getItem("sidebar-value") === null) {
}
else {
    if (localStorage.getItem("sidebar-value") == "sidebar-collapse") {
        $("body").addClass("sidebar-collapse");
        $("body").removeClass("sidebar-open");
    }
    else {
        $("body").removeClass("sidebar-collapse");
        $("body").addClass("sidebar-open");
    }
}