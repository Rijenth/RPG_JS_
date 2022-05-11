function evenement(e){
  if(image_map_actuelle == map_1.image){ /* Ces évènements ne se lance que sur la map1 */
    pnj_1.dialogue(e)
    pnj_2.dialogue(e)
    pnj_3.dialogue(e)
  }

  placement_slime() /* Place les créatures si la map correspond à leurs maps d'apparitions */

  clé.put_in_inventory(e)
  batterie.put_in_inventory(e)
  reacteur.put_in_inventory(e)
  boussole.put_in_inventory(e)
};
  
  /* position_x et position_y désigne l'emplacement du pnj sur la carte. */
class pnj{
  constructor(nom, image, left, right, up, down, position_x, position_y, image_map_ou_il_apparait, chiffre, identifiant){
    this.nom = nom;
    this.image = image;
    this.left = left;
    this.right = right;
    this.up = up;
    this.down = down;
    this.position_x = position_x;
    this.position_y = position_y;
    this.location = image_map_ou_il_apparait;
    this.chiffre = chiffre;
    this.identifiant = identifiant
  }
  pose_pnj(){
    if(image_map_actuelle == this.location){
    document.getElementById(this.identifiant).style.backgroundImage = 'url('+this.image+')'};
  }

  creer(){
    if(image_map_actuelle == this.location){
      pnj_test[this.position_y][this.position_x] = this.chiffre};
  }

  creer_slime(){
    if(image_map_actuelle == this.location){
      create_map[this.position_y][this.position_x] = this.chiffre
    }
  }

  move_slime(){
    if(image_map_actuelle == this.location){
      let decision = Math.floor(Math.random() * 4);  

      if(create_map[this.position_y][this.position_x + 1] != 1 && decision == 1){
        let tentative = obstacle(create_map[this.position_y][this.position_x + 1], exclure_monstre)
        if(!tentative){
          if(this.position_y == position_player_y && this.position_x + 1  == position_player_x){
            death()
          }
          this.position_x = this.position_x + 1
          this.position_y = this.position_y 
          this.image = this.right
        }
      } else {
      if(create_map[this.position_y][this.position_x - 1] != 1 && decision == 2){
        let tentative = obstacle(create_map[this.position_y][this.position_x - 1], exclure_monstre)
        if(!tentative){
          if(this.position_y == position_player_y && this.position_x - 1  == position_player_x){
            death()
            
          }
          this.position_x = this.position_x - 1
          this.position_y = this.position_y 
          this.image = this.left}
      }
      if(create_map[this.position_y - 1][this.position_x] != 1 && decision == 3){
        let tentative = obstacle(create_map[this.position_y - 1][this.position_x], exclure_monstre)
        if(!tentative){
          if(this.position_y - 1 == position_player_y && this.position_x  == position_player_x){
            death()
            
          }
          this.position_x = this.position_x
          this.position_y = this.position_y - 1 
          this.image = this.up}
      }
      if(create_map[this.position_y + 1][this.position_x] != 1 && decision == 0){
        let tentative = obstacle(create_map[this.position_y + 1][this.position_x], exclure_monstre)
        if(!tentative){
          if(this.position_y + 1 == position_player_y && this.position_x  == position_player_x){
            death()
            
          }
          this.position_x = this.position_x
          this.position_y = this.position_y + 1 
          this.image = this.down}
      }
    }
    }
  }


