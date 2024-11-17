const campusGraph = {
    SRC: [{ building: 'B', distance: 4 }, { building: 'TG', distance: 4 },
        { building: 'D', distance: 2.5 }, { building: 'SCPS', distance: 1.5 }
    ],
    B: [{ building: 'SRC', distance: 4 }, { building: 'TG', distance: 4 }, 
        { building: 'CPAC', distance: 3.5 }, { building: 'PL', distance: 3 },
        { building: 'TSU', distance: 3 }],
    TG: [{ building: 'SRC', distance: 4 }, { building: 'B', distance: 3.5 }, 
        { building: 'PL', distance: 4 }, { building: 'TTC', distance: 3.5 },
        { building: 'SHCC', distance: 4 }],
    CPAC: [{ building: 'B', distance: 3.5 }, { building: 'PL', distance: 4 },
        { building: 'MH', distance: 3.5 }, { building: 'GC', distance: 2.5 },
        { building: 'VA', distance: 5.5 }, { building: 'QUAD', distance: 3 }],
    PL: [{ building: 'B', distance: 3 }, { building: 'TG', distance: 4 },
        { building: 'EC', distance: 2.5 }, { building: 'CPAC', distance: 4 },
        { building: 'QUAD', distance: 2.5 }],
    EC: [{ building: 'PL', distance: 2.5 }, { building: 'H', distance: 2 },
        { building: 'SHCC', distance: 4.2 }, { building: 'I', distance: 3 }],
    MH: [{ building: 'CPAC', distance: 3.5 }, { building: 'GH', distance: 3 }, 
        { building: 'QUAD', distance: 2 }, { building: 'DBH', distance: 2 },
         { building: 'LH', distance: 2.5 }, { building: 'GC', distance: 3.4 }],
    GH: [{ building: 'MH', distance: 3 }, { building: 'H', distance: 2 },
        { building: 'LH', distance: 2 }, { building: 'SGMH', distance: 2.8 }],
    H: [{ building: 'QUAD', distance: 2.7 }, { building: 'GH', distance: 2 },
        { building: 'EC', distance: 2 }, { building: 'F', distance: 2.5 }],
    D: [{ building: 'SRC', distance: 2.5 }, { building: 'CY', distance: 3 },
        { building: 'TTC', distance: 2 }],
    SCPS: [{ building: 'SRC', distance: 1.5 }, { building: 'UP', distance: 1 },
        { building: 'CY', distance: 3 }],
    TSU: [{ building: 'B', distance: 3 }, { building: 'GAH', distance: 2 },
        { building: 'TH', distance: 4.5 }, { building: 'VA', distance: 3 }],
    TTC: [{ building: 'TG', distance: 3.5 }, { building: 'D', distance: 2 }, 
        { building: 'TTF', distance: 3.5 }],
    SHCC: [{ building: 'TG', distance: 4 }, { building: 'EC', distance: 4.2 },
        { building: 'RGC', distance: 3 }, { building: 'E', distance: 3.5 }],
    GC: [{ building: 'CPAC', distance: 2.5 }, { building: 'MH', distance: 3.4 }, 
        { building: 'NPS', distance: 4.5 }, { building: 'DBH', distance: 2 }],
    VA: [{ building: 'CPAC', distance: 5.5 }, { building: 'TH', distance: 1.5 },
        { building: 'TSU', distance: 3 }, { building: 'NPS', distance: 5.5 }],
    QUAD: [{ building: 'CPAC', distance: 3 }, { building: 'PL', distance: 2.5 }, 
        { building: 'MH', distance: 2 }, { building: 'H', distance: 2.7 }],
    I: [{ building: 'EC', distance: 3 }, { building: 'E', distance: 2 }, 
        { building: 'F', distance: 3 }, { building: 'ENPS', distance: 3 }],
    DBH: [{ building: 'MH', distance: 2 }, { building: 'MC', distance: 1.5 }, 
        { building: 'GC', distance: 2 }],
    LH: [{ building: 'MH', distance: 2.5 }, { building: 'GH', distance: 2 }, 
        { building: 'MC', distance: 2 }, { building: 'SGMH', distance: 2 }],
    SGMH: [{ building: 'GH', distance: 2.8 }, { building: 'CP', distance: 3 }, 
        { building: 'MARRIOTT', distance: 4.5 }, { building: 'LH', distance: 2 }],
    F: [{ building: 'H', distance: 2.5 }, { building: 'MARRIOTT', distance: 5.5 }, 
        { building: 'ESPS', distance: 3 }, { building: 'I', distance: 3 }],
    UP: [{ building: 'SCPS', distance: 1 }, { building: 'GAH', distance: 1.5 }],
    CY: [{ building: 'P', distance: 0.5 }, { building: 'SCPS', distance: 3 }, 
        { building: 'CY', distance: 3 } ],
    GAH: [{ building: 'TSU', distance: 2 }],
    P: [{ building: 'CY', distance: 0.5 }, { building: 'Asouth', distance: 1.5 }],
    TTF: [{ building: 'TTC', distance: 3.5 }, { building: 'TSC', distance: 2 }],
    TSC: [{ building: 'TTF', distance: 3 }, { building: 'TSF', distance: 3.5 },
        { building: 'AF', distance: 2 }, { building: 'TS', distance: 4 },
        { building: 'GF', distance: 4.2 }],
    TSF: [{ building: 'TSC', distance: 3.5 }, { building: 'AF', distance: 3.4 },
        { building: 'RGC', distance: 6 }],
    AF: [{ building: 'TSC', distance: 2 }, { building: 'TSF', distance: 3.4 },
        { building: 'FA', distance: 5.5 }],
    TS: [{ building: 'TSC', distance: 4 }, { building: 'A', distance: 6 },
        { building: 'G', distance: 5.9 }],
    G: [{ building: 'A', distance: 9 }, { building: 'TS', distance: 5.9 }, 
        { building: 'GF', distance: 4.5 }],
    GF: [{ building: 'G', distance: 4.5 }],
    Asouth: [{ building: 'A', distance: 6 }, { building: 'P', distance: 1.5 }, 
        { building: 'CC', distance: 3 }],
    A: [{ building: 'Asouth', distance: 6 }],
    FA: [{ building: 'AF', distance: 5.5 }],
    RGC: [{ building: 'TSF', distance: 6 }, { building: 'RH', distance: 3 }, 
        { building: 'SHCC', distance: 3 }],
    RH: [{ building: 'RGC', distance: 3 }, { building: 'CS', distance: 5.5 }],
    E: [{ building: 'SHCC', distance: 3.5 }, { building: 'CS', distance: 1 },
        { building: 'I', distance: 2 }
    ],
    CS: [{ building: 'RH', distance: 5.5 }, { building: 'E', distance: 1 }],
    TH: [{ building: 'TSU', distance: 4.5 }, { building: 'ASC', distance: 1 },
        { building: 'VA', distance: 1.5 }],
    ASC: [{ building: 'TH', distance: 1 }],
    NPS: [{ building: 'VA', distance: 5.5 }, { building: 'GC', distance: 4.5 }],
    CP: [{ building: 'SGMH', distance: 3 }, { building: 'S', distance: 3.5 }],
    S: [{ building: 'CP', distance: 3.5 }],
    MARRIOTT: [{ building: 'SGMH', distance: 4.5 }],
    ESPS: [{ building: 'F', distance: 3 }, { building: 'ENPS', distance: 1.5 }],
    ENPS: [{ building: 'ENPS', distance: 1.5 }, { building: 'I', distance: 3 }],
    MC: [{ building: 'DBH', distance: 1.5 }, { building: 'LH', distance: 2 }],
    CC: [{ building: 'Asouth', distance: 3 }],
}; //cm

