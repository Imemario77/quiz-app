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