  dialogue(e){
    
    if(e.keyCode == all_commandes['interaction']){
      if(direction_player == "../img/player_move_right.png" || direction_player == "../img/player_move_right1.png" || direction_player == "../img/player_move_right2.png"){
        if(create_map[position_player_y][position_player_x +1] == this.chiffre){
          this.image = this.left;
          check_if_quest(this.nom)
          pnj_dialogue(e, pnj_texte); 
          
           
        }
      } else if(direction_player == "../img/player_move_left.png" || direction_player == "../img/player_move_left1.png" || direction_player == "../img/player_move_left2.png"){
        if(create_map[position_player_y][position_player_x - 1] == this.chiffre){
          this.image = this.right;
          check_if_quest(this.nom)
          pnj_dialogue(e, pnj_texte); 
        }
      } else if(direction_player == "../img/player_move_up.png" || direction_player == "../img/player_move_up1.png" ||direction_player == "../img/player_move_up2.png"){ /* up */
        if(create_map[position_player_y - 1][position_player_x] == this.chiffre){
          this.image = this.down;
          check_if_quest(this.nom)
          pnj_dialogue(e, pnj_texte); 
        }
      } else if(direction_player == "../img/player_move_down.png" || direction_player == "../img/player_move_down1.png" || direction_player == "../img/player_move_down2.png"){ /* down */
        if(create_map[position_player_y + 1][position_player_x] == this.chiffre){
          this.image = this.up;
          check_if_quest(this.nom)
          pnj_dialogue(e, pnj_texte); 
        }
      }

    }
  }



}

function placement_slime(){
  for(let m = 0 ; m < liste_monstre.length ; m++){
    liste_monstre[m].move_slime()
  }
};

function pnj_dialogue(e, pnj_texte){ 
  /* On récupère le container qui stock le texte */
  let container = document.getElementById('container');
  

  /* Affiche ou cache le container qui stock le texte */
  container.style.visibility = container.style.visibility == "visible" ? "hidden" : "visible";

  /* On récupère la div 'text' qui contiendra notre texte */
  let textElement = document.getElementById('text');
  let text = pnj_texte;
  

  /* On injecte notre texte dans la div dont l'id est 'text' */
  textElement.innerText = text[dialogue_count];
  /* Empêche le joueur de se déplacer si la boite dialogue est encore ouverte. */
  if(container.style.visibility == "visible"){
    can_move = false;
  } else {
    can_move = true;
    if(dialogue_count < (text.length - 1)){
      dialogue_count++;
    } else if(dialogue_count == (text.length - 1)){
      dialogue_count = 0;
    }
  }
  
};



/* Test de quête*/

function check_if_quest(name){
  if(name=="Amanda"){
    AmandaQuest()
  } else if(name=="Thierry") {
    pnj_texte = ["Tu es encore là ?", "Tu vois le personnage à coté de l'ordinateur ?", "Tu devrais aller la voir."]
  }

  if(name == "computer"){
    Computer_Talk()
  }
}

function Computer_Talk(){
  if(player_inventory.includes("Decollage")){
    window.location.replace("win.html");
  }
  if(player_inventory.includes(batterie) && player_inventory.includes(clé) && player_inventory.includes(boussole)
  && player_inventory.includes(reacteur)){
    pnj_texte = ["Initialisation...", "Démarrage des circuits...", "Opération réussie !"];
    if(!player_inventory.includes("computer_quest_is_done")){
      player_inventory.push("computer_quest_is_done");
    }
  }else{
    if(!player_inventory.includes(clé)){
      pnj_texte = ["L'ordinateur de bord est HS !", "Vous allez avoir besoin d'une clé à molette."];
    } else {
      pnj_texte = ["Initialisation...", "Démarrage des circuits...", "ErrEUR !", "Des composants sont manquants.", "Arrêt de la procédure..."];
      if(!player_inventory.includes("computer_operationnel")){
        player_inventory.push("computer_operationnel");
      }
    }
  }
  

}
function AmandaQuest() {
  if(player_inventory.includes("computer_operationnel")){
    if(player_inventory.includes(batterie) && player_inventory.includes(clé) && player_inventory.includes(boussole)
  && player_inventory.includes(reacteur)){
      if(!player_inventory.includes("computer_quest_is_done")){
      pnj_texte = ["Bravo, tu as retrouvé toutes les pièces !", "Tu peux maintenant réactiver l'ordinateur."];
      } else {
        pnj_texte = ["L'ordinateur de bord est à présent opérationnel.", "Nous pouvons enfn quitter cette planète !", "Parle à l'ordinateur de bord pour décoller !"];
        player_inventory.push("Decollage")
      }
    } else {
      pnj_texte = ["L'ordinateur de bord ne peux pas démarrer car il nous manque quelques pièces...", "La batterie...", "La boussole...", "Et enfin le morceau de réacteur.", "Elles sont sûrement à l'extérieur. Retrouve les et ramène les moi."];
    }
  } else {
    pnj_texte = ["...", "Le vaisseau est hors-service !", "Pour notre survie, tu dois absolument réactiver le tableau de bord.", "Pour celà, il te faut une clé à molette."];
  }
  
};

