while (true) {
    console.log(input.lightLevel())
    if (input.lightLevel() > 80 * 7) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() > 70 * 7) {
        light.setAll(light.rgb(0, 255, 255))
    } else if (input.lightLevel() > 60 * 7) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