let needReset = false;
let accessibilityEnabled = false;
let hasClosedPaths = true;
let selectedAlgorithm = 'dijkstra';
let startBuilding = null;
let endBuilding = null;

function reset() {
    startBuilding = null;
    endBuilding = null;
    document.getElementById('output').innerText = 'Select two buildings for shortest path.';
    document.getElementById('accessibility').checked = false;
    accessibilityEnabled = false;
    drawInitialEdges();
    console.log('Graph reset to initial state.');
}

function setAlgorithm(algorithm) {
    drawInitialEdges();
    needReset = true;
    if (!accessibilityEnabled){
        document.getElementById('output').innerText = `Select Two Buildings`;
    }
    selectedAlgorithm = algorithm;
    console.log(`Algorithm set to: ${algorithm}`);
}

let nonAccessible = new Set([
    'CPAC-B', 'EC-H', 'CPAC-PL'
]);

let closedPaths = new Set([
    'EC-PL', 'TG-B', 'B-PL'
]);


function toggleAccessibility() {
    accessibilityEnabled = document.getElementById('accessibility').checked;
    if (accessibilityEnabled){
        document.getElementById('output').innerText = "Select Two Buildings \n Red paths aren't Accessibile";
    }
    else{
        document.getElementById('output').innerText = `Select Two Buildings`;
    }
    drawInitialEdges();
    needReset = true;
    
    console.log(`Accessibility mode is ${accessibilityEnabled ? 'enabled' : 'disabled'}`);
}


