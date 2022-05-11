/* Inventaire du joueur */
let player_inventory = [];
let can_move = true;
let dialogue_count = 0;
let pnj_texte = [];
let pnj_test = [];
/* fin */

let create_map = [];
let position_player_y = 3;
let position_player_x = 3;
let direction_player = "../img/player_move_down.png";/* "../img/player_move_down.png" */
let number_map_decouverte = 0;
/* Liste de valeur exclu pour le joueur */
let exclure = [30, 31, 32, 33, 34, 35, 36, 37,38,39,40,41,42,43,44,45, 47, 49, 50, 52, 53, 54];
let liste_de_monstre = [36, 38, 39, 40, 41, 42, 43, 44, 45, 47, 49, 50, 51, 52, 53, 54, 55]
let exclure_monstre = [5, 6, 7, 8, 12, 11, 13, 14, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37,38,39,40,41,42,43,44,45,
47, 49, 50, 52, 53, 54];
let playerleft = 0
let playerup = 0
let playerright = 0
let playerdown = 0

/* Mes pnjs || items || entités */ 
let pnj_1 = new pnj ("Amanda", "../img/Amanda_down.png","../img/Amanda_left.png","../img/Amanda_right.png", "../img/Amanda_up.png","../img/Amanda_down.png", 7, 4, map_1.image, 30, "pnj_1")
let pnj_2 = new pnj ("Thierry", "../img/thierry_right.png","../img/thierry_left.png","../img/thierry_right.png", "../img/thierry_up.png","../img/thierry_down.png", 7, 7, map_1.image, 31, "pnj_2")
let pnj_3 = new pnj("computer", "", "","","", "", 6, 3, map_1.image,34, "computer")
let slime_1 = new pnj ("monstre1", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 7, 3, map_2.image, 36, "monstre1")
let slime_2 = new pnj ("monstre2", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 3, 20, map_3.image, 38, "monstre2")
let slime_3 = new pnj ("monstre3", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 15, 16, map_3.image, 39, "monstre3")
let slime_4 = new pnj ("monstre4", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 8, 18, map_4.image, 40, "monstre4")
let slime_5 = new pnj ("monstre5", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 9, 5, map_4.image, 41, "monstre5")
let slime_6 = new pnj ("monstre6", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 18, 13, map_4.image, 42, "monstre6")
let slime_7 = new pnj ("monstre7", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 3, 9, map_5.image, 43, "monstre7")
let slime_8 = new pnj ("monstre8", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 10, 1, map_5.image, 44, "monstre8")
let slime_9 = new pnj ("monstre9", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 21, 14, map_5.image, 45, "monstre9")
let slime_11 = new pnj ("monstre11", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 3, 17, map_5.image, 47, "monstre11")
let slime_12 = new pnj ("monstre12", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 18, 7, map_6.image, 48, "monstre12")
let slime_13 = new pnj ("monstre13", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 15, 13, map_6.image, 49, "monstre13")
let slime_14 = new pnj ("monstre14", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 4, 3, map_6.image, 50, "monstre14")
let slime_16 = new pnj ("monstre16", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 23, 1, map_6.image, 52, "monstre16")
let slime_17 = new pnj ("monstre17", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 1, 15, map_6.image, 53, "monstre17")
let slime_18 = new pnj ("monstre18", "../img/monster_down.png","../img/monster_left.png","../img/monster_right.png", "../img/monster_up.png","../img/monster_down.png", 13, 22, map_6.image, 54, "monstre18")



const liste_monstre = [slime_1, slime_2, slime_3, slime_4, slime_5, slime_6, slime_7,
slime_8, slime_9, slime_11, slime_13, slime_14, slime_16, slime_17,
slime_18]

let clé = new objet("clé_molette", "../img/consommables-1-all-sprites.png", map_1.image, 12, 19, 32, "clé")
let reacteur = new objet("reacteur_vaisseau", "../img/consommables-1-all-sprites.png", map_2.image, 2, 4, 33, "reacteur")
let batterie = new objet("batterie_vaisseau", "../img/consommables-1-all-sprites.png", map_4.image, 12, 13, 37, "batterie")
let boussole = new objet("boussole_vaisseau", "../img/consommables-1-all-sprites.png", map_6.image, 20, 2, 35, "boussole")

