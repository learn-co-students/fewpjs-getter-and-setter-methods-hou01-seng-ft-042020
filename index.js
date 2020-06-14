// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newdiam) {
        this.radius = newdiam / 2
    }

    get circumference() {
        return pi * this.diameter
    }

    set circumference(newcircum) {
        this.diameter = newcircum / pi
    }

    get area() {
        return pi * (this.radius ** 2)
    }

    set area(newarea) {
        this.radius = Math.sqrt( newarea / pi)
    }
}