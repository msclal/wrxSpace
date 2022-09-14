function update() {
    if(document.getElementById('location').value === 'mke') {
        document.getElementById('milwaukeeBuildingForm').style.display = 'block'
    }
}

function update2() {
    if(document.getElementById('milwaukeeBuildings').value === 'tower') {
        document.getElementById('mkeFloorsForm').style.display = 'block'
    }
}

function update3() {
    if(document.getElementById('mkeFloors').value === 'T29') {
        document.getElementById('lastDeskSpaceFormElement').style.display = 'block'
    }
    setTimeout(() => {document.getElementById('submitRequest').style.display = 'block'}, 0)
    
}