class objet{
  constructor(nom, image, location, position_x, position_y, chiffre, identifiant){
    this.nom = nom;
    this.image = image;
    this.location = location;
    this.position_x = position_x;
    this.position_y = position_y;
    this.chiffre = chiffre;
    this.identifiant = identifiant;
  }
  creer(){
    if(image_map_actuelle == this.location){
      pnj_test[this.position_x][this.position_y] = this.chiffre};
  }

  pose_objet(){
    if(image_map_actuelle == this.location){
      if(this.nom == "clé_molette"){
        document.getElementById(this.identifiant).style.background = 'url('+this.image+') 3px 0px'
      };
      
      if(this.nom == "batterie_vaisseau"){
        document.getElementById(this.identifiant).style.background = 'url('+this.image+') 3px -25px'
      };

      if (this.nom == "reacteur_vaisseau") {
        document.getElementById(this.identifiant).style.background = 'url(' + this.image + ') 3px -50px'
      };
      if (this.nom == "boussole_vaisseau") {
        document.getElementById(this.identifiant).style.background = 'url(' + this.image + ') 3px -75px'
      };
    }  
  }


  put_in_inventory(e){
    if(e.keyCode == all_commandes['interaction']){
      if(direction_player == "../img/player_move_left.png" || direction_player == "../img/player_move_left1.png" || direction_player == "../img/player_move_left2.png" ){ /* left */
        if(create_map[position_player_y][position_player_x -1] == this.chiffre){ 
          pnj_texte = ["Vous avez trouvé " + this.nom, ""];
          pnj_dialogue(e, pnj_texte); 
          if(dialogue_count == 1 ){  
            player_inventory.push(this);
            update_inventory()
            pnj_texte = []}
          
          
        }
      }else if(direction_player == "../img/player_move_right.png" ||direction_player == "../img/player_move_right1.png" ||direction_player == "../img/player_move_right2.png"){ /* right */
        if(create_map[position_player_y][position_player_x + 1] == this.chiffre){
          pnj_texte = ["Vous avez trouvé " + this.nom, ""];
          pnj_dialogue(e, pnj_texte); 
          if(dialogue_count == 1){  
            player_inventory.push(this);
            update_inventory()
            pnj_texte = []}
          
        }
      } else if(direction_player == "../img/player_move_up.png" || direction_player == "../img/player_move_up1.png" || direction_player == "../img/player_move_up2.png"){ /* up */
          if(create_map[position_player_y - 1][position_player_x] == this.chiffre){
            pnj_texte = ["Vous avez trouvé " + this.nom, ""];
            pnj_dialogue(e, pnj_texte); 
            if(dialogue_count == 1){  
              player_inventory.push(this);
              update_inventory()
              pnj_texte = []}
            
          }
      } else if(direction_player == "../img/player_move_down.png" || direction_player == "../img/player_move_down1.png" || direction_player == "../img/player_move_down2.png"){ /* down */
          if(create_map[position_player_y + 1][position_player_x] == this.chiffre){
            pnj_texte = ["Vous avez trouvé " + this.nom, ""];
            pnj_dialogue(e, pnj_texte); 
            if(dialogue_count == 1){  
              player_inventory.push(this);
              update_inventory()
              pnj_texte = []}
            
          }
      }
    } 

  }

  is_in_inventory(){
    if(player_inventory.includes(this)){
      return true
    } else {
      return false
    }
  }

};

// affiche inventory
function update_inventory(){
  document.getElementById("all_objet").remove()
  const all_objet = document.createElement("div");
  all_objet.setAttribute("id","all_objet");
  document.getElementById("inventory").appendChild(all_objet);
  for(let i = 0 ; i < player_inventory.length ; i++){
    const objet = document.createElement("div");
    objet.setAttribute("id",player_inventory[i].identifiant)
    document.getElementById("all_objet").appendChild(objet);
  }
}

