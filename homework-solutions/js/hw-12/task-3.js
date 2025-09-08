// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

class User {
  constructor(user, albums = []) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.company = user.company?.name ?? 'none';
    this.albums = albums;
  }

  toString() {
    let result = `${this.id}. name: ${this.name}\n`;
    result += `   email: ${this.email}\n`;
    result += `   phone: ${this.phone}\n`;
    result += `   company: ${this.company}\n`;
    result += `   albums:\n`;
    this.albums.forEach((album) => result += `     ${album}\n`);
    result += '__________________________________\n';
    return result;
  }
}

async function sendRequest(endpoint) {
  const url = 'https://jsonplaceholder.typicode.com/' + endpoint;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to execute request GET ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

async function getUsersWithAlbumsAndPhotos() {
  const [users, albums, photos] = await Promise.all(['users', 'albums', 'photos'].map(sendRequest));
  if(!users || !albums || !photos) return [];
  return users.map((user) => {
    const albumsStrings = albums
      .filter((album) => album.userId === user.id)
      .map((album) => {
        const albumPhotosNumber = photos.filter((photo) => album.id === photo.albumId).length;
        return `${album.title} (${albumPhotosNumber} photos)`;
      });
    return new User(user, albumsStrings);
  });
}

getUsersWithAlbumsAndPhotos().then((users) => users.forEach((user) => console.log(user.toString())));
