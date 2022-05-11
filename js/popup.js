
// touches keycodes associées aux commandes
let all_commandes = {
    'run_right': 68,
    'run_left': 81,
    'run_up': 90,
    'run_down': 83,
    'open_map': 77,
    'open_commandes': 67,
    'interaction': 32,
    'open_inventory': 73
};

// correspondances des touches keycodes
let keycodes_to_letter = {
    32: "␣",
    39: "→",
    37: "←",
    38: "↑",
    40: "↓",
    48: "à",
    49: "&",
    50: "é",
    51: '"',
    52: "'",
    53: "(",
    54: "-",
    55: "è",
    56: "_",
    57: "ç",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9"
};

// changer une touche
function new_touche(e,key) {   
    var already_use = "no";
    var keycodes = e.keyCode ? e.keyCode : e.charCode;
    var value = all_commandes[key]
    // parcour le tableau des touches déjà utilisés pour savoir si on peut utilisé la touche choisie
    for (var prop in all_commandes) {
        if(all_commandes[prop] == keycodes){
            already_use = "yes";
        }
    }
    // si c'est pas déjà associé alors ca remplace et ca change la value en prenant dans le tableau "keycodes_to_letter" la valeur associé au keycodes
    if (already_use == "no"){
        all_commandes[key] = keycodes;
        document.getElementById(key).value = keycodes_to_letter[keycodes];
        console.log(all_commandes);
    }
    else{
        console.log("deja utilisé");
        document.getElementById(key).value = keycodes_to_letter[value];
        
    }
    console.log(all_commandes);
}

// lance la fonction open_all_map() quand on click sur l'id open_all_map
document.getElementById("open_all_map").onclick = function(){
    open_all_map()
}
// lance la fonction close_all_map() quand on click sur l'id close_all_map
document.getElementById("close_all_map").onclick = function(){
    close_all_map()
}

// lance la fonction open_all_commandes() quand on click sur l'id open_all_commandes
document.getElementById("open_all_commandes").onclick = function(){
    open_all_commandes()
}
// lance la fonction close_all_commandes() quand on click sur l'id close_all_commandes
document.getElementById("close_all_commandes").onclick = function(){
    close_all_commandes()
}

// lance la fonction open_inventory() quand on click sur l'id open_inventory
document.getElementById("open_all_inventory").onclick = function(){
    open_all_inventory()
}
// lance la fonction close_inventory() quand on click sur l'id close_inventory
document.getElementById("close_inventory").onclick = function(){
    close_inventory()
}

document.addEventListener("keydown", open_tools);
function open_tools(e){
    // lance la fonction open_all_map() quand on appuie sur la touche affecté a l'ouverture des commandes
    if(e.keyCode == all_commandes['open_map']){
        if (document.getElementById("all_map").style.left == "-100%"){
            open_all_map()
            close_all_commandes()
            close_inventory()
        }
        else{
            close_all_map()
        }
    }
    // lance la fonction open_all_commandes() quand on appuie sur la touche affecté a l'ouverture des commandes
    if(e.keyCode == all_commandes['open_commandes']){
        if (document.getElementById("all_commandes").style.left == "-100%"){
            open_all_commandes()
            close_all_map()
            close_inventory()
        }
        else{
            close_all_commandes()
        }
    }
    // lance la fonction open_invotory() quand on appuie sur la touche affecté a l'ouverture de l'inventaire
    if(e.keyCode == all_commandes['open_inventory']){
        if (document.getElementById("inventory").style.left == "-100%"){
            open_all_inventory()
            close_all_map()
            close_all_commandes()
        }
        else{
            close_inventory()
        }
    }
}
// ouverture et fermture modal map
function open_all_map(){
    document.getElementById("all_map").style.left = "0%";
}
function close_all_map(){
    document.getElementById("all_map").style.left = "-100%";
}

// ouverture et fermture modal commandes
function open_all_commandes(){
    document.getElementById("all_commandes").style.left = "0%";
}
function close_all_commandes(){
    document.getElementById("all_commandes").style.left = "-100%";
}

// ouverture et fermture modal inventory
function open_all_inventory(){
    document.getElementById("inventory").style.left = "0%";
}
function close_inventory(){
    document.getElementById("inventory").style.left = "-100%";
}
