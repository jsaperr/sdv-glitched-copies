var farmerText = "test"

function copyFarmerText() {
    console.log(farmerText);
    navigator.clipboard.writeText(farmerText);
}

function copyFarmText() {
    navigator.clipboard.writeText(farmText);
}

function copyFavoriteText() {
    navigator.clipboard.writeText(favoriteText);
}

function copyPetText() {
    navigator.clipboard.writeText(PetText);
}
