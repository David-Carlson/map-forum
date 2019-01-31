export class UserMap {
    name: string;
    username: string;
    description: string;
    pictureFile: File;
    pictureDataUrl: string | ArrayBuffer;
    mapFile: File;
    static createFromFiles(username: string, name: string, description: string, pictureFile: File, mapFile: File): UserMap  {
        var reader = new FileReader();
        var pictureDataUrl;
        reader.onload = e => pictureDataUrl = reader.result;
        reader.readAsDataURL(pictureFile);
        return new UserMap(username, name, description, pictureFile, pictureDataUrl, mapFile);
    }
    constructor(username: string, name: string, description: string, pictureFile: File, picture: string | ArrayBuffer, mapFile: File) {
        this.username = username; this.name = name; this.description = description;
        this.pictureFile = pictureFile; this.pictureDataUrl = picture; this.mapFile = mapFile;
    }
}

// username, mapName, mapDescription, picture, fileMap