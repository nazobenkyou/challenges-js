/*
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.
 */

const distanceBetweenBusStops = (distance, start, destination) => {
    let cw, ccw
    cw = ccw = 0
    const n = distance.length

    for (let i = start; i !== destination; i = (i + 1) % n) {
        cw += distance[i]
    }

    for (let i = destination; i !== start; i = (i + 1) % n) {
        ccw += distance[i]
    }

    return cw < ccw ? cw : ccw
}

const main = () => {
    console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1))
    console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2))
    console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3))
    console.log(distanceBetweenBusStops([1, 2, 3, 4, 5, 6, 7, 8], 3, 7))
    console.log(distanceBetweenBusStops([1, 2, 3, 4], 3, 0))
    console.log(distanceBetweenBusStops([1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4], 3, 0))
    console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2))
    console.log(distanceBetweenBusStops([8, 11, 6, 7, 10, 11, 2], 0, 3))
}

main()