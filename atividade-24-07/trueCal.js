const DB_VERSION = 2;
const STORE_NAME = 'MyObjectStore';
const DB_NAME = 'MyDatabase';

var db;

// Open or create the database
const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onerror = (event) => {
    console.error("IndexedDB error:", event.target.errorCode);
};

request.onsuccess = (event) => {
    console.log("abri o db!")
    db = event.target.result;
    console.log("Database opened successfully");
    mostrarRegistros()
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        console.log("Object store created");
    }
};


const soma= () => {
    let nums = getNums();
    addHistorico(parseFloat(nums.n1 + nums.n2), nums, "+");
}
const menos= () => {
    let nums = getNums();
    addHistorico(parseFloat(nums.n1 - nums.n2), nums, "-");
}
const div= () => {
    let nums = getNums();
    addHistorico(parseFloat(nums.n1 / nums.n2), nums, "/");
}
const mult = () => {
    let nums = getNums();
    addHistorico(parseFloat(nums.n1 * nums.n2), nums, "X");
}
const getNums = () => {
    return {
        n1 : document.getElementById("n1").value -0 ,
        n2 : document.getElementById("n2").value- 0
    }
}

let vetor = [];
const addHistorico = (num, nums, simbolo) => {
    temp = {
        operando1: nums.n1,
        operando2: nums.n2,
        operacao: simbolo,
        resultado: num
    }
    vetor.push(temp);
    saveData(temp);
}

const saveData = (data) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const objectStore = transaction.objectStore(STORE_NAME);
    const addRequest = objectStore.add({ key: "registro"+vetor.length, value: data });

    addRequest.onsuccess = function() {
        document.querySelectorAll("li").forEach(e => {
            e.remove();
        });
        mostrarRegistros();
    };
}
const mostrarRegistros = () => {
    console.log("comecando a mostrar os registros")
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const objectStore = transaction.objectStore(STORE_NAME);
    const outputDiv = document.getElementById('historico');
    outputDiv.innerHTML = ''; 
    vetor = [];
    objectStore.openCursor().onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
            let element = document.createElement("li");
            console.log(cursor.value.value)
            element.innerHTML = cursor.value.value.operando1 + " " +cursor.value.value.operacao + " " + cursor.value.value.operando2 + " = " + cursor.value.value.resultado;
            outputDiv.appendChild(element);
            vetor.push(cursor.value);
            cursor.continue();
        } else {
            console.log("All data retrieved");
        }
    };
}