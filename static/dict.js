var text_fields = document.getElementsByClassName("en-inp");

var current_text = "";

for (var i = 0; i < text_fields.length; i++) {
    var field = text_fields[i];
    console.log(field);
    field.addEventListener("input", function(event) {
        current_text = event.target.value;
        for (var j = 0; j < text_fields.length; j++) {
            text_fields[j].value = current_text;
        }
    });
}

var buttons = document.getElementsByClassName("check");

function make_callback(req) {
    function callback() {
        var data = JSON.parse(req.responseText);
        var results_divs = document.getElementsByClassName("result");
        for (var j = 0; j < results_divs.length; j++) {
            var result_div = results_divs[j];
            result_div.textContent = "";

            for (var i = 0; i < 20; i++) {
                var head = document.createElement("em");
                head.textContent = data[i].word;
                var kind = document.createElement("p");
                kind.textContent = data[i].ext;
                var angle = document.createElement("h6");
                angle.textContent = "Angle: " + Math.floor(data[i].angle / Math.PI * 180 * 10) / 10 + "°";

                var container = document.createElement("div");
                container.classList.add("nimi");
                container.appendChild(head);
                container.appendChild(kind);
                container.appendChild(angle);
                result_div.appendChild(container);
            }
        }
    }
    return callback;
}

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    button.addEventListener("click", function(event) {
        console.log("hello " + current_text);
        var req = new XMLHttpRequest();

        req.onload = make_callback(req);

        req.open("GET", "https://api.kijetesantaka.lu/dict/" + encodeURIComponent(current_text));

        req.send();
    });
}
