basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 G E G C5 G C5 G ", 240), music.PlaybackMode.UntilDone)
    } else {
        if (input.lightLevel() < 50) {
            music.play(music.stringPlayable("A E C E A E A E ", 120), music.PlaybackMode.UntilDone)
        } else {
        	
        }
    }
})
