import firebase from "../firebase";

export async function getBooks() {
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("books")
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                id: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([]);
      });
  });

  return result;
}

export async function getBook(id) {
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("books")
      .doc(id)
      .get()
      .then((snapshot) => {
        resolve(snapshot.data());
      })
      .catch((error) => {
        console.log(error);
        reject([]);
      });
  });

  return result;
}
