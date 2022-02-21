var dropzone = document.getElementById("dropzone");
var nodes = document.getElementsByClassName("node");
var selectedNode = '';
var selectedNodePos = 0;

for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener("mousedown", (ev) => {
        document.getElementById(ev.target.id);
    });
    nodes[i].addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text", ev.target.id)
        selectedNode = document.getElementById(ev.target.id)

        setTimeout(() => {
            dropzone.removeChild(selectedNode);
        }, 0)

    });
}

dropzone.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    whereAmI(ev.clientY);
});

dropzone.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log("dropped onto " + selectedNodePos);

    dropzone.insertBefore(selectedNode, dropzone.children[selectedNodePos])
});

function establishNodePositions() {
    for (var i = 0; i < nodes.length; i++) {
        var element = document.getElementById(nodes[i]['id']);
        var position = element.getBoundingClientRect();
        var yTop = position.top;
        var yBottom = position.bottom;
        nodes[i]['yPos'] = yTop + ((yBottom - yTop) / 2);

    }
}

function whereAmI(currentYPos) {
    establishNodePositions();
    // identify the node that is directly above the selectedNode

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i]['yPos'] < currentYPos) {

            var nodeAbove = document.getElementById(nodes[i]['id']);
            selectedNodePos = i + 1;
        }
    }

    if (typeof nodeAbove == 'undefined') {
        selectedNodePos = 0;
    }

    console.log(selectedNodePos)
}