const all_pnj = [pnj_1, pnj_2, slime_1, slime_2, slime_3, slime_4, 
slime_5, slime_6, slime_7, slime_8, slime_9, slime_11, 
slime_13, slime_14, slime_16, slime_17,slime_18];
/* fin */

let image_map_actuelle = map_1.image
let table_map_actuelle = map_1.tableau
refresh()

document.addEventListener("keydown", move_player);

/* "value" correspond à la valeur du span à la position d'arrivée du joueur */
function obstacle(value, exclure){
  for(let i = 0 ; i < exclure.length ; i++){
    if(value == exclure[i]){
      return true;
    }
  }
  return false;
};


function move_player(e){
  for(let i = 0 ; i < create_map.length ; i++){
    for(let j = 0 ; j < create_map[i].length ; j++){
      if(create_map[i][j] == 2){
        position_player_y = i
        position_player_x = j
      }
    }
  }

  // deplacement vers la gauche
  if(e.keyCode == all_commandes['run_left'] && can_move != false){
    let un_obstacle = obstacle(create_map[position_player_y][position_player_x -1], exclure)
    if(liste_de_monstre.includes(create_map[position_player_y][position_player_x - 1])){
      death()
    }
    if(create_map[position_player_y][position_player_x - 1] != 1 && !un_obstacle ){
     
      position_player_x = position_player_x - 1       
    }
    dialogue_count = 0;
    if(playerleft == 0){
      direction_player = "../img/player_move_left.png"
      playerleft = playerleft +1
    }
    else if(playerleft == 1){
      direction_player = "../img/player_move_left1.png"
      playerleft = playerleft +1
    }else{
      direction_player = "../img/player_move_left2.png"
      playerleft = 0
    }
  }
  // deplacement vers le haut 
  if(e.keyCode == all_commandes['run_up'] && can_move != false){
    let un_obstacle = obstacle(create_map[position_player_y - 1][position_player_x], exclure)
    if(liste_de_monstre.includes(create_map[position_player_y - 1][position_player_x])){
      death()
    }
    if(create_map[position_player_y - 1][position_player_x] != 1 && !un_obstacle){
      
      position_player_y = position_player_y - 1
      
    }
    dialogue_count = 0;
    if(playerup == 0){
      direction_player = "../img/player_move_up.png"
      playerup = playerup +1
    }
    else if(playerup == 1){
      direction_player =  "../img/player_move_up1.png"
      playerup = playerup +1
    }else{
      direction_player =  "../img/player_move_up2.png"
      playerup = 0
    }
  }
  // deplacement vers la droite
  if(e.keyCode == all_commandes['run_right'] && can_move != false){
    let un_obstacle = obstacle(create_map[position_player_y][position_player_x + 1], exclure) 
    if(liste_de_monstre.includes(create_map[position_player_y][position_player_x + 1])){
      death()
    }
    if(create_map[position_player_y][position_player_x + 1] != 1 && !un_obstacle){
      
      position_player_x = position_player_x + 1
      
    }
    dialogue_count = 0;
    if(playerright == 0){
      direction_player =  "../img/player_move_right.png"
      playerright = playerright +1
    }
    else if(playerright == 1){
      direction_player =  "../img/player_move_right1.png"
      playerright = playerright +1
    }else{
      direction_player =   "../img/player_move_right2.png"
      playerright = 0
    }
  }
  // deplacement vers le bas
  if(e.keyCode == all_commandes['run_down'] && can_move != false){
    let un_obstacle = obstacle(create_map[position_player_y + 1][position_player_x], exclure)
    if(liste_de_monstre.includes(create_map[position_player_y + 1][position_player_x])){
      death()
    }
    if(create_map[position_player_y + 1][position_player_x] != 1 && !un_obstacle){
      
      position_player_y = position_player_y + 1
    }
    dialogue_count = 0;
    if(playerdown == 0){
      direction_player =  "../img/player_move_down.png"
      playerdown = playerdown +1
    }
    else if(playerdown == 1){
      direction_player =  "../img/player_move_down1.png"
      playerdown = playerdown +1
    }else{
      direction_player =   "../img/player_move_down2.png"
      playerdown = 0
    }
  }
  
  
  change_map()
  evenement(e)
  refresh()
  
};

