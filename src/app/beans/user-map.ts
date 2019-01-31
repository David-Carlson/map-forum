export class UserMap {
    name: string;
    username: string;
    description: string;
    pictureFile: File;
    picture: string | ArrayBuffer;
    mapFile: File;
    static createFromFiles(username: string, name: string, description: string, pictureFile: File, mapFile: File): UserMap  {
        var reader = new FileReader();
        var picture;
        reader.onload = e => picture= reader.result;
        reader.readAsDataURL(pictureFile);
        return new UserMap(username, name, description, pictureFile, picture, mapFile);
    }
    constructor(username: string, name: string, description: string, pictureFile: File, picture: string | ArrayBuffer, mapFile: File) {
        this.username = username; this.name = name; this.description = description;
        this.pictureFile = pictureFile; this.picture = picture; this.mapFile = mapFile;
    }
}

// username, mapName, mapDescription, picture, fileMap