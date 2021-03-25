
new Vue({
    el: "#app",
    data: {
        isActive: false,
        squares: [null, null, null, null, null, null, null, null, null],
        // page_active: "intro",
        jeu: false,
        tour: "X",
        gagnant: false
    },
    methods: {
        
        
        // Changer de tour après avoir cliquer
        changerTour: function(index){ 
            // Doit vérifier si la case est NULL si oui faire le code suivant!!!

                // ajouter le X ou O dans la casse
                Vue.set(this.squares, index, this.squares[index] = this.tour)
    
                // changer de joueur
                if (this.tour == "X"){
                    this.tour = "O"
                } else if (this.tour == "O"){
                    this.tour = "X"
                }

                // Vérifier si joueur X a gagné      
                if(this.squares[0]== "X"&&this.squares[1]== "X"&&this.squares[2] == "X"){
                    this.jeu = false 
                    this.gagnant = true 
                    this.tour = "X"
                    
                }
                if(this.squares[3]== "X"&&this.squares[4]== "X"&&this.squares[5] == "X"){
                    this.jeu = false 
                    this.gagnant = "Joueur X a gagné!"
                }
                if(this.squares[6]== "X"&&this.squares[7]== "X"&&this.squares[8] == "X"){
                    this.jeu = false 
                    this.gagnant = "Joueur X a gagné!"
                }
            

            
            
        },

        
    },
    mounted(){

    }
})