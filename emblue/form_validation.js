function showError(e, r) { document.getElementsByClassName("error-" + e)[0].children[0].innerHTML = '<span class="error">' + r + "</span>" }

function validateRequired(e) { return e.required && 0 === e.value.length ? (showError(e.id, e.getAttribute("data-error").split("|")[0]), !1) : (showError(e.id, ""), !0) }

function isNumeric(e) { var a = true; if (e.length > 0) { var r = /^[0-9]+$/;
        a = r.test(e); } return a }

function isValidEmail(e) { var r = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; return r.test(e) }

function isAlphanumeric(e) { return true; }

function isValidDate(e) { var r = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; return r.test(e) }

function validateType(e) { var r = !0; switch (e.type) {
        case "text":
            r = isAlphanumeric(e.value); break;
        case "email":
            r = isValidEmail(e.value); break;
        case "date":
            if (!e.required) return true;
            date = e.value.split("-"), r = isValidDate(date[2] + "/" + date[1] + "/" + date[0]) } return r }

function validateForm() { for (var e = document.getElementsByTagName("input"), t = document.getElementsByTagName("select"), a = 0, r = 0; r < e.length; r++) "hidden" !== e[r].type && "submit" !== e[r].type && (validateRequired(e[r]) ? validateType(e[r]) || (showError(e[r].id, "* " + e[r].getAttribute("data-error").split("|")[1]), a++) : a++); for (r = 0; r < t.length; r++) validateRequired(t[r]) || a++; return a > 0 ? !1 : !0 }