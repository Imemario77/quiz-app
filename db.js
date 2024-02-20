let db;
const dbName = "exam_App";
const dbVersion = 1;
const storeNames = ["username", "history"];

const request = window.indexedDB.open(dbName, dbVersion);

request.onerror = function (event) {
  console.error("Database error: " + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
};

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  storeNames.forEach((storeName) => {
    if (!db.objectStoreNames.contains(storeName)) {
      const store = db.createObjectStore(storeName, {
        keyPath: "id",
        autoIncrement: true,
      });
      if (storeName === "history") {
        store.createIndex("subject", ["subject"], { unique: false });
      }
    }
  });
};

// Assuming db is your IndexedDB database instance and storeName is the name of your object store
function getLastInsertedItem(storeName) {
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);

  const request = objectStore.openCursor(null, "prev"); // Opening cursor in reverse orde

  return new Promise((resolve, reject) => {
    request.onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        // Cursor points to the last item inserted
        resolve(cursor.value);
      } else {
        // No items found
        resolve(null);
      }
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}

function saveToIndexedDB(data, storeName) {
  const transaction = db.transaction([storeName], "readwrite");
  const objectStore = transaction.objectStore(storeName);

  const request = objectStore.add(data);

  request.onsuccess = function (event) {
    return true;
  };

  request.onerror = function (event) {
    console.error("Error saving data to IndexedDB");
    return false;
  };
}

function getHistoryFromDB(data, history_box) {
  const transaction = db.transaction(["history"], "readwrite");
  const objectStore = transaction.objectStore("history");
  const his_sub = objectStore.index("subject");

  const request = his_sub.getAll([data]);
  request.onsuccess = function () {
    request.result.forEach((res) => {
      const div = document.createElement("div");
      div.setAttribute("onclick", "displaySIngleHistory(" + res.id + ")");
      div.innerText = res.date;
      history_box.append(div);
    });
  };

  request.onerror = function () {
    console.error("Error geting data from IndexedDB");
    return null;
  };
}
function getSIngleHistoryFromDB(data) {
  const transaction = db.transaction(["history"], "readwrite");
  const objectStore = transaction.objectStore("history");

  const request = objectStore.get(parseInt(data));
  return new Promise((resolve, reject) => {
    request.onsuccess = function (event) {
      resolve(request.result);
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}
