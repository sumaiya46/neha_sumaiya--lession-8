while True:
    print(input.light_level()) 
    if input.light_level()>80 * 7:
        light.set_all (light.rgb(255, 255, 255))
    elif input.light_level()> 70 * 7:
        light.set_all (light.rgb(0, 255, 255))
    elif input.light_level()>60 * 7:
        light.set_all(light.rgb(255, 0, 255))
    else:
        light.clear()