function selectBuilding(building) {
    if (needReset){
        startBuilding = null;
        endBuilding = null;
        needReset = false;
    }

    if (!startBuilding) {
        drawInitialEdges();
        startBuilding = building;
        document.getElementById('output').innerText = `Start building: ${startBuilding}`;
    } else if (!endBuilding) {
        endBuilding = building;
        document.getElementById('output').innerText = `Calculating shortest path from ${startBuilding} to ${endBuilding}...`;
        
        let path;
        if (selectedAlgorithm == 'dijkstra'){
            path = dijkstra(startBuilding, endBuilding);
            highlightPath(path.path);
            meters = Number(path.distance * 34).toFixed(1);
            document.getElementById('output').innerText = `Shortest path: ${path.path.join(' -> ')} (Distance: ${meters} m)`;
        }
        else if (selectedAlgorithm == 'bfs'){
            console.log(`BFS ENTERED`);
            path = bfs(startBuilding, endBuilding);
            console.log(`BFS called`);
            highlightPath(path);
            document.getElementById('output').innerText = `Shortest path: ${path.join(' -> ')}`;
        }
        else if (selectedAlgorithm == 'dfs'){
            path = dfs(startBuilding, endBuilding);
            highlightPath(path);
            // for (let i = 0; i < allPaths.length; i++) {
            //     highlightPath(allPaths[i]);
            // }
            document.getElementById('output').innerText = `Available paths are shown`;
        }

        startBuilding = endBuilding = null; 
    }
}

function highlightPath(path) {
    if (!path || path.length === 0) {
        console.warn("No valid path found to highlight.");
        return;
    }
    else{
        for (let i = 0; i < path.length - 1; i++) {
            highlightEdge(path[i], path[i + 1], 'blue');
        }
    }
}

const canvas = document.getElementById('connections');
const ctx = canvas.getContext('2d');

const buildingPositions = {
    SRC: { top: '452px', left: '185px' },
    B: { top: '541px', left: '237px' },
    TG: { top: '455px', left: '293px' },
    CPAC: { top: '640px', left: '245px' },
    PL: { top: '570px', left: '325px' },
    EC: { top: '582px', left: '388px' },
    MH: { top: '700px', left: '314px' },
    GH: { top: '700px', left: '394px' },
    H: { top: '642px', left: '395px' },
    TSU: { top: '548px', left: '132px' }, /** 10 */
    VA: { top: '622px', left: '105px' },
    DBH: { top: '738px', left: '280px' },
    GC: { top: '703px', left: '227px' },
    LH: { top: '745px', left: '364px' },
    SHCC: { top: '465px', left: '394px' },
    SGMH: { top: '773px', left: '417px' },
    GAH: { top: '512px', left: '90px' },
    ASC: { top: '578px', left: '20px' },
    TH: { top: '609px', left: '47px' },
    MC: { top: '773px', left: '304px' }, /** 20 */
    UP: { top: '457px', left: '90px' },
    CY: { top: '359px', left: '97px' },
    D: { top: '382px', left: '178px' },
    TTC: { top: '377px', left: '230px' },
    TTF: { top: '303px', left: '279px' },
    TSF: { top: '298px', left: '373px' },
    AF: { top: '236px', left: '352px' },
    GF: { top: '168px', left: '322px' },
    TS: { top: '197px', left: '237px' },
    G: { top: '83px', left: '259px' }, /** 30 */
    A: { top: '165px', left: '118px' },
    Asouth: { top: '293px', left: '119px' },
    P: { top: '332px', left: '87px' },
    CC: { top: '255px', left: '134px' }, 
    FA: { top: '189px', left: '470px' },
    E: { top: '513px', left: '453px' },
    CS: { top: '513px', left: '484px' },
    I: { top: '569px', left: '463px' },
    F: { top: '648px', left: '464px' },
    RGC: { top: '427px', left: '448px' }, /** 40 */
    ENPS: { top: '605px', left: '538px' },
    ESPS: { top: '657px', left: '538px' },
    CP: { top: '850px', left: '424px' },
    S: { top: '940px', left: '436px' },
    NPS: { top: '741px', left: '138px' }, /** 45 */
    SCPS: { top: '452px', left: '137px' },
    QUAD: { top: '647px', left: '323px' },
    RH: { top: '410px', left: '518px' },
    MARRIOTT: { top: '763px', left: '527px' },
    TSC: { top: '259px', left: '308px' }, /** 50 */
};

Object.keys(buildingPositions).forEach(building => {
    const position = buildingPositions[building];
    document.getElementById(building).style.top = position.top;
    document.getElementById(building).style.left = position.left;
});