// change de map quand le personnage arrive sur un numéro du tableau qui correspond au changement de map
// donne une position de spawn, l'image de la map et le nouveau tableau de la map
function change_map(){
  // map 1 to map 2
  if(create_map[position_player_y][position_player_x] == 5){
    if(number_map_decouverte < 1){
      number_map_decouverte = number_map_decouverte + 1
    }
    image_map_actuelle = map_2.image
    table_map_actuelle = map_2.tableau
    position_player_y = 19;
    position_player_x = 16;
  }
  // map 2 to map 1
  if(create_map[position_player_y][position_player_x] == 6){
    image_map_actuelle = map_1.image
    table_map_actuelle = map_1.tableau
    position_player_y = 8;
    position_player_x = 1;
  }
  // map 2 to map 3
  if(create_map[position_player_y][position_player_x] == 7){
    if(number_map_decouverte < 2){
      number_map_decouverte = number_map_decouverte + 1
    }
    image_map_actuelle = map_3.image
    table_map_actuelle = map_3.tableau
    position_player_y = 17;
    position_player_x = 23;
  }
  // map 3 to map 2
  if(create_map[position_player_y][position_player_x] == 8){
    image_map_actuelle = map_2.image
    table_map_actuelle = map_2.tableau
    position_player_y = 17;
    position_player_x = 1;
  }
  // map 3 to map 4
  if(create_map[position_player_y][position_player_x] == 12){
    if(number_map_decouverte < 3){
      number_map_decouverte = number_map_decouverte + 1
    }
    image_map_actuelle = map_4.image
    table_map_actuelle = map_4.tableau
    position_player_y = 19;
    position_player_x = 23;
  }
  // map 4 to map 3
  if(create_map[position_player_y][position_player_x] == 11){
    image_map_actuelle = map_3.image
    table_map_actuelle = map_3.tableau
    position_player_y = 21;
    position_player_x = 1;
  }
  // map 5 to map 4
  if(create_map[position_player_y][position_player_x] == 13){
    image_map_actuelle = map_4.image
    table_map_actuelle = map_4.tableau
    position_player_y = 1;
    position_player_x = 6;
  }
  // map 4 to map 5
  if(create_map[position_player_y][position_player_x] == 14){
    if(number_map_decouverte < 4){
      number_map_decouverte = number_map_decouverte + 1
    }
    image_map_actuelle = map_5.image
    table_map_actuelle = map_5.tableau
    position_player_y = 23;
    position_player_x = 6;
  }
  // map 6 to map 5
  if(create_map[position_player_y][position_player_x] == 15){
    image_map_actuelle = map_5.image
    table_map_actuelle = map_5.tableau
    position_player_y = 4;
    position_player_x = 1;
  }
  // map 5 to map 6
  if(create_map[position_player_y][position_player_x] == 16){
    if(number_map_decouverte < 5){
      number_map_decouverte = number_map_decouverte + 1
    }
    image_map_actuelle = map_6.image
    table_map_actuelle = map_6.tableau
    position_player_y = 4;
    position_player_x = 23;
  }
  if(number_map_decouverte == 0){
    document.getElementById("imagemap").src="../img/all_map1.png"
  }else if(number_map_decouverte == 1){
    document.getElementById("imagemap").src="../img/all_map2.png"
  }else if(number_map_decouverte == 2){
    document.getElementById("imagemap").src="../img/all_map3.png"
  }else if(number_map_decouverte == 3){
    document.getElementById("imagemap").src="../img/all_map4.png"
  }else if(number_map_decouverte == 4){
    document.getElementById("imagemap").src="../img/all_map5.png"
  }else{
    document.getElementById("imagemap").src="../img/all_map6.png"
  }
}

