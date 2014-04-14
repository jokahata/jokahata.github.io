// Tutorial from lessmilk.com

// And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc.
var play_state = {
    create: function() { 
        // Display the bird
        this.bird = this.game.add.sprite(100, 245, 'bird');

        // Add gravity to the bird
        this.bird.body.gravity.y = 1000;


        // Add scoring        // Call 'jump' when spacebar is pressed
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);

        // Create a group of pipes
        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');
        
        //Add a timer for pipes
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);

        score = 0;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style);

        //Change bird's anchor
        this.bird.anchor.setTo(-0.2, 0.5);

        //Jump sound
        this.jump_sound = this.game.add.audio('jump');


    },

    update: function() {
        // If bird is too high or too low, restart the game
        if (this.bird.inWorld == false) 
        {
        	this.restart_game();
        }

        // Collision check
        this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);

        //Make it go downwards
        if (this.bird.angle < 20)
        {
            this.bird.angle += 1;
        }
    }, 

    // Make bird jump
    jump: function() {

        if (this.bird.alive == false)  
            return; 

        this.jump_sound.play();

    	//Add vertical velocity to the bird
    	this.bird.body.velocity.y = -350;

        //Create animation
        var animation = this.game.add.tween(this.bird);

        //20 degrees, 100 milliseconds
        animation.to({angle: -20}, 100);

        animation.start();
    },

    //Reset the game
    restart_game: function() {
    	// Reset the timer
    	this.game.time.events.remove(this.timer);

    	// Start the 'main' state
    	this.game.state.start('menu');
    },

    add_one_pipe: function(x, y) {
    	//Get the first dead pipe of the group
    	var pipe = this.pipes.getFirstDead();

    	//Set the new position of the pipe
    	pipe.reset(x, y);

    	// Add velocity of the pipe to make it move left
    	pipe.body.velocity.x  = -200;

    	// Kill the pipe when it's no longer visible
    	pipe.outOfBoundsKill = true;
    },

    add_row_of_pipes: function() {
    	var hole = Math.floor(Math.random()*5) + 1;

    	score += 1;
    	this.label_score.content = this.score;

    	for (var i = 0; i < 8; i++)
    	{
    		if (i != hole && i != hole + 1)
    		{
    			this.add_one_pipe(400, i*60 + 10);
    		}
    	}
    },

    hit_pipe: function() 
    {  
        // If the bird has already hit a pipe, we have nothing to do
        if (this.bird.alive == false)
            return;

        // Set the alive property of the bird to false
        this.bird.alive = false;

        // Prevent new pipes from appearing
        this.game.time.events.remove(this.timer);

        // Go through all the pipes, and stop their movement
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    }


}
 