// Function to highlight and unhighlight specific edges
function highlightEdge(start, end, color = 'blue') {
    const startPos = buildingPositions[start];
    const endPos = buildingPositions[end];

    const startTop = parseInt(startPos.top, 10);
    const startLeft = parseInt(startPos.left, 10);
    const endTop = parseInt(endPos.top, 10);
    const endLeft = parseInt(endPos.left, 10);

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startLeft, startTop);
    ctx.lineTo(endLeft, endTop);
    ctx.stroke();
}

function drawInitialEdges() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let building in campusGraph) {
        campusGraph[building].forEach(connection => {
            let color = 'rgba(128, 128, 128)';  

            const pathKey1 = `${building}-${connection.building}`;
            const pathKey2 = `${connection.building}-${building}`;

            if (accessibilityEnabled && (nonAccessible.has(pathKey1) || nonAccessible.has(pathKey2))) {
                color = 'red';
            } else if (hasClosedPaths && (closedPaths.has(pathKey1) || closedPaths.has(pathKey2))) {
                color = 'orange';
            }

            highlightEdge(building, connection.building, color);
        });
    }


}

drawInitialEdges();


function dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const queue = new Set(Object.keys(campusGraph));

    // Initialize distances and previous
    for (let node of queue) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;

    while (queue.size > 0) {
        // Get the node with the smallest distance
        let minNode = [...queue].reduce((min, node) => distances[node] < distances[min] ? node : min);

        // If we've reached the end building, build the path and return it
        if (minNode === end) {
            const path = [];
            let current = end;
            while (current) {
                path.unshift(current);
                current = previous[current];
            }
            return { path, distance: distances[end] };
        }

        queue.delete(minNode);

        // Update distances to neighbors
        for (let neighbor of campusGraph[minNode]) {
            const pathKey1 = `${minNode}-${neighbor.building}`;
            const pathKey2 = `${neighbor.building}-${minNode}`;
            if ((accessibilityEnabled && (nonAccessible.has(pathKey1) || nonAccessible.has(pathKey2)))) {
                continue;
            }
            if (hasClosedPaths && (closedPaths.has(pathKey1) || closedPaths.has(pathKey2))){
                continue;
            }
            const alt = distances[minNode] + neighbor.distance;

            if (alt < distances[neighbor.building]) {
                distances[neighbor.building] = alt;
                previous[neighbor.building] = minNode;
            }
        }
    }
    return { path: [], distance: Infinity }; // If no path found
}

function bfs(start, end) {
    // Initialize the queue with the starting building in a path array
    let queue = [[start]];
    // Track visited buildings to avoid revisiting
    let visited = new Set([start]);

    // Begin the BFS loop
    while (queue.length > 0) {
        // Dequeue the first path from the queue
        let path = queue.shift();
        let building = path[path.length - 1];

        // If we reached the destination, return the path
        if (building === end) {
            return path;
        }

        // Explore each unvisited neighbor of the current building
        for (let neighbor of campusGraph[building]) {
            const pathKey1 = `${building}-${neighbor.building}`;
            const pathKey2 = `${neighbor.building}-${building}`;
            if (hasClosedPaths && (closedPaths.has(pathKey1) || closedPaths.has(pathKey2))) continue;

            // Skip if the path is inaccessible
            if (accessibilityEnabled && (nonAccessible.has(pathKey1) || nonAccessible.has(pathKey2))) continue;

            if (!visited.has(neighbor.building)) {
                visited.add(neighbor.building);
                queue.push([...path, neighbor.building]);
            }
        }
    }

    // If no path was found, return an empty array
    return [];
}

function dfs(start, end) {
    // Stack for DFS, stores the path to the current building
    let stack = [[start]];
    // Set to keep track of visited buildings to avoid cycles
    let visited = new Set([start]);

    // Begin the DFS loop
    while (stack.length > 0) {
        // Pop the last path from the stack
        let path = stack.pop();
        let building = path[path.length - 1];

        // If we reached the destination, return the path
        if (building === end) {
            return path;
        }

        // Explore each unvisited neighbor of the current building
        for (let neighbor of campusGraph[building]) {
            const pathKey1 = `${building}-${neighbor.building}`;
            const pathKey2 = `${neighbor.building}-${building}`;
            if (hasClosedPaths && (closedPaths.has(pathKey1) || closedPaths.has(pathKey2))) continue;

            if (accessibilityEnabled && (nonAccessible.has(pathKey1) || nonAccessible.has(pathKey2))) continue;

            if (!visited.has(neighbor.building)) {
                visited.add(neighbor.building);
                stack.push([...path, neighbor.building]);
            }
        }
    }

    return [];
}