function refresh(){
  create_map = [];
  pnj_test = create_map;
  
  for (let i = 0; i < table_map_actuelle.length; i++){
    tampon = []
    for (let j = 0; j < table_map_actuelle[i].length; j++){
      tampon.push(table_map_actuelle[i][j])
    }
    create_map.push(tampon)
  }

  /* Pose les chiffres représentant le pnj sur la carte */
  create_map[position_player_y][position_player_x] = 2;
  pnj_1.creer();
  pnj_2.creer();
  pnj_3.creer();
  slime_1.creer_slime();
  slime_2.creer_slime();
  slime_3.creer_slime();
  slime_4.creer_slime();
  slime_5.creer_slime();
  slime_6.creer_slime();
  slime_7.creer_slime();
  slime_8.creer_slime();
  slime_9.creer_slime();
  slime_11.creer_slime();
  slime_13.creer_slime();
  slime_14.creer_slime();
  slime_16.creer_slime();
  slime_17.creer_slime();
  slime_18.creer_slime();

  if(!clé.is_in_inventory()){
    clé.creer();}
  if(!batterie.is_in_inventory()){
    batterie.creer();}
  if(!reacteur.is_in_inventory()){
    reacteur.creer();}
  if(!boussole.is_in_inventory()){
    boussole.creer();}
  

  document.getElementById("map").remove()
  const div = document.createElement("div");
  div.setAttribute("id","map");
  document.getElementById("container_game").appendChild(div);
  for (let i = 0; i < create_map.length; i++){
    for (let j = 0; j < create_map[i].length; j++){
      const span = document.createElement("span");
      if (create_map[i][j] == 2){
        span.setAttribute("id","img");
      }
      /* span.innerHTML = create_map[i][j] */ /* Permet d'afficher la grille */
      document.getElementById("map").appendChild(span);

      /* Apparition du pnj + condition pour qu'il n'apparaisse que sur la bonne carte. */
      for (k = 0; k < all_pnj.length ; k++){
        if (create_map[i][j] == all_pnj[k].chiffre){
          if(image_map_actuelle == all_pnj[k].location){
            if (pnj_test[i][j] == all_pnj[k].chiffre){   
              span.setAttribute("id",all_pnj[k].identifiant);
              span.setAttribute("class", "pnj")
            }
          };
        }
        
      }
      /* Fin de l'apparition du pnj */

      /* Apparition des items */
      if(!clé.is_in_inventory()){
        if(create_map[i][j] == clé.chiffre){
          if(!player_inventory.includes(clé)){
            span.setAttribute("id", clé.identifiant);
            span.setAttribute("class", clé.nom)
          }
        }   
      }
      if(!batterie.is_in_inventory()){
        if(create_map[i][j] == batterie.chiffre){
          if(!player_inventory.includes(batterie)){
            span.setAttribute("id", batterie.identifiant);
            span.setAttribute("class", batterie.nom)
          }
        }   
      }
      if(!boussole.is_in_inventory()){
        if(create_map[i][j] == boussole.chiffre){
          if(!player_inventory.includes(boussole)){
            span.setAttribute("id", boussole.identifiant);
            span.setAttribute("class", boussole.nom)
          }
        }   
      }
      if(!reacteur.is_in_inventory()){
        if(create_map[i][j] == reacteur.chiffre){
          if(!player_inventory.includes(reacteur)){
            span.setAttribute("id", reacteur.identifiant);
            span.setAttribute("class", reacteur.nom)
          }
        }   
      }
      
    }
    
  }
 if(death != true){ /* Evite que les entités apparaissent sur l'écran de fin de partie */
    document.getElementById("map").style.backgroundImage = 'url('+image_map_actuelle+')';
    document.getElementById("img").style.backgroundImage = 'url('+direction_player+')';
    
  
    
    /* Pose le pnj si les conditions sont remplies. */
  
    pnj_1.pose_pnj();
    pnj_2.pose_pnj();
    slime_1.pose_pnj();
    slime_2.pose_pnj();
    slime_3.pose_pnj();
    slime_4.pose_pnj();
    slime_5.pose_pnj();
    slime_6.pose_pnj();
    slime_7.pose_pnj();
    slime_8.pose_pnj();
    slime_9.pose_pnj();
    slime_11.pose_pnj();
    slime_13.pose_pnj();
    slime_14.pose_pnj();
    slime_16.pose_pnj();
    slime_17.pose_pnj();
    slime_18.pose_pnj();
  

  /* Si l'objet n'est pas dans mon inventaire, alors elle apparait sur la carte */
    if(!clé.is_in_inventory()){
      clé.pose_objet();}

    if(!batterie.is_in_inventory()){
      batterie.pose_objet();}

    if(!boussole.is_in_inventory()){
      boussole.pose_objet();}

    if(!reacteur.is_in_inventory()){
      reacteur.pose_objet();}
  } else {
    death()

  }

  
  
}

function death(){
  window.location.replace("gameover.html